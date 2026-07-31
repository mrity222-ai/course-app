const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static frontend assets
app.use(express.static(__dirname));

// --- HYBRID DATABASE ADAPTER (MySQL with JSON File Fallback) ---
let isMySQL = false;
let dbPool = null;
const JSON_DB_PATH = path.join(__dirname, 'database_live.json');

// Initialize JSON database with empty structure if not exists
if (!fs.existsSync(JSON_DB_PATH)) {
    fs.writeFileSync(JSON_DB_PATH, JSON.stringify({
        users: {},
        custom_courses: {},
        snippets: [],
        settings: {}
    }, null, 2));
}

// Read JSON database helper
function readJSONDb() {
    try {
        const data = fs.readFileSync(JSON_DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error("Error reading JSON DB, resetting file:", e);
        return { users: {}, custom_courses: {}, snippets: [], settings: {} };
    }
}

// Write JSON database helper
function writeJSONDb(data) {
    try {
        fs.writeFileSync(JSON_DB_PATH, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error writing JSON DB:", e);
    }
}

// DB Initialization Routine
async function initDatabase() {
    try {
        console.log("⚡ Connecting to MySQL database...");
        dbPool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'codewith_ai_db',
            port: parseInt(process.env.DB_PORT || '3306'),
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Test connection
        const conn = await dbPool.getConnection();
        conn.release();
        isMySQL = true;
        console.log("🎉 MySQL Connected Successfully!");

        // Execute table initialization schema
        await runSchemaSQL();
    } catch (err) {
        isMySQL = false;
        console.warn(`⚠️ MySQL Connection failed (${err.message}). Falling back to Local JSON database (database_live.json)`);
    }
}

// Read schema.sql and create tables if MySQL is active
async function runSchemaSQL() {
    try {
        const sqlPath = path.join(__dirname, 'schema.sql');
        if (fs.existsSync(sqlPath)) {
            const sql = fs.readFileSync(sqlPath, 'utf8');
            // Split queries by semicolon to execute one-by-one (mysql2/promise pool requirement)
            const statements = sql
                .split(';')
                .map(s => s.trim())
                .filter(s => s.length > 0 && !s.startsWith('--'));

            for (const stmt of statements) {
                await dbPool.query(stmt);
            }
            console.log("✓ MySQL database tables verified/created.");
        }
    } catch (err) {
        console.error("❌ Error executing schema.sql:", err.message);
    }
}

// Helper methods to abstract MySQL / JSON queries
const DB = {
    // --- USER SERVICES ---
    async getUser(username) {
        if (isMySQL) {
            const [rows] = await dbPool.query("SELECT * FROM users WHERE username = ?", [username]);
            if (rows.length === 0) return null;
            const r = rows[0];
             return {
                username: r.username,
                password: r.password,
                unlockedSlides: r.unlocked_slides,
                completedSlides: JSON.parse(r.completed_slides || '[]'),
                slideNotes: JSON.parse(r.slide_notes || '{}'),
                timeLogs: JSON.parse(r.time_logs || '[]'),
                alerts: JSON.parse(r.alerts || '[]'),
                tasks: JSON.parse(r.tasks || '[]'),
                unlockedModules: JSON.parse(r.unlocked_modules || '{}'),
                unlockRequested: r.unlock_requested === 1,
                role: r.role
            };
        } else {
            const db = readJSONDb();
            return db.users[username] || null;
        }
    },

    async saveUser(userObj) {
        if (isMySQL) {
            const completed = JSON.stringify(userObj.completedSlides || []);
            const notes = JSON.stringify(userObj.slideNotes || {});
            const logs = JSON.stringify(userObj.timeLogs || []);
            const alerts = JSON.stringify(userObj.alerts || []);
            const tasks = JSON.stringify(userObj.tasks || []);
            const unlockedModules = JSON.stringify(userObj.unlockedModules || {});

            await dbPool.query(
                `INSERT INTO users (username, password, unlocked_slides, completed_slides, slide_notes, time_logs, alerts, tasks, unlocked_modules, unlock_requested, role)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE 
                 password = VALUES(password),
                 unlocked_slides = VALUES(unlocked_slides),
                 completed_slides = VALUES(completed_slides),
                 slide_notes = VALUES(slide_notes),
                 time_logs = VALUES(time_logs),
                 alerts = VALUES(alerts),
                 tasks = VALUES(tasks),
                 unlocked_modules = VALUES(unlocked_modules),
                 unlock_requested = VALUES(unlock_requested),
                 role = VALUES(role)`,
                [
                    userObj.username,
                    userObj.password,
                    userObj.unlockedSlides || 0,
                    completed,
                    notes,
                    logs,
                    alerts,
                    tasks,
                    unlockedModules,
                    userObj.unlockRequested ? 1 : 0,
                    userObj.role || 'student'
                ]
            );
        } else {
            const db = readJSONDb();
            db.users[userObj.username] = {
                username: userObj.username,
                password: userObj.password,
                unlockedSlides: userObj.unlockedSlides || 0,
                completedSlides: userObj.completedSlides || [],
                slideNotes: userObj.slideNotes || {},
                timeLogs: userObj.timeLogs || [],
                alerts: userObj.alerts || [],
                tasks: userObj.tasks || [],
                unlockedModules: userObj.unlockedModules || {},
                unlockRequested: !!userObj.unlockRequested,
                role: userObj.role || 'student'
            };
            writeJSONDb(db);
        }
    },

    async getAllStudents() {
        if (isMySQL) {
            const [rows] = await dbPool.query("SELECT username, unlocked_slides, completed_slides, time_logs, unlocked_modules, role FROM users WHERE role = 'student'");
            return rows.map(r => ({
                username: r.username,
                unlockedSlides: r.unlocked_slides,
                completedSlides: JSON.parse(r.completed_slides || '[]'),
                timeLogs: JSON.parse(r.time_logs || '[]'),
                unlockedModules: JSON.parse(r.unlocked_modules || '{}')
            }));
        } else {
            const db = readJSONDb();
            return Object.values(db.users)
                .filter(u => u.role !== 'admin')
                .map(u => ({
                    username: u.username,
                    unlockedSlides: u.unlockedSlides,
                    completedSlides: u.completedSlides,
                    timeLogs: u.timeLogs,
                    unlockedModules: u.unlockedModules || {}
                }));
        }
    },

    // --- CUSTOM COURSES SERVICES ---
    async getCustomCourses() {
        if (isMySQL) {
            const [rows] = await dbPool.query("SELECT * FROM custom_courses");
            return rows.map(r => ({
                id: r.id,
                title: r.title,
                slides: JSON.parse(r.slides)
            }));
        } else {
            const db = readJSONDb();
            return Object.values(db.custom_courses);
        }
    },

    async saveCustomCourse(course) {
        if (isMySQL) {
            const slidesStr = JSON.stringify(course.slides);
            await dbPool.query(
                `INSERT INTO custom_courses (id, title, slides) VALUES (?, ?, ?)
                 ON DUPLICATE KEY UPDATE title = VALUES(title), slides = VALUES(slides)`,
                [course.id, course.title, slidesStr]
            );
        } else {
            const db = readJSONDb();
            db.custom_courses[course.id] = course;
            writeJSONDb(db);
        }
    },

    async deleteCustomCourse(courseId) {
        if (isMySQL) {
            await dbPool.query("DELETE FROM custom_courses WHERE id = ?", [courseId]);
        } else {
            const db = readJSONDb();
            delete db.custom_courses[courseId];
            writeJSONDb(db);
        }
    },

    // --- SNIPPETS SERVICES ---
    async getSnippets(username) {
        if (isMySQL) {
            const [rows] = await dbPool.query("SELECT * FROM snippets WHERE username = ?", [username]);
            return rows.map(r => ({
                name: r.name,
                code: r.code
            }));
        } else {
            const db = readJSONDb();
            return db.snippets.filter(s => s.username === username);
        }
    },

    async saveSnippet(username, name, code) {
        if (isMySQL) {
            await dbPool.query(
                `INSERT INTO snippets (username, name, code) VALUES (?, ?, ?)`,
                [username, name, code]
            );
        } else {
            const db = readJSONDb();
            db.snippets.push({ username, name, code });
            writeJSONDb(db);
        }
    },

    async deleteSnippet(username, name) {
        if (isMySQL) {
            await dbPool.query("DELETE FROM snippets WHERE username = ? AND name = ?", [username, name]);
        } else {
            const db = readJSONDb();
            db.snippets = db.snippets.filter(s => !(s.username === username && s.name === name));
            writeJSONDb(db);
        }
    },

    // --- SETTINGS CONFIG SERVICES ---
    async getSetting(keyName, defaultValue = '') {
        if (isMySQL) {
            const [rows] = await dbPool.query("SELECT value_text FROM settings WHERE key_name = ?", [keyName]);
            if (rows.length === 0) return defaultValue;
            return rows[0].value_text;
        } else {
            const db = readJSONDb();
            return db.settings[keyName] || defaultValue;
        }
    },

    async saveSetting(keyName, valueText) {
        if (isMySQL) {
            await dbPool.query(
                `INSERT INTO settings (key_name, value_text) VALUES (?, ?)
                 ON DUPLICATE KEY UPDATE value_text = VALUES(value_text)`,
                [keyName, valueText]
            );
        } else {
            const db = readJSONDb();
            db.settings[keyName] = valueText;
            writeJSONDb(db);
        }
    }
};


// --- API ROUTE ENDPOINTS ---

// Auth Endpoints
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password required!" });
        }
        
        const existing = await DB.getUser(username);
        if (existing) {
            return res.status(400).json({ error: "User already exists!" });
        }

        // Set default roles (First user 'admin' is admin, others student)
        const isFirstAdmin = username.toLowerCase() === 'admin';

        const newUser = {
            username,
            password, // Stored directly or hash. Keep clean as previous localStorage passwords
            unlockedSlides: 0,
            completedSlides: [],
            slideNotes: {},
            timeLogs: [],
            alerts: [],
            tasks: [],
            role: isFirstAdmin ? 'admin' : 'student'
        };

        await DB.saveUser(newUser);
        res.json({ success: true, message: "Registration successful!" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userObj = await DB.getUser(username);

        if (!userObj || userObj.password !== password) {
            return res.status(400).json({ error: "Incorrect username or password!" });
        }

        res.json({
            success: true,
            role: userObj.role,
            username: userObj.username
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Student Data Sync Endpoints
app.get('/api/progress/get', async (req, res) => {
    try {
        const { username } = req.query;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "User not found!" });
        
        res.json({
            unlockedSlides: userObj.unlockedSlides,
            completedSlides: userObj.completedSlides,
            timeLogs: userObj.timeLogs,
            alerts: userObj.alerts,
            tasks: userObj.tasks
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/progress/save', async (req, res) => {
    try {
        const { username, unlockedSlides, completedSlides, timeLogs, unlockedModules, alerts, tasks, unlockRequested } = req.body;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "User not found!" });

        if (unlockedSlides !== undefined) userObj.unlockedSlides = unlockedSlides;
        if (completedSlides !== undefined) userObj.completedSlides = completedSlides;
        if (timeLogs !== undefined) userObj.timeLogs = timeLogs;
        if (unlockedModules !== undefined) userObj.unlockedModules = unlockedModules;
        if (alerts !== undefined) userObj.alerts = alerts;
        if (tasks !== undefined) userObj.tasks = tasks;
        if (unlockRequested !== undefined) userObj.unlockRequested = unlockRequested;

        await DB.saveUser(userObj);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Notes Sync Endpoints
app.get('/api/notes/get', async (req, res) => {
    try {
        const { username } = req.query;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "User not found!" });
        res.json({ slideNotes: userObj.slideNotes });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/notes/save', async (req, res) => {
    try {
        const { username, slideNotes } = req.body;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "User not found!" });

        userObj.slideNotes = slideNotes;
        await DB.saveUser(userObj);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Sandbox Snippets Endpoints
app.get('/api/snippets/list', async (req, res) => {
    try {
        const { username } = req.query;
        const snippets = await DB.getSnippets(username);
        res.json(snippets);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/snippets/save', async (req, res) => {
    try {
        const { username, name, code } = req.body;
        await DB.saveSnippet(username, name, code);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/snippets/delete', async (req, res) => {
    try {
        const { username, name } = req.body;
        await DB.deleteSnippet(username, name);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Admin Features Sync Endpoints
app.get('/api/admin/students', async (req, res) => {
    try {
        const students = await DB.getAllStudents();
        res.json(students);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/admin/alert', async (req, res) => {
    try {
        const { username, alertText } = req.body;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "Student not found!" });

        userObj.alerts = userObj.alerts || [];
        userObj.alerts.push(alertText);

        await DB.saveUser(userObj);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/admin/task', async (req, res) => {
    try {
        const { username, taskText } = req.body;
        const userObj = await DB.getUser(username);
        if (!userObj) return res.status(404).json({ error: "Student not found!" });

        userObj.tasks = userObj.tasks || [];
        userObj.tasks.push(taskText);

        await DB.saveUser(userObj);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Custom Course Management Endpoints (Synced online!)
app.get('/api/courses/custom/list', async (req, res) => {
    try {
        const list = await DB.getCustomCourses();
        res.json(list);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/courses/custom/add', async (req, res) => {
    try {
        const { id, title, slides } = req.body;
        await DB.saveCustomCourse({ id, title, slides });
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/courses/custom/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await DB.deleteCustomCourse(id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Sarvam AI Config Endpoints
app.get('/api/config/sarvam_key', async (req, res) => {
    try {
        const key = await DB.getSetting('sarvam_key', 'sk_aa41zj3o_LzmhKFdzcLWoEvOrSWMIJJNR');
        res.json({ key });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/config/sarvam_key', async (req, res) => {
    try {
        const { key } = req.body;
        await DB.saveSetting('sarvam_key', key);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


// Start server listening
initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});

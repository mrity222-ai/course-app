# codewith_ai Course Hub 🚀

A premium, interactive Single Page Application (SPA) roadmap designed for learning Web Development. Built with rich aesthetics, gamified leveling, an AI code explainer mentor, quizzes, custom PDF course compiler, and dynamic database GUI monitors.

---

## 🔑 Admin Portal Setup
1. Open your browser and navigate to: `http://localhost:8080/#admin`
2. Enter the superowner admin credentials:
   - **Username:** `admin`
   - **Password:** `codewith_ai`
3. Upload new PDF courses to compile them into dynamic slides instantly in your browser!

---

## 🛠️ CLI Course Compiler (SuperOwner Utility)
If you want to compile custom course PDF files directly from the command line:
1. Run the Node.js compiler script:
   ```bash
   node superowner_course_compiler.js
   ```
2. Enter the absolute path of the PDF, the Course Title (e.g., "React Course"), and the lowercase Course ID (e.g., "react-dev").
3. The script will parse the PDF and inject the slide data directly into the database!

---

## ⚡ Main Features
- **🤖 AI Code Mentor**: Conversational Hinglish chatbot offering typewriter-animated hints and code explanations.
- **🏆 XP Leveling**: Gamification indicators. Completing modules rewards points to level up.
- **📅 Streaks Grid**: GitHub-style green block contribution chart tracking daily learning consistency.
- **💾 Snippets Saver**: Personal snippet library folder inside sandbox playground to store custom codes.
- **🎨 4 IDE Themes**: Cycle between Dark (default), Light, Cyberpunk Neon, and Nord Frost styles.
- **📊 DB GUI Monitor**: Live MongoDB and Redis visual storage inspector inside sandboxed frames.
- **🎓 PDF Certificate**: Printable completions diploma celebrating student progress.

---

## 💻 Local Execution
Simply serve the folder using a local HTTP server:
```bash
# Install and run local server
npx http-server -p 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 🐙 Push to GitHub
Follow these terminal commands to initialize git and upload code to your GitHub account:

1. Open **Git Bash** or **PowerShell** in the `codewith-ai-project` directory.
2. Initialize repository:
   ```bash
   git init
   ```
3. Stage files:
   ```bash
   git add .
   ```
4. Create initial commit:
   ```bash
   git commit -m "feat: initial commit with premium LMS features"
   ```
5. Create a **new public/private repository** on [github.com](https://github.com).
6. Connect local branch and push code (replace with your actual GitHub URL):
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/your-repository-name.git
   git push -u origin main
   ```

---

## 🌐 Deploying to Vercel (Recommended)
Since this is a fully static client-side project, Vercel hosts it for **free** with one click:

### Option 1: Via Vercel Web Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** -> **"Project"**.
3. Import your newly pushed GitHub repository.
4. Leave all settings at default (Vercel automatically detects the static HTML project).
5. Click **"Deploy"**. Your site is now live on a premium HTTPS subdomain!

### Option 2: Via Vercel CLI
1. Install CLI tools globally:
   ```bash
   npm install -g vercel
   ```
2. Deploy project:
   ```bash
   vercel
   ```

---

## ☁️ Deploying to Render
1. Go to [dashboard.render.com](https://dashboard.render.com) and log in.
2. Click **"New +"** -> **"Static Site"**.
3. Connect your GitHub account and select your repository.
4. Configuration Settings:
   - **Name:** `codewith-ai-hub`
   - **Build Command:** *(Leave Blank)*
   - **Publish Directory:** `.` (dot, meaning root folder)
5. Click **"Create Static Site"**. Render will compile and deploy your web app online.

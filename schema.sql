-- MySQL Database Schema for codewith_ai Platform
CREATE DATABASE IF NOT EXISTS codewith_ai_db;
USE codewith_ai_db;

-- 1. Users table (stores student registrations, credentials, unlocked levels, tasks, and progress logs)
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    unlocked_slides INT DEFAULT 0,
    completed_slides TEXT, -- JSON Array of completed slide indexes
    slide_notes TEXT, -- JSON Object mapping index to notes
    time_logs TEXT, -- JSON Array of time spent tracking objects
    alerts TEXT, -- JSON Array of warnings/messages sent by admin
    tasks TEXT, -- JSON Array of homework tasks assigned by admin
    unlocked_modules TEXT, -- JSON Object mapping module names to unlock flags
    unlock_requested TINYINT DEFAULT 0,
    role VARCHAR(10) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Custom Courses table (stores admin parsed dynamic PDF slide paths)
CREATE TABLE IF NOT EXISTS custom_courses (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slides TEXT NOT NULL, -- JSON Array of Slide items containing levels, headings, sandboxes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Code Snippets library table (stores student practice sandbox codes)
CREATE TABLE IF NOT EXISTS snippets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    code TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

-- 4. Settings configuration table (stores API credentials like Sarvam AI subscription key)
CREATE TABLE IF NOT EXISTS settings (
    key_name VARCHAR(50) PRIMARY KEY,
    value_text TEXT NOT NULL
);

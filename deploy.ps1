# Automated Deploy Script for codewith_ai
$msg = $args[0]
if (!$msg) {
    $msg = "update: sync frontend and backend changes"
}

Write-Host ">>> Syncing changes locally..." -ForegroundColor Cyan

# 1. Sync Frontend Repo
Copy-Item -Path "index.html", "app.js", "style.css", "manifest.json", "sw.js", "icon.jpg", "vercel.json" -Destination "C:\Users\priya\Desktop\codewith-ai-frontend-repo" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "assets" -Destination "C:\Users\priya\Desktop\codewith-ai-frontend-repo" -Recurse -Force -ErrorAction SilentlyContinue

# 2. Sync Backend Repo
Copy-Item -Path "server.js", "schema.sql", "package.json", "package-lock.json", ".env.example", ".gitignore" -Destination "C:\Users\priya\Desktop\codewith-ai-backend-repo" -Force -ErrorAction SilentlyContinue

# 3. Commit and Push Frontend
Write-Host ">>> Pushing Frontend to shanker09/course-app Vercel..." -ForegroundColor Green
cd "C:\Users\priya\Desktop\codewith-ai-frontend-repo"
git add .
git commit -m $msg
git push origin main

# 4. Commit and Push Backend
Write-Host ">>> Pushing Backend to mrity222-ai/course-app Hostinger..." -ForegroundColor Green
cd "C:\Users\priya\Desktop\codewith-ai-backend-repo"
git add .
git commit -m $msg
git push origin main

# 5. Sync Desktop Electron folders
Write-Host ">>> Syncing Desktop Electron folders..." -ForegroundColor Yellow
Copy-Item -Path "C:\Users\priya\Desktop\codewith-ai-project\app.js", "C:\Users\priya\Desktop\codewith-ai-project\server.js", "C:\Users\priya\Desktop\codewith-ai-project\schema.sql" -Destination "C:\Users\priya\Desktop\codewith-ai-desktop-app\resources\app" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "C:\Users\priya\Desktop\codewith-ai-project\app.js", "C:\Users\priya\Desktop\codewith-ai-project\server.js", "C:\Users\priya\Desktop\codewith-ai-project\schema.sql" -Destination "C:\Users\priya\Desktop\codewith_ai-desktop-app\resources\app" -Force -ErrorAction SilentlyContinue

# 6. Re-package ZIP files
Write-Host ">>> Generating Desktop deploy ZIP archives..." -ForegroundColor Yellow
cd "C:\Users\priya\Desktop\codewith-ai-project"
Rename-Item -Path "main.js" -NewName "main_electron.js" -ErrorAction SilentlyContinue
Set-Content -Path "main.js" -Value "require('./server.js');"

Compress-Archive -Path "index.html", "app.js", "style.css", "package.json", "package-lock.json", "server.js", "schema.sql", ".env", ".env.example", ".gitignore", "assets", "manifest.json", "sw.js", "icon.jpg", "main.js", "vercel.json" -DestinationPath "C:\Users\priya\Desktop\codewith-ai-backend-mysql.zip" -Force
Compress-Archive -Path "package.json", "package-lock.json", "server.js", "schema.sql", ".env", ".env.example", ".gitignore", "main.js" -DestinationPath "C:\Users\priya\Desktop\codewith-ai-only-backend.zip" -Force

Remove-Item -Path "main.js" -Force
Rename-Item -Path "main_electron.js" -NewName "main.js" -ErrorAction SilentlyContinue

Write-Host ">>> All deployments updated and pushed!" -ForegroundColor Green

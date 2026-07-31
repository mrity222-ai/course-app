const fs = require('fs');
const path = require('path');
const readline = require('readline');
const pdfParse = require('pdf-parse');

const appJsPath = path.join(__dirname, 'app.js');
const indexHtmlPath = path.join(__dirname, 'index.html');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function compileNewPdfCourse(pdfPath, courseTitle, courseId) {
    console.log(`\n🚀 Starting compilation for: ${courseTitle}...`);

    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: PDF file not found at path: ${pdfPath}`);
        return;
    }

    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        
        // Custom page text extractor to preserve page boundaries
        const pagesText = [];
        const options = {
            pagerender: function(pageData) {
                return pageData.getTextContent().then(function(textContent) {
                    let text = '';
                    for (let item of textContent.items) {
                        text += item.str + '\n';
                    }
                    pagesText.push(text);
                    return text;
                });
            }
        };

        await pdfParse(dataBuffer, options);
        const totalPages = pagesText.length;
        console.log(`📖 Extracted ${totalPages} pages from PDF.`);
        
        // 2. Read current app.js to get total slide length
        let appJsContent = fs.readFileSync(appJsPath, 'utf8');
        
        // Search for slides count
        const existingSlidesCount = (appJsContent.match(/level:/g) || []).length;
        console.log(`📊 Current slides in database: ${existingSlidesCount}`);

        const newSlidesJsList = [];
        const sidebarLinks = [];

        // 3. Parse pages and create slides data
        for (let i = 0; i < totalPages; i++) {
            const pageText = pagesText[i] || "";
            const lines = pageText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            
            const slideIndex = existingSlidesCount + i;
            const slideNumber = slideIndex + 1;

            let title = "";
            let headerIdx = 0;
            if (lines.length > 0) {
                for (let idx = 0; idx < Math.min(3, lines.length); idx++) {
                    const cleaned = lines[idx].replace(/^[-\*\•\s]+/, '').trim();
                    if (cleaned && !/^\d+$/.test(cleaned) && cleaned.length > 2 && !cleaned.toUpperCase().includes('VIRTUAL')) {
                        title = cleaned;
                        headerIdx = idx;
                        break;
                    }
                }
            }
            if (!title) {
                title = `Topic Overview - Page ${i + 1}`;
            }
            if (title.length > 35) {
                title = title.substring(0, 32) + "...";
            }
            title = title.replace(/VIRTUAL CODE/gi, 'codewith_ai');

            // Create bullet points HTML
            let items = [];
            const remainingLines = lines.slice(headerIdx);
            for (let line of remainingLines) {
                let cleanedL = line.replace(/^[-\*\•\s]+/, '').trim();
                cleanedL = cleanedL.replace(/VIRTUAL CODE/gi, 'codewith_ai');
                cleanedL = cleanedL.replace(/`/g, "'");
                if (cleanedL) {
                    items.push(`<li>${cleanedL}</li>`);
                }
            }
            let itemsHtml = items.length > 0 ? `<ul>${items.join('')}</ul>` : `<p>Detail slides content from course guide.</p>`;

            const levelNum = Math.min(5, Math.floor(i / Math.max(1, totalPages / 5)));
            const levelName = `Level ${levelNum}`;
            const slideLevel = `${courseTitle} ${levelName}`;

            const englishHtml = `
            <div class='english-explanation'>
                <div class='english-header'>🇬🇧 English Explanation</div>
                <p>Welcome to <b>${courseTitle}</b>. This slide outlines key concepts on <b>${title}</b>.</p>
            </div>
            `;

            const hinglishHtml = `
            <div class='hinglish-explanation'>
                <div class='hinglish-header'>🇮🇳 Hinglish (आसान भाषा में)</div>
                ${itemsHtml}
            </div>
            `;

            const slideBodyContent = `${englishHtml}\n            ${hinglishHtml}`;

            let sandboxCode = "";
            const pageLower = pageText.toLowerCase();
            if (pageLower.includes('code') || pageLower.includes('function') || pageLower.includes('npm')) {
                sandboxCode = `// Practice Sandbox Code\\nconsole.log(\\"Learning ${title}!\\");`;
            }

            const escapedContent = slideBodyContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

            newSlidesJsList.push(`
    {
        level: "${slideLevel}",
        title: "${title}",
        content: \`${escapedContent}\`,
        sandboxCode: "${sandboxCode}"
    }`);

            sidebarLinks.push(`<li class="slide-link" data-slide="${slideIndex}">${slideNumber}. ${title}</li>`);
        }

        // 4. Generate HTML accordion markup
        const accordionId = `accordion-${courseId}`;
        const toggleIdx = (appJsContent.match(/toggleAccordion\(/g) || []).length;

        const linksHtml = sidebarLinks.join('\n                                ');
        const newAccordionHtml = `
                <!-- ${courseTitle} Module -->
                <div class="accordion-item" id="${accordionId}">
                    <button class="accordion-header" onclick="toggleAccordion(${toggleIdx})">
                        <span class="header-title">{courseTitle}</span>
                        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="level-group" id="nav-${courseId}-group">
                            <div class="level-title">Complete Course Material</div>
                            <ul class="slide-list">
                                ${linksHtml}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
        `;

        // 5. Insert accordion markup in index.html
        let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
        const navEndMarker = '</nav>\n        </aside>';
        const navEndMarkerAlt = '</nav>\r\n        </aside>';

        if (htmlContent.includes(navEndMarker)) {
            htmlContent = htmlContent.replace(navEndMarker, newAccordionHtml);
        } else if (htmlContent.includes(navEndMarkerAlt)) {
            htmlContent = htmlContent.replace(navEndMarkerAlt, newAccordionHtml);
        } else {
            console.warn("⚠️ Warning: Navigation tags could not be traced inside index.html. Manual adjustment required.");
        }

        fs.writeFileSync(indexHtmlPath, htmlContent, 'utf8');
        console.log("✓ Successfully updated index.html sidebar accordion list!");

        // 6. Rebuild app.js slides array and showSlide ranges
        let slidesDataEnd = appJsContent.indexOf('];\n\n/* Inject style tag dynamically for checkmarks & theme custom styling */');
        if (slidesDataEnd === -1) {
            slidesDataEnd = appJsContent.indexOf('];\r\n\r\n/* Inject style tag dynamically for checkmarks & theme custom styling */');
        }
        if (slidesDataEnd === -1) {
            slidesDataEnd = appJsContent.indexOf('];\n\n/* Application States */');
        }

        if (slidesDataEnd !== -1) {
            const newSlidesJs = ",\n" + newSlidesJsList.join(',\n');
            let rebuildAppJs = appJsContent.substring(0, slidesDataEnd) + newSlidesJs + appJsContent.substring(slidesDataEnd);

            const lastSlideIndex = existingSlidesCount + totalPages - 1;
            const accordionRangeSearch = `else if (index >= 280) {\n        activeAccordionIndex = 7;\n    }`;
            const accordionRangeSearchAlt = `else if (index >= 280) {\r\n        activeAccordionIndex = 7;\r\n    }`;
            const accordionRangeReplace = `else if (index >= 280 && index < ${lastSlideIndex + 1}) {\n        activeAccordionIndex = 7;\n    } else if (index >= ${lastSlideIndex + 1}) {\n        activeAccordionIndex = ${toggleIdx};\n    }`;

            if (rebuildAppJs.includes(accordionRangeSearch)) {
                rebuildAppJs = rebuildAppJs.replace(accordionRangeSearch, accordionRangeReplace);
            } else if (rebuildAppJs.includes(accordionRangeSearchAlt)) {
                rebuildAppJs = rebuildAppJs.replace(accordionRangeSearchAlt, accordionRangeReplace.replace(/\n/g, '\r\n'));
            }

            fs.writeFileSync(appJsPath, rebuildAppJs, 'utf8');
            console.log("✓ Successfully updated app.js slides database!");
        } else {
            console.error("❌ Error: Could not locate end of slidesData array inside app.js.");
            return;
        }

        // 7. Auto bump index.html version cache-buster
        let finalHtml = fs.readFileSync(indexHtmlPath, 'utf8');
        const vMatch = finalHtml.match(/v=(\d+)/);
        if (vMatch) {
            const oldV = parseInt(vMatch[1]);
            const newV = oldV + 1;
            finalHtml = finalHtml.replace(new RegExp(`v=${oldV}`, 'g'), `v=${newV}`);
            fs.writeFileSync(indexHtmlPath, finalHtml, 'utf8');
            console.log(`⚡ Bumped browser cache version buster to v=${newV}!`);
        }

        console.log(`\n🎉 SUCCESS! ${courseTitle} has been compiled into the Course Hub database!`);

    } catch (err) {
        console.error(`❌ Error compiling PDF: ${err.message}`);
    }
}

async function main() {
    console.log("👑 codewith_ai Course Hub - SuperOwner JS CLI compiler utility.");
    const pdfPath = (await askQuestion("Enter absolute PDF file path: ")).trim().replace(/['"]/g, '');
    const courseTitle = (await askQuestion("Enter Course Title (e.g., Python Course): ")).trim();
    const courseId = (await askQuestion("Enter unique lowercase Course ID (e.g., python-dev): ")).trim();

    rl.close();
    await compileNewPdfCourse(pdfPath, courseTitle, courseId);
}

main();

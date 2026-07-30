import os
import sys
import re
import pypdf

# Define paths relative to the active workspace
workspace_dir = r"C:\Users\priya\.gemini\antigravity\scratch\html-tutorial-codewith-ai"
app_js_path = os.path.join(workspace_dir, "app.js")
index_html_path = os.path.join(workspace_dir, "index.html")

def compile_new_pdf_course(pdf_path, course_title, course_id):
    print(f"\\n🚀 Starting compilation for: {course_title}...")
    
    if not os.path.exists(pdf_path):
        print(f"❌ Error: PDF file not found at path: {pdf_path}")
        return
        
    # 1. Read & Extract PDF
    try:
        reader = pypdf.PdfReader(pdf_path)
        total_pages = len(reader.pages)
        print(f"📖 Extracted {total_pages} pages from PDF.")
    except Exception as e:
        print(f"❌ Error reading PDF: {e}")
        return

    # 2. Read current app.js to get total slide length
    with open(app_js_path, "r", encoding="utf-8") as f:
        app_js_content = f.read()

    # Search for slides count
    existing_slides_count = app_js_content.count("level:")
    print(f"📊 Current slides in database: {existing_slides_count}")
    
    new_slides_js_list = []
    sidebar_links = []
    
    # 3. Parse pages and create slides data
    for i in range(total_pages):
        page = reader.pages[i]
        page_text = page.extract_text() or ""
        lines = [l.strip() for l in page_text.split("\\n") if l.strip()]
        
        slide_index = existing_slides_count + i
        slide_number = slide_index + 1
        
        # Deduce title from first line of text
        title = ""
        header_idx = 0
        if len(lines) > 0:
            for idx, line in enumerate(lines[:3]):
                cleaned = re.sub(r"^[-\\*\\•\\s]+", "", line).strip()
                if cleaned and not cleaned.isdigit() and len(cleaned) > 2 and "VIRTUAL" not in cleaned.upper():
                    title = cleaned
                    header_idx = idx
                    break
        if not title:
            title = f"Topic Overview - Page {i+1}"
            
        if len(title) > 35:
            title = title[:32] + "..."
            
        # Rebrand branding strings
        title = re.sub(r"VIRTUAL CODE", "codewith_ai", title, flags=re.IGNORECASE)
        
        # Create bullet points HTML
        items_html = ""
        items = []
        for line in lines[header_idx:]:
            cleaned_l = re.sub(r"^[-\\*\\•\\s]+", "", line).strip()
            cleaned_l = re.sub(r"VIRTUAL CODE", "codewith_ai", cleaned_l, flags=re.IGNORECASE)
            cleaned_l = cleaned_l.replace("`", "'")
            if cleaned_l:
                items.append(f"<li>{cleaned_l}</li>")
                
        if items:
            items_html = f"<ul>{''.join(items)}</ul>"
        else:
            items_html = f"<p>Detail slides content from course guide.</p>"
            
        # Level grouping calculation
        level_num = min(5, i // max(1, (total_pages // 5)))
        level_name = f"Level {level_num}"
        
        slide_level = f"{course_title} {level_name}"
        
        english_html = f"""
            <div class='english-explanation'>
                <div class='english-header'>🇬🇧 English Explanation</div>
                <p>Welcome to <b>{course_title}</b>. This slide outlines key concepts on <b>{title}</b>.</p>
            </div>
        """
        
        hinglish_html = f"""
            <div class='hinglish-explanation'>
                <div class='hinglish-header'>🇮🇳 Hinglish (आसान भाषा में)</div>
                {items_html}
            </div>
        """
        
        slide_body_content = f"{english_html}\\n            {hinglish_html}"
        
        # Sandbox code generation mockup
        sandbox_code = ""
        if "code" in page_text.lower() or "function" in page_text.lower() or "npm" in page_text.lower():
            sandbox_code = "// Practice Sandbox Code\\\\nconsole.log(\\\"Learning " + title + "!\\\");"
            
        escaped_content = slide_body_content.replace("`", "\\\\`").replace("${", "\\\\${")
        
        new_slides_js_list.append(f"""
    {{
        level: "{slide_level}",
        title: "{title}",
        content: `{escaped_content}`,
        sandboxCode: "{sandbox_code}"
    }}""")
        
        sidebar_links.append(f'<li class="slide-link" data-slide="{slide_index}">{slide_number}. {title}</li>')

    # 4. Generate HTML accordion markup
    accordion_id = f"accordion-{course_id}"
    toggle_idx = app_js_content.count("toggleAccordion(") # Deduce new toggle index
    
    links_html = "\\n                                ".join(sidebar_links)
    new_accordion_html = f"""
                <!-- {course_title} Module -->
                <div class="accordion-item" id="{accordion_id}">
                    <button class="accordion-header" onclick="toggleAccordion({toggle_idx})">
                        <span class="header-title">{course_title}</span>
                        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="level-group" id="nav-{course_id}-group">
                            <div class="level-title">Complete Course Material</div>
                            <ul class="slide-list">
                                {links_html}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    """

    # 5. Insert accordion markup in index.html (before closing tag of nav)
    with open(index_html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
        
    nav_end_marker = "</nav>\\n        </aside>"
    
    if nav_end_marker in html_content:
        html_content = html_content.replace(nav_end_marker, new_accordion_html)
    else:
        nav_end_marker_alt = "</nav>\\r\\n        </aside>"
        if nav_end_marker_alt in html_content:
            html_content = html_content.replace(nav_end_marker_alt, new_accordion_html)
        else:
            print("⚠️ Warning: Navigation tags could not be traced inside index.html. Manual adjustment required.")
            
    with open(index_html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print("✓ Successfully updated index.html sidebar accordion list!")

    # 6. Rebuild app.js slides array and showSlide ranges
    slides_data_end = app_js_content.find("];\\n\\n/* Inject style tag dynamically for checkmarks styling */")
    if slides_data_end == -1:
        slides_data_end = app_js_content.find("];\\r\\n\\r\\n/* Inject style tag dynamically for checkmarks styling */")
    if slides_data_end == -1:
        slides_data_end = app_js_content.find("];\\n\\n/* Application States */")
        
    if slides_data_end != -1:
        new_slides_js = ",\n" + ",\n".join(new_slides_js_list)
        rebuild_app_js = app_js_content[:slides_data_end] + new_slides_js + app_js_content[slides_data_end:]
        
        # Update accordion routing indexes ranges inside showSlide(index)
        accordion_range_search = f"else if (index >= 280) {{\\n        activeAccordionIndex = 7;\\n    }}"
        accordion_range_replace = f"else if (index >= 280 && index < {slide_index + 1}) {{\\n        activeAccordionIndex = 7;\\n    }} else if (index >= {slide_index + 1}) {{\\n        activeAccordionIndex = {toggle_idx};\\n    }}"
        
        rebuild_app_js = rebuild_app_js.replace(accordion_range_search, accordion_range_replace)
        rebuild_app_js = rebuild_app_js.replace(accordion_range_search.replace("\\n", "\\r\\n"), accordion_range_replace.replace("\\n", "\\r\\n"))
        
        with open(app_js_path, "w", encoding="utf-8") as f:
            f.write(rebuild_app_js)
        print("✓ Successfully updated app.js slides database!")
    else:
        print("❌ Error: Could not locate end of slidesData array inside app.js.")
        return

    # 7. Auto bump index.html version cache-buster to reload browser assets
    with open(index_html_path, "r", encoding="utf-8") as f:
        final_html = f.read()
    
    v_match = re.search(r"v=(\d+)", final_html)
    if v_match:
        old_v = int(v_match.group(1))
        new_v = old_v + 1
        final_html = final_html.replace(f"v={old_v}", f"v={new_v}")
        with open(index_html_path, "w", encoding="utf-8") as f:
            f.write(final_html)
        print(f"⚡ Bumped browser cache version buster to v={new_v}!")
        
    print(f"\\n🎉 SUCCESS! {course_title} has been compiled into the Course Hub database!")

if __name__ == "__main__":
    print("👑 codewith_ai Course Hub - SuperOwner CLI compiler utility.")
    pdf = input("Enter absolute PDF file path: ").strip()
    title = input("Enter Course Title (e.g., Python Course): ").strip()
    id_tag = input("Enter unique lowercase Course ID (e.g., python-dev): ").strip()
    
    # Remove quotes from paths
    pdf = pdf.strip('"').strip("'")
    
    compile_new_pdf_course(pdf, title, id_tag)

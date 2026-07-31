/* Slide Data Base containing Dual Language (English + Hinglish) Explanations */
let slidesData = [
    {
        level: "codewith_ai",
        title: "Complete HTML Tutorial in Hindi",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to <b>codewith_ai</b>! Do you want to build your very first website? Learning to code is super fun and easy. In this course, we will learn HTML step-by-step from scratch. Let's begin our journey! 🚀</p>
                <p>Use the <b>Next (Aage)</b> and <b>Prev (Peechhe)</b> buttons below to change slides. Feel free to modify codes in the playground editor and click <b>Run Code</b> to see output instantly!</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Namaste dosto! <b>codewith_ai</b> me aapka swagat hai. Kya aap apni pehli website banana chahte hain? Coding seekhna bilkul mushkil nahi hai, aur is course me hum HTML ko itne aasaan tareeqe se seekhenge ki koi bhi bacha ise samajh sake! 🚀</p>
                <p>Niche <b>Aage (Next)</b> aur <b>Peechhe (Prev)</b> buttons se slides change karein. Jaha sandbox code dikhe, waha code edit karein aur <b>Run Code</b> par click karke output dekhein!</p>
            </div>
            
            <div class="analogy-box">
                <div class="analogy-title">💡 Why Learn HTML? / Kyu seekhein HTML?</div>
                <p><b>English:</b> Every single website on the internet (Google, YouTube, Wikipedia) is built using HTML. It is the basic foundation of web development.</p>
                <p><b>Hinglish:</b> Internet par jitne bhi websites aap dekhte hain, unka base HTML se hi banta hai. Ye aapki web development journey ka sabse pehla aur sabse important step hai!</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 1",
        title: "Introduction to HTML",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>In Level 1, we will explore the core building blocks of web development. We will learn what HTML is and how it forms the structure of any webpage.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Pehle Level me hum seekhenge ki HTML kya hai aur ye website banane me kaise madad karta hai. HTML website ki duniya ka sabse pehla kadam (foundation) hai.</p>
            </div>

            <div class="tech-card" style="margin-top: 1.5rem;">
                <div class="tech-icon">🌐</div>
                <div class="tech-name">Language of the Web / Web ki Bhasha</div>
                <p><b>English:</b> HTML stands for HyperText Markup Language. It defines the skeleton layout of pages.</p>
                <p><b>Hinglish:</b> HTML ka full form HyperText Markup Language hai. Ye website ka basic structure define karta hai.</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 1",
        title: "Web Basics (HTML/CSS/JS)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Web development relies on three core technologies: HTML for structure, CSS for presentation, and JavaScript for behavior. Let's compare them using a body analogy.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTML web ki language hai, jisse websites banti hain. Chalo isko ek simple analogy (udaharan) se samajhte hain:</p>
            </div>
            
            <div class="slide-grid-3">
                <div class="tech-card">
                    <div class="tech-icon">🦴</div>
                    <div class="tech-name" style="color: var(--accent-blue);">HTML</div>
                    <p><b>Skeleton (Dhancha):</b><br>
                    <i>English:</i> Provides structural bones of the website.<br>
                    <i>Hinglish:</i> Jaise humare sharir me haddiyan structure deti hain, waise hi HTML website ka dhancha banata hai.</p>
                </div>
                <div class="tech-card">
                    <div class="tech-icon">🎨</div>
                    <div class="tech-name" style="color: var(--accent-purple);">CSS</div>
                    <p><b>Clothes & Makeup:</b><br>
                    <i>English:</i> Styles the structure with colors, layouts, and beauty.<br>
                    <i>Hinglish:</i> Jaise kapde pehnte hain aur taiyar hote hain, waise hi CSS website ko colorful banata hai.</p>
                </div>
                <div class="tech-card">
                    <div class="tech-icon">🧠</div>
                    <div class="tech-name" style="color: var(--accent-pink);">JavaScript</div>
                    <p><b>Brain & Action:</b><br>
                    <i>English:</i> Adds actions, brain logic, and click response behavior.<br>
                    <i>Hinglish:</i> Jaise humara dimaag sharir ko move karne ka command deta hai, waise hi JS click features add karta hai.</p>
                </div>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 2",
        title: "Creating Our First Website",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>In Level 2, we will write our first HTML file! To write HTML code, you can use basic text editors like Notepad (Windows) or TextEdit (Mac), or professional code editors like VS Code.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Level 2 me hum website banana shuru karenge! Hum seekhenge ki HTML code ko likha kaise jata hai aur uski basic structure kya hoti hai.</p>
            </div>
            
            <div class="analogy-box">
                <div class="analogy-title">📝 Saving Files / File Save Kaise Karein?</div>
                <p><b>English:</b> Always save your code file with a <b>.html</b> extension (e.g., <code>index.html</code>) and double-click to view it in any web browser.</p>
                <p><b>Hinglish:</b> HTML file ko save karte waqt name ke piche <b>.html</b> lagayein (jaise <code>index.html</code>). Phir us file par double click karke browser me run karein.</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 2",
        title: "Basic HTML Page Structure",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Every HTML page has a standard structure. Let's study the core tags shown below:</p>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code>: Declares document type as HTML5.</li>
                    <li><code>&lt;html&gt;</code>: The root element enclosing all page contents.</li>
                    <li><code>&lt;head&gt;</code>: Contains page metadata (metadata is settings not visible on screen).</li>
                    <li><code>&lt;title&gt;</code>: Sets browser tab title name.</li>
                    <li><code>&lt;body&gt;</code>: Encloses all renderable content (headings, paragraphs, images).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Ek basic HTML page niche diye gaye tags se banta hai. Inhe dhyan se dekho:</p>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code>: Browser ko batata hai ki hum HTML5 version use kar rahe hain.</li>
                    <li><code>&lt;html&gt;</code>: Puri website ka root container tag (pitaji tag).</li>
                    <li><code>&lt;head&gt;</code>: Website ki settings jo screen par directly nahi dikhti.</li>
                    <li><code>&lt;title&gt;</code>: Browser tab me dikhne wala website ka naam.</li>
                    <li><code>&lt;body&gt;</code>: Website ka main body jo screen par dikhta hai.</li>
                </ul>
            </div>
            
            <div class="structure-diagram" style="margin-top: 1.5rem;">
                <div><span class="diag-tag">&lt;!DOCTYPE html&gt;</span></div>
                <div><span class="diag-tag">&lt;html <span class="diag-attr">lang</span>=<span class="diag-val">"en"</span>&gt;</span></div>
                <div class="diag-indent">
                    <span class="diag-tag">&lt;head&gt;</span>
                    <div class="diag-indent-2">
                        <span class="diag-tag">&lt;title&gt;</span>my first website<span class="diag-tag">&lt;/title&gt;</span>
                    </div>
                    <span class="diag-tag">&lt;/head&gt;</span>
                </div>
                <div class="diag-indent">
                    <span class="diag-tag">&lt;body&gt;</span>
                    <div class="diag-indent-2">
                        <span class="diag-tag">&lt;h1&gt;</span>codewith_ai<span class="diag-tag">&lt;/h1&gt;</span>
                    </div>
                    <div class="diag-indent-2">
                        <span class="diag-tag">&lt;p&gt;</span>my paragraph<span class="diag-tag">&lt;/p&gt;</span>
                    </div>
                    <span class="diag-tag">&lt;/body&gt;</span>
                </div>
                <div><span class="diag-tag">&lt;/html&gt;</span></div>
            </div>
        `,
        sandboxCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to codewith_ai!</h1>
    <p>Hum HTML seekh rahe hain. Ye humari pehli real web page hai.</p>
</body>
</html>`
    },
    {
        level: "Level 2",
        title: "Comments & Case Sensitivity",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>1. Comments in HTML:</b> Comments are developer notes ignored by the browser. Written inside <code>&lt;!-- comment text --&gt;</code>.</p>
                <p><b>2. Case Sensitivity:</b> HTML is case-insensitive. <code>&lt;h1&gt;</code> and <code>&lt;H1&gt;</code> behave identically. However, lowercase tags are recommended as a best coding standard.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>1. Comments in HTML:</b> Comments wo notes hote hain jo hum apne samajhne ke liye code me likhte hain. Inhe browser display nahi karta. Iska syntax hai: <code class="code-inline">&lt;!-- comment text --&gt;</code></p>
                <p><b>2. Case Sensitivity:</b> HTML ek <b>Case Insensitive</b> language hai. Iska matlab hai ki chahe aap <code class="code-inline">&lt;h1&gt;</code> capital me likhein ya small me, dono same kaam karenge. Lekin standard coding ke liye humesha <b>small letters</b> hi use karein.</p>
            </div>
        `,
        sandboxCode: `<!-- Ye ek HTML comment hai. Browser ise ignore kar dega. -->
<h1>Ye screen par dikhega</h1>

<H1>Yahan main capital letters use kiya h, output same aayega!</H1>
<!-- Aur is tag ka close capital me: </H1> -->`
    },
    {
        level: "Level 2",
        title: "Level-2 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Perform these hands-on tasks to master Level 2:</p>
                <ul>
                    <li><b>Task 1:</b> Inspect a website in Chrome (Right-click -> Inspect) and temporarily change any text on the screen.</li>
                    <li><b>Task 2:</b> View the source code of a page (Right-click -> View Page Source). Copy the code into a file and see if it runs locally.</li>
                    <li><b>Task 3:</b> Write a comment and a bold paragraph with your name inside the sandbox editor below.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Level 2 ko master karne ke liye niche diye gaye tasks pure karein:</p>
                <ul>
                    <li><b>Task 1:</b> Chrome me kisi site par right-click karke <b>Inspect</b> dabao. Waha text badal kar try karo!</li>
                    <li><b>Task 2:</b> Kisi site ka <b>Page Source</b> notepad me copy karke run karo aur check karo ki clone hota hai ya nahi.</li>
                    <li><b>Task 3:</b> Niche sandbox editor me ek comment likho aur uske niche paragraph me apna naam bold print karo!</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Task 3: Write a comment here -->
<p>Mera naam: <b>[Apna Naam Likhein]</b> hai aur mai code seekh raha hu!</p>`
    },
    {
        level: "Level 3",
        title: "Basic HTML Tags",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>In Level 3, we will cover tags used to format text, display anchor links, load pictures, and write math/science equations.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Level 3 me hum alag-alag tarah ke HTML tags seekhenge jisse hum text ko bold, italic, links aur images add kar sakein.</p>
            </div>
            
            <div class="analogy-box">
                <div class="analogy-title">💡 Formatting / Formatting Kya Hai?</div>
                <p><b>English:</b> Formatting tags make your text stand out, improve readability, and help build link menus.</p>
                <p><b>Hinglish:</b> Formatting tags se hum text ko design karte hain taaki document padhne me easy ho aur clickable links ban sakein.</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 3",
        title: "HTML Elements & Attributes",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>HTML Element:</b> Everything from the opening tag to the closing tag forms an element (e.g., <code>&lt;p&gt;hello&lt;/p&gt;</code>).</p>
                <p><b>HTML Attributes:</b> Provide extra settings or information for HTML tags. E.g., the anchor tag link destination is specified by the <code>href</code> attribute:</p>
                <div class="code-preview-block">
                    &lt;a <span style="color: var(--accent-pink);">href</span>="https://google.com"&gt;Google&lt;/a&gt;
                </div>
                <p>You can use either single quotes or double quotes to enclose attribute values.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>HTML Element:</b> Opening tag se lekar closing tag ke beech ki saari cheezein milakar ek HTML Element banti hain. Jaise: <code class="code-inline">&lt;p&gt;hello&lt;/p&gt;</code> ek element hai.</p>
                <p><b>HTML Attributes:</b> Ye tags ko extra settings dene ke liye use hote hain. Jaise anchor tag link ke liye hota hai, lekin link kahan le jayegi ye batane ke liye hum <code class="code-inline">href</code> attribute use karte hain.</p>
            </div>
        `,
        sandboxCode: `<p>Niche diye gaye link par click karke test karein:</p>
<a href="https://google.com">Google Website Par Jayein</a>`
    },
    {
        level: "Level 3",
        title: "Heading & Paragraph Tags",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Heading Tags (H1 to H6):</b> HTML offers six headings. <code>&lt;h1&gt;</code> is the largest (main title) and <code>&lt;h6&gt;</code> is the smallest.</p>
                <p><b>Paragraph Tag (P):</b> Used to define text blocks. It automatically creates spacing before and after the paragraph.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Heading Tags (<code class="code-inline">&lt;h1&gt;</code> se <code class="code-inline">&lt;h6&gt;</code>):</b> HTML me 6 tarah ke headings hote hain. <code class="code-inline">&lt;h1&gt;</code> sabse bada aur important hota hai, aur <code class="code-inline">&lt;h6&gt;</code> sabse chota.</p>
                <p><b>Paragraph Tag (<code class="code-inline">&lt;p&gt;</code>):</b> Text paragraphs ko divide karne ke liye hum <code class="code-inline">&lt;p&gt;</code> use karte hain. Ye automatically naye line se shuru hota hai.</p>
            </div>
        `,
        sandboxCode: `<h1>Main Title Heading (H1)</h1>
<h2>Section Title (H2)</h2>
<h3>Subheading (H3)</h3>
<h4>Minor Subheading (H4)</h4>
<h5>Mini Header (H5)</h5>
<h6>Tiny Header (H6)</h6>

<p>Ye ek normal paragraph hai. Paragraph tag line ko alag karta hai.</p>`
    },
    {
        level: "Level 3",
        title: "Anchor, Image & Text Styles",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>1. Anchor Tag (&lt;a&gt;):</b> Inserts links. Requires the <code>href</code> attribute.</p>
                <p><b>2. Image Tag (&lt;img&gt;):</b> Renders images. It is a <b>Self-Closing tag</b> (no closing tag). Uses <code>src</code> (source path) and <code>alt</code> (alternative text description).</p>
                <p><b>3. Text styles:</b>
                    <ul>
                        <li><code>&lt;b&gt;</code>: Makes text <b>Bold</b>.</li>
                        <li><code>&lt;i&gt;</code>: Makes text <i>Italic</i>.</li>
                        <li><code>&lt;u&gt;</code>: Adds an <u>Underline</u>.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>1. Anchor Tag (<code class="code-inline">&lt;a&gt;</code>):</b> Website me link add karne ke liye use hota hai.</p>
                <p><b>2. Image Tag (<code class="code-inline">&lt;img&gt;</code>):</b> Image lagane ke liye. Ye ek <b>Self-Closing tag</b> hai, iska closing tag nahi hota! Isme <code class="code-inline">src</code> image path aur <code class="code-inline">alt</code> backup text dikhata hai.</p>
                <p><b>3. Bold, Italic, Underline:</b>
                    <ul>
                        <li><code class="code-inline">&lt;b&gt;</code>: Text ko <b>Bold</b> (mota) karne ke liye.</li>
                        <li><code class="code-inline">&lt;i&gt;</code>: Text ko <i>Italic</i> (terha) karne ke liye.</li>
                        <li><code class="code-inline">&lt;u&gt;</code>: Text ke niche <u>Underline</u> lagane ke liye.</li>
                    </ul>
                </p>
            </div>
        `,
        sandboxCode: `<p>Mera favourite search engine <b><a href="https://google.com">Google</a></b> hai.</p>
<p><i>Italic Text</i> aur <u>Underlined Text</u> ka combo!</p>

<p>Ab hum logo display kar rahe hain:</p>
<img src="assets/logo.jpg" alt="codewith_ai Logo" width="100">`
    },
    {
        level: "Level 3",
        title: "Break, Rule, Subscript & Superscript",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Line Break (&lt;br&gt;):</b> Inserts a newline block. It is self-closing.</p>
                <p><b>Horizontal Rule (&lt;hr&gt;):</b> Draws a horizontal line separating topic sections.</p>
                <p><b>Subscript (&lt;sub&gt;) & Superscript (&lt;sup&gt;):</b>
                    <ul>
                        <li><code>&lt;sub&gt;</code>: Renders subscript (lowered text). Example: Chemical formulas like H<sub>2</sub>O.</li>
                        <li><code>&lt;sup&gt;</code>: Renders superscript (raised text/powers). Example: Maths formula a<sup>2</sup>.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Line Break (<code class="code-inline">&lt;br&gt;</code>):</b> Agli line (new line) par jaane ke liye. Ye self-closing tag hai.</p>
                <p><b>Horizontal Rule (<code class="code-inline">&lt;hr&gt;</code>):</b> Partition line khinchne ke liye.</p>
                <p><b>Subscript (<code class="code-inline">&lt;sub&gt;</code>) & Superscript (<code class="code-inline">&lt;sup&gt;</code>):</b>
                    <ul>
                        <li><code class="code-inline">&lt;sub&gt;</code>: Text ko niche likhta hai (jaise H<sub>2</sub>O).</li>
                        <li><code class="code-inline">&lt;sup&gt;</code>: Text ko power (upar) me likhta hai (jaise a<sup>2</sup>).</li>
                    </ul>
                </p>
            </div>
        `,
        sandboxCode: `<p>Line 1 pe hum hain.<br>Line Break tag ke baad ab hum Line 2 par hain.</p>
<hr>
<p>Science formula of Water: H<sub>2</sub>O</p>
<p>Maths Equation: (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab</p>`
    },
    {
        level: "Level 3",
        title: "The Preformatted Tag (<pre>)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Browsers collapse consecutive spaces and line breaks into a single space. If you want the browser to show text exactly as formatted inside the editor (with original spaces and newlines), wrap it inside the <b>Preformatted Tag (<code>&lt;pre&gt;</code>)</b>.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTML humare code me likhe multiple spaces aur new lines ko ignore kar deta hai aur sabko ek hi line me dikhata hai. Lekin agar hum chahte hain ki text jaisa code editor me type kiya hai (spaces aur breaks ke sath) exact waisa hi dikhe, to hum <b>Preformatted Tag (<code class="code-inline">&lt;pre&gt;</code>)</b> use karte hain.</p>
            </div>
        `,
        sandboxCode: `<p>
    Normal paragraph tag
    me enter    press karne par
    bhi output ek hi line me aata hai.
</p>

<hr>

<pre>
    Lekin &lt;pre&gt; tag ke andar
    jaisi spacing    rakhenge,
    wo output me exact aayegi!
</pre>`
    },
    {
        level: "Level 3",
        title: "Level-3 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Practice these tasks inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Create a webpage layout using heading levels, split paragraphs with line breaks (<code>&lt;br&gt;</code>) and horizontal lines (<code>&lt;hr&gt;</code>).</li>
                    <li><b>Task 2:</b> Write the math equation: <code>(x - y)³ = x³ - y³ - 3x²y + 3xy²</code>.</li>
                    <li><b>Task 3:</b> Write the chemistry formula for Carbon Dioxide: <code>CO₂</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye tasks ko editor me solve karein:</p>
                <ul>
                    <li><b>Task 1:</b> Custom headings, <code class="code-inline">&lt;br&gt;</code>, aur <code class="code-inline">&lt;hr&gt;</code> ka use karke layout partition karo.</li>
                    <li><b>Task 2:</b> HTML ka use karke ye formula code likho: <br><code class="code-inline">(x-y)³ = x³ - y³ - 3x²y + 3xy²</code></li>
                    <li><b>Task 3:</b> Carbon Dioxide ka chemistry formula <code>CO₂</code> likho.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Yahan apni practice sheet solve karein -->
`
    },
    {
        level: "Level 4",
        title: "Creating Page Layout",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>In Level 4, we will learn how to design structured page layouts using semantic containers. Layout tags organize headers, sidebars, and main content.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Level 4 me hum layout tags seekhenge jo website ka proper structure aur design maintain karne ke liye use hote hain.</p>
            </div>
            
            <div class="analogy-box">
                <div class="analogy-title">🏗️ Layout Analogy / Ghar ka Naksha</div>
                <p><b>English:</b> Like a house has designated rooms (kitchen, hall, bedroom), web layouts have designated semantic blocks to represent header menu, side sections, and bottom footer details.</p>
                <p><b>Hinglish:</b> Jaise ek ghar me bedroom, kitchen, aur hall alag hote hain, waise hi ek website ke parts alag karne ke liye layouts tag banaye gaye hain.</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 4",
        title: "Semantic Layout Tags",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTML5 semantic layout tags inform search engines and browsers about page structural zones:</p>
                <ul>
                    <li><code>&lt;header&gt;</code>: Renders top section (logos, navigation links).</li>
                    <li><code>&lt;main&gt;</code>: Holds the core page content.</li>
                    <li><code>&lt;section&gt;</code>: Defines general sections inside main.</li>
                    <li><code>&lt;article&gt;</code>: Renders self-contained items (news products, blogs).</li>
                    <li><code>&lt;aside&gt;</code>: Renders sidebar elements (sponsor ads, links list).</li>
                    <li><code>&lt;footer&gt;</code>: Renders bottom block (copyright text, addresses).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Website ke alag-alag areas ko define karne ke liye HTML5 semantic tags ka use karta hai:</p>
                <ul>
                    <li><b>&lt;header&gt;:</b> Sabse upar ka navigation menu aur logo area.</li>
                    <li><b>&lt;main&gt;:</b> Webpage ka mukhy (main) content container.</li>
                    <li><b>&lt;section&gt;:</b> Main content ke andar ka ek specific topic area.</li>
                    <li><b>&lt;article&gt;:</b> Ek independent block (jaise blog post, news product).</li>
                    <li><b>&lt;aside&gt;:</b> Sidebar content jo side me display hota hai (jaise ads ya extra links).</li>
                    <li><b>&lt;footer&gt;:</b> Sabse niche ka copyright, link, aur contact info band.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<header style="border-bottom: 2px solid var(--accent-blue); padding: 10px;">
    <h2>codewith_ai Educational Portal</h2>
</header>

<main style="display: flex; gap: 20px; padding: 10px;">
    <section style="flex: 2; border: 1px solid var(--border-color); padding: 10px;">
        <h3>HTML Course</h3>
        <article>
            <h4>Lesson 15: Layouts</h4>
            <p>Hum layouts seekh rahe hain.</p>
        </article>
    </section>
    
    <aside style="flex: 1; background: #e0f2fe; color: #000; padding: 10px;">
        <h4>About Instructor</h4>
        <p>codewith_ai trains junior developers.</p>
    </aside>
</main>

<footer style="text-align: center; font-size: 0.8rem; padding: 10px; border-top: 1px solid var(--border-color);">
    <p>© 2026 codewith_ai. Made with love.</p>
</footer>`
    },
    {
        level: "Level 4",
        title: "Target Blank & Image Links",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>1. target="_blank" Attribute:</b> Opens anchor links in a new web browser tab rather than navigating away from the current page.</p>
                <p><b>2. Image Links:</b> Wrap an image element inside an anchor block to make it a clickable image redirect link.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>1. Target Blank Attribute:</b> Agara aap chahte hain ki user link par click kare aur naya webpage humare current browser tab ki jagah <b>Naye Tab (New Tab)</b> me open ho, to anchor tag me <code class="code-inline">target="_blank"</code> use karein.</p>
                <p><b>2. Clickable Image Link:</b> Hum image ko link bana sakte hain. Iske liye image tag ko anchor tag ke andar wrap karein.</p>
            </div>
        `,
        sandboxCode: `<p>1. Open link in same tab: <a href="https://google.com">Google</a></p>
<p>2. Open link in a NEW tab: <a href="https://google.com" target="_blank">Google (New Tab)</a></p>

<p>3. Clickable Logo Image Link:</p>
<a href="https://google.com" target="_blank">
    <img src="assets/logo.jpg" alt="Clickable Logo" width="120">
</a>`
    },
    {
        level: "Level 4",
        title: "Div (Block) vs Span (Inline)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTML has two essential packaging container elements:</p>
                <ul>
                    <li><b>Div Tag (&lt;div&gt;):</b> A block-level element. Starts on a new line and takes up full width (100%). Used to create layout boxes.</li>
                    <li><b>Span Tag (&lt;span&gt;):</b> An inline element. Does not start on a new line and only takes up required width. Used for styling text inside paragraphs.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTML me visual styling aur packaging ke liye do main tags use hote hain:</p>
                <ul>
                    <li><b>Div Tag (<code class="code-inline">&lt;div&gt;</code>):</b> Block-level element hai jo hamesha naye line se shuru hota hai aur 100% width leta hai.</li>
                    <li><b>Span Tag (<code class="code-inline">&lt;span&gt;</code>):</b> Inline element hai jo naye line se shuru nahi hota aur sirf required width leta hai. Text highlights me use hota hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div style="background-color: var(--accent-purple); color: white; padding: 10px; margin-bottom: 10px;">
    Ye ek Div (block container) hai.
</div>
<div style="background-color: var(--accent-blue); color: white; padding: 10px;">
    Ye dusra Div block hai.
</div>

<p>Normal text paragraph ke andar hum <span style="color: var(--accent-pink); font-weight: bold; font-size: 1.2rem;">Span element</span> ka use karke kisi word ko highlight kar sakte hain.</p>`
    },
    {
        level: "Level 4",
        title: "Level-4 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Solve these layout problems inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Design a layout box containing a sidebar and a main section using styled <code>&lt;div&gt;</code> elements (margins, background colors).</li>
                    <li><b>Task 2:</b> Create three clickable image icons that open Google, YouTube, and Amazon in new browser tabs (<code>target="_blank"</code>).</li>
                    <li><b>Task 3:</b> Using the <code>&lt;span&gt;</code> tag, style three words in a single sentence with Red, Green, and Blue colors respectively.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye tasks ko editor me solve karein:</p>
                <ul>
                    <li><b>Task 1:</b> Styled <code>div</code> containers ka use karke simple responsive layout design karo.</li>
                    <li><b>Task 2:</b> Clickable images banao jo alag tab me Amazon, YouTube aur Google open karein!</li>
                    <li><b>Task 3:</b> Span tag se single sentence ke alag words ko custom colors (Red, Green, Blue) dein!</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-4 homework here -->
`
    },
    {
        level: "Level 5",
        title: "Lists, Tables and Forms",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>In Level 5, we will discover advanced elements like lists, tables, user data inputs (forms), and media audio/video player tags.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Level 5 me hum advanced items jaise list items, details table format, user inputs (forms) aur media players add karna seekhenge.</p>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Level 5",
        title: "Lists (Ordered & Unordered)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>1. Unordered List (&lt;ul&gt;):</b> Items are bulleted. Uses list items (<code>&lt;li&gt;</code>).</p>
                <p><b>2. Ordered List (&lt;ol&gt;):</b> Items are numbered (1, 2, 3...). Uses list items (<code>&lt;li&gt;</code>).</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>1. Unordered List (<code class="code-inline">&lt;ul&gt;</code>):</b> Items bullet points (dots) me aate hain. List item <code class="code-inline">&lt;li&gt;</code> tag se bante hain.</p>
                <p><b>2. Ordered List (<code class="code-inline">&lt;ol&gt;</code>):</b> Items serial numbers (1, 2, 3...) ke roop me ordered aate hain.</p>
            </div>
        `,
        sandboxCode: "<h3>Course Outline (Unordered List)</h3>\n<ul>\n    <li>Introduction to Web</li>\n    <li>HTML Basics</li>\n    <li>Project Deployment</li>\n</ul>\n\n<h3>Steps to learn HTML (Ordered List)</h3>\n<ol>\n    <li>Understand Page Structure</li>\n    <li>Practice tags</li>\n    <li>Solve practice sheets</li>\n</ol>"
    },
    {
        level: "Level 5",
        title: "HTML Tables (&lt;table&gt;)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Tables display structured data:
                    <ul>
                        <li><code>&lt;table&gt;</code>: Main container wrapping the table data.</li>
                        <li><code>&lt;tr&gt;</code>: Table Row (horizontal lines).</li>
                        <li><code>&lt;th&gt;</code>: Table Header cells (renders bold text).</li>
                        <li><code>&lt;td&gt;</code>: Table Data cells (renders normal text).</li>
                        <li><code>&lt;caption&gt;</code>: Set table title headers description.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Tables hume matrix format me numeric aur text details arrange karne ke liye use hoti hain. Iske tags hain:</p>
                <ul>
                    <li><code class="code-inline">&lt;table&gt;</code>: Main container tag.</li>
                    <li><code class="code-inline">&lt;tr&gt;</code>: Table Row (horizontal lines).</li>
                    <li><code class="code-inline">&lt;th&gt;</code>: Table Header (bold, center text).</li>
                    <li><code class="code-inline">&lt;td&gt;</code>: Table Data (normal entry cell).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
    <caption>codewith_ai Students</caption>
    <thead>
        <tr style="background-color: var(--accent-blue); color: black;">
            <th style="padding: 8px;">Roll No</th>
            <th style="padding: 8px;">Student Name</th>
            <th style="padding: 8px;">Subject</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px;">1</td>
            <td style="padding: 8px;">Rohan Kumar</td>
            <td style="padding: 8px;">HTML5</td>
        </tr>
        <tr>
            <td style="padding: 8px;">2</td>
            <td style="padding: 8px;">Aanya Sen</td>
            <td style="padding: 8px;">JavaScript</td>
        </tr>
    </tbody>
</table>`
    },
    {
        level: "Level 5",
        title: "Spanning Columns (Colspan)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Colspan Attribute:</b></p>
                <p>If you want a table header or cell to span across multiple columns (merging cells horizontally), use the <code>colspan</code> attribute inside the cell tag:</p>
                <div class="code-preview-block">
                    &lt;th <span style="color: var(--accent-pink);">colspan</span>="3"&gt;Class Details&lt;/th&gt;
                </div>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Colspan Attribute:</b></p>
                <p>Jab hum chahte hain ki table ka koi cell 1 se zyada columns ki jagah le (merge columns), to hum table cell (<code class="code-inline">&lt;th&gt;</code> ya <code class="code-inline">&td&gt;</code>) me <code class="code-inline">colspan</code> attribute add karte hain.</p>
            </div>
        `,
        sandboxCode: `<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
        <tr style="background-color: var(--accent-purple); color: white;">
            <!-- Merging 3 columns -->
            <th colspan="3" style="padding: 10px;">codewith_ai Class Marks</th>
        </tr>
        <tr>
            <th style="padding: 8px;">Roll</th>
            <th style="padding: 8px;">Name</th>
            <th style="padding: 8px;">Marks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Vivaan</td>
            <td>99</td>
        </tr>
    </tbody>
</table>`
    },
    {
        level: "Level 5",
        title: "User Input & HTML Forms",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Forms gather information from users using various tags:</p>
                <ul>
                    <li><code>&lt;form&gt;</code>: Form wrapper tag.</li>
                    <li><code>&lt;input type="text"&gt;</code>: Renders single-line text input field.</li>
                    <li><code>&lt;input type="checkbox"&gt;</code>: Renders checkboxes (multichoice).</li>
                    <li><code>&lt;input type="radio"&gt;</code>: Renders radio circles (single choice).</li>
                    <li><code>&lt;textarea&gt;</code>: Renders larger comment area blocks.</li>
                    <li><code>&lt;select&gt;</code>: Renders dropdown menu options list.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Forms user se digital feedback aur data collect karne ke liye hote hain:</p>
                <ul>
                    <li><code class="code-inline">&lt;form&gt;</code>: Inputs ko wrap karta hai.</li>
                    <li><code class="code-inline">&lt;input type="text"&gt;</code>: Single-line field.</li>
                    <li><code class="code-inline">&lt;input type="checkbox"&gt;</code>: Multichoice ticks.</li>
                    <li><code class="code-inline">&lt;input type="radio"&gt;</code>: Single choice option.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<form style="padding: 10px; background: rgba(0,0,0,0.05);">
    <label>Full Name:</label><br>
    <input type="text" placeholder="Write name..."><br><br>
    
    <label>Preferred Language:</label><br>
    <input type="radio" name="lang" id="h" checked> <label for="h">Hindi</label>
    <input type="radio" name="lang" id="e"> <label for="e">English</label><br><br>
    
    <label>Select Course:</label><br>
    <select>
        <option>HTML level 1-5</option>
        <option>CSS Basics</option>
    </select><br><br>
    
    <input type="submit" value="Register Now">
</form>`
    },
    {
        level: "Level 5",
        title: "Video & Audio Media Tags",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTML5 handles direct audio/video streams without extra plugins:</p>
                <ul>
                    <li><code>&lt;video src="..." controls&gt;</code>: Renders video feeds. <code>controls</code> sets basic play/pause/volume buttons.</li>
                    <li><code>&lt;audio src="..." controls&gt;</code>: Renders sound streams controls.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Hum sound effects aur custom videos directly webpage me play kar sakte hain:</p>
                <p><b>1. Video Tag:</b> Isme <code class="code-inline">src</code> video path aur <code class="code-inline">controls</code> display control buttons display karta hai.</p>
                <p><b>2. Audio Tag:</b> Audio songs play karne ke liye controller deta hai.</p>
            </div>
        `,
        sandboxCode: `<h3>1. Audio Stream Example</h3>
<audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls></audio>

<h3 style="margin-top:1.5rem;">2. Video Player Example</h3>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="100%" poster="assets/logo.jpg"></video>`
    },
    {
        level: "Level 5",
        title: "Level-5 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Complete these advanced tasks:</p>
                <ul>
                    <li><b>Task 1:</b> Build a full signup form (Name, Email, password, DOB, file uploader field, and submit button).</li>
                    <li><b>Task 2:</b> Create a sport statistics scorecard table displaying player names, runs, balls and merge the top heading using <code>colspan</code>.</li>
                    <li><b>Task 3:</b> Inspect a YouTube video, copy its <b>Embed Code (iframe block)</b> and run it in the editor.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye tasks ko editor me solve karein:</p>
                <ul>
                    <li><b>Task 1:</b> Complete signup form (Name, Email, password, profile upload, submit) banao.</li>
                    <li><b>Task 2:</b> Gully cricket table display karo players ke scores aur colspan headings ke sath.</li>
                    <li><b>Task 3:</b> YouTube embed code check karke run karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve practice sheet tasks here -->
`
    },
/* CSS COURSE SLIDES (Based on provided PDF) */
    {
        level: "CSS Level 0",
        title: "Introduction to CSS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to the <b>CSS course</b> by <b>codewith_ai</b>! CSS stands for <b>Cascading Style Sheets</b>.</p>
                <ul>
                    <li><b>HTML:</b> Used to define the structural layout of a page (Skeleton).</li>
                    <li><b>CSS:</b> Used to add styling (colors, design, spacing, layout) to the page.</li>
                    <li><b>JavaScript:</b> Used to program logical actions and brain functions.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>codewith_ai</b> ke CSS tutorial me aapka swagat hai! CSS ka full form <b>Cascading Style Sheets</b> hai.</p>
                <ul>
                    <li><b>HTML:</b> Website ka structure (dhancha/bones) banata hai.</li>
                    <li><b>CSS:</b> Website ko style, design aur colors (makeup/ kapde) deta hai.</li>
                    <li><b>JavaScript:</b> Website ka brain (dimaag/logic) hota hai jo dynamic actions handle karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "CSS Level 1",
        title: "Creating Our First CSS Website",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>To style HTML, we write style blocks or files. Let's see how properties and values work inside CSS rule blocks:</p>
                <div class="code-preview-block">
                    selector { <br>
                    &nbsp;&nbsp;property: value; <br>
                    }
                </div>
                <p>Example: <code>body { color: blue; }</code> selects the body tag and styles its text blue.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Website par styles lagane ke liye hum CSS rules likhte hain. CSS code likhne ka basic format aisa hota hai:</p>
                <p><b>Selector:</b> Jis HTML element ko style karna hai (jaise body, p, h1).<br>
                <b>Property:</b> Jo style change karni hai (jaise color, font-size).<br>
                <b>Value:</b> Jo new setting set karni hai (jaise red, 20px).</p>
            </div>
        `,
        sandboxCode: `<style>
  h2 {
    color: var(--accent-pink);
    text-align: center;
  }
</style>

<h2>Mera Pehla Styled Header!</h2>`
    },
    {
        level: "CSS Level 1",
        title: "ID and Class Attributes",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>We target specific HTML elements using two core attributes:</p>
                <ul>
                    <li><b>id Attribute:</b> Serves as a <b>unique identifier</b> for an element. Only one element on a page should have a specific ID name.</li>
                    <li><b>class Attribute:</b> Used to group elements. Multiple elements can belong to the same class name.</li>
                    <li><b>Multiple Classes:</b> You can add multiple classes to a single element separated by spaces. E.g. <code>class="a1 a2 a3"</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Kisi specific element ko target karne ke liye do attributes use hote hain:</p>
                <ul>
                    <li><b>id Attribute:</b> Ye element ka **unique roll number** hai. Ek page me ek ID name sirf ek hi element ka ho sakta hai.</li>
                    <li><b>class Attribute:</b> Ye element ka **group section** hai. Ek class name hum website ke bohot saare tags ko de sakte hain.</li>
                    <li><b>Multiple Classes:</b> Ek tag me ek se zyada classes lagane ke liye beech me space dein, jaise: <code>class="box red-bg text-bold"</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="unique-box" class="card shadow rounded">
  Ghar ka pata (ID) unique hota hai, lekin logo ke kapde (Class) same ho sakte hain!
</div>`
    },
    {
        level: "CSS Level 1",
        title: "Three Ways to Add CSS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>We can inject CSS styling rules into HTML using three methods:</p>
                <ol>
                    <li><b>&lt;style&gt; tag (Internal CSS):</b> Adding CSS rules inside the <code>&lt;style&gt;</code> tag inside the HTML head section.</li>
                    <li><b>Inline CSS:</b> Writing styles directly inside the HTML tag using the <code>style</code> attribute (e.g. <code>&lt;p style="color: red;"&gt;</code>).</li>
                    <li><b>External CSS:</b> Creating a separate stylesheet file (like <code>style.css</code>) and linking it to HTML using the <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> tag.</li>
                </ol>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTML me CSS style lagane ke 3 tarike hain:</p>
                <ol>
                    <li><b>Internal CSS (&lt;style&gt; tag):</b> HTML page ke head me <code>&lt;style&gt;</code> tag banakar CSS code likhna.</li>
                    <li><b>Inline CSS:</b> Direct HTML tag ke andar style attribute use karke CSS likhna.</li>
                    <li><b>External CSS:</b> Ek alag files banana (jaise <code>style.css</code>) aur use HTML ke head me <code>&lt;link&gt;</code> tag se link karna.</li>
                </ol>
            </div>
        `,
        sandboxCode: `<p style="color: var(--accent-pink);">Ye inline style se pink color me render ho raha hai!</p>

<style>
  .internal-styled {
    color: var(--accent-blue);
    font-weight: bold;
  }
</style>
<p class="internal-styled">Ye internal style tag se styling le raha hai!</p>`
    },
    {
        level: "CSS Level 1",
        title: "CSS Element & ID Selectors",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Selectors identify target elements:
                    <ul>
                        <li><b>1. Element Selector (Tag Selector):</b> Selects elements based off the tag name directly. E.g. <code>body { color: black; }</code>.</li>
                        <li><b>2. ID Selector:</b> Selects a single element with a specific ID. Written with a hash <code>#</code> prefix. E.g. <code>#first { color: blue; }</code>.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Elements select karne ke basic tareeqe:</p>
                <ul>
                    <li><b>1. Element (Tag) Selector:</b> Direct HTML tag name select karta hai. Jaise <code>h1 { color: red; }</code> page ke saare h1 headers par red color laga dega.</li>
                    <li><b>2. ID Selector:</b> Hash <code>#</code> lagakar unique ID name likhte hain. Jaise <code>#first { ... }</code> sirf usi tag ko select karega jiski ID "first" hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  p { color: var(--text-secondary); } /* Element selector */
  #special-para { color: var(--accent-pink); font-size: 1.5rem; } /* ID selector */
</style>

<p>Normal text styling paragraph.</p>
<p id="special-para">Unique styled paragraph text!</p>`
    },
    {
        level: "CSS Level 1",
        title: "Class & Universal Selectors",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's study the next selectors:
                    <ul>
                        <li><b>3. Class Selector:</b> Targets elements with a given class. Written with a dot <code>.</code> prefix. E.g. <code>.main { color: black; background: aqua; }</code>.</li>
                        <li><b>4. Universal Selector:</b> Targets **all** elements on the page. Specified by the asterisk symbol <code>*</code>. E.g. <code>* { margin: 0; padding: 0; }</code>. Useful for resetting default browser margins.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Class aur Universal selectors:</p>
                <ul>
                    <li><b>3. Class Selector:</b> Dot <code>.</code> prefix ke sath likhte hain. Jaise <code>.main { ... }</code> se un saare tags par style lagta hai jinka class "main" hai.</li>
                    <li><b>4. Universal Selector:</b> Asterisk <code>*</code> symbol se website ke saare HTML elements ek sath select ho jate hain. Default spaces clear karne ke liye iska use hota hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  * { text-align: center; } /* Universal reset: center align all text */
  .blue-box { background: rgba(0,210,255,0.1); border: 2px solid var(--accent-blue); padding: 10px; } /* Class selector */
</style>

<div class="blue-box">Universal align se mera text center me h, aur class selector se border lag gaya!</div>`
    },
    {
        level: "CSS Level 1",
        title: "Selector Grouping & Comments",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Grouping Selectors:</b> Group multiple tags with commas to apply identical styles to all. E.g. <code>h1, h2, h3, div { color: brown; }</code>.</li>
                    <li><b>Inline Style Priority:</b> Inline styles written inside tags have the highest priority and will override internal style tags and external stylesheets.</li>
                    <li><b>CSS Comments:</b> Text notes ignored by browsers. Written inside <code>/* comments here */</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Grouping Selectors:</b> Agar multiple tags ko same style dena hai, to beech me comma <code>,</code> lagayein. Jaise: <code>h1, h2, p { color: blue; }</code>.</li>
                    <li><b>Style Priority:</b> Inline style sabse taqatwar (highest priority) hoti hai. Ye baki styles ko override kar deti hai.</li>
                    <li><b>CSS Comments:</b> CSS code me notes add karne ke liye. Syntax: <code>/* comment lines */</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  /* Group selectors: headers ko standard highlight color do */
  h2, h3 {
    color: var(--accent-purple);
    text-decoration: underline;
  }
  
  .override-demo {
    color: var(--accent-blue);
  }
</style>

<h2>Header 2 (Grouped Style)</h2>
<h3>Header 3 (Grouped Style)</h3>

<p class="override-demo" style="color: var(--accent-pink);">
  Class ne blue kaha, lekin Inline Style ne override karke mujhe Pink bana diya!
</p>`
    },
    {
        level: "CSS Level 1",
        title: "LEVEL-1 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Complete these tasks inside the editor playground:</p>
                <ul>
                    <li><b>Task 1:</b> Create a webpage containing a <code>&lt;div&gt;</code> element with a class name <code>red-div</code>. Give it a background-color of Blue and text color of White.</li>
                    <li><b>Task 2:</b> Create an element with an ID <code>head</code>. Verify that background-color works on it when styled using internal CSS (<code>&lt;style&gt;</code>).</li>
                    <li><b>Task 3:</b> Create a class named <code>first</code>. Apply it to three different tags (heading, paragraph, link) and observe that the style applies to all.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>CSS coding basics seekhne ke liye niche diye gaye tasks pure karein:</p>
                <ul>
                    <li><b>Task 1:</b> Ek <code>div</code> tag banao jiska class <code>red-div</code> ho. CSS me iska background blue aur text color white karo.</li>
                    <li><b>Task 2:</b> Ek tag banao jiski ID <code>head</code> ho aur internal <code>&lt;style&gt;</code> ke through background set karo.</li>
                    <li><b>Task 3:</b> Ek CSS class <code>first</code> banao, aur use 3 alag-alag elements (h1, p, a) par lagakar check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-1 CSS practice here -->
`
    },
    {
        level: "CSS Level 2",
        title: "CSS Colors Property",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>CSS color values can be declared in multiple ways to style text colors inside tags:</p>
                <ul>
                    <li><b>RGB:</b> Red, Green, Blue coordinates ranging from 0-255. E.g. <code>rgb(200, 93, 69)</code>.</li>
                    <li><b>HEX Code:</b> Hexadecimal color values. E.g. <code>#ff7180</code>.</li>
                    <li><b>HSL:</b> Hue, Saturation, Lightness. E.g. <code>hsl(8, 90%, 63%)</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Website me colors ko hum alag-alag units me declare kar sakte hain:</p>
                <ul>
                    <li><b>RGB:</b> Red, Green, Blue colors ko mix karta hai, range 0-255. E.g. <code>rgb(200,93,69)</code>.</li>
                    <li><b>HEX Code:</b> Hash ke sath coding format. E.g. <code>#ff7180</code> (cyber red).</li>
                    <li><b>HSL:</b> Color shade (Hue), color strength (Saturation), aur light value (Lightness). E.g. <code>hsl(8, 90%, 63%)</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .rgb-color { color: rgb(255, 99, 71); }
  .hex-color { color: #8a2be2; }
  .hsl-color { color: hsl(120, 100%, 40%); }
</style>

<p class="rgb-color">RGB (Tomato color)</p>
<p class="hex-color">HEX (BlueViolet color)</p>
<p class="hsl-color">HSL (Green color)</p>`
    },
    {
        level: "CSS Level 2",
        title: "Background Color & Image",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>background-color property:</b> Specifies the background color of a container layout block. E.g. <code>background-color: red;</code>.</li>
                    <li><b>background-image property:</b> Used to set an image or wallpaper as the background. E.g. <code>background-image: url("image.jpg");</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>background-color:</b> Kisi layout block ka background color set karta hai. E.g. <code>background-color: green;</code>.</li>
                    <li><b>background-image:</b> Background me solid color ke bajaye dynamic wallpaper ya picture set karta hai. Syntax: <code>background-image: url("image.jpg");</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .my-bg-card {
    background-color: #0f172a;
    background-image: url("assets/logo.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
    padding: 50px;
    border-radius: 12px;
  }
</style>

<div class="my-bg-card">
  <h2>Image Background Area</h2>
</div>`
    },
    {
        level: "CSS Level 2",
        title: "Background Repeat & Size",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>background-repeat property:</b> Images repeat (tile) by default in both directions.
                        <ul>
                            <li><code>repeat-x</code>: Repeat horizontally.</li>
                            <li><code>repeat-y</code>: Repeat vertically.</li>
                            <li><code>no-repeat</code>: Do not repeat.</li>
                        </ul>
                    </li>
                    <li><b>background-size property:</b> Controls image scaling:
                        <ul>
                            <li><code>cover</code>: Scales image to fully cover container (some cropping might occur).</li>
                            <li><code>contain</code>: Scales image to be fully visible (leaves empty border space).</li>
                            <li><code>width height</code>: Custom pixel/percentage sizing (e.g. <code>100px 50px</code>).</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>background-repeat:</b> Choti images auto-repeat hokar tile banati hain:
                        <ul>
                            <li><code>repeat-x</code>: Horizontally repeat ho.</li>
                            <li><code>repeat-y</code>: Vertically repeat ho.</li>
                            <li><code>no-repeat</code>: Ek baar hi dikhe, repeat na ho.</li>
                        </ul>
                    </li>
                    <li><b>background-size:</b> Image ke size ko fit karta hai:
                        <ul>
                            <li><code>cover</code>: Background box ko poora fill karega (kuch part crop ho sakta h).</li>
                            <li><code>contain</code>: Poori image bina crop hue fit hogi.</li>
                            <li><code>width height</code>: Custom size details (jaise <code>200px 100px</code>).</li>
                        </ul>
                    </li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .repeat-demo {
    height: 150px;
    background-image: url("assets/logo.jpg");
    background-repeat: repeat-x; /* Horizontal tile only */
    background-size: 50px 50px;
    border: 1px solid var(--border-color);
  }
</style>

<div class="repeat-demo"></div>`
    },
    {
        level: "CSS Level 2",
        title: "Background Position & Shorthand",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>background-position property:</b> Sets the starting origin coordinate of the background image. E.g. <code>background-position: left top;</code> or <code>center;</code>.</li>
                    <li><b>background-attachment property:</b> Defines if the background scrolls with the content or stays glued in place.
                        <ul>
                            <li><code>scroll</code>: Scrolls naturally (default).</li>
                            <li><code>fixed</code>: Non-scrolling background. Creates parallax effect.</li>
                        </ul>
                    </li>
                    <li><b>Background Shorthand:</b> Merge all background values in a single property:
                        <div class="code-preview-block">
                            background: color image repeat attachment position;
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>background-position:</b> Background image ko position deta hai (jaise <code>center</code>, <code>right bottom</code>).</li>
                    <li><b>background-attachment:</b> Tay karta hai ki screen scroll hone par background wallpaper piche freeze rahe (<code>fixed</code>) ya scroll ho (<code>scroll</code>).</li>
                    <li><b>Background Shorthand:</b> Har background setting ko alag likhne ke bajaye ek hi line me likhein:
                        <code>background: #ff0000 url("img.jpg") no-repeat fixed center;</code>
                    </li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .shorthand-demo {
    height: 200px;
    /* color, image path, repeat, attachment, position */
    background: #000 url("assets/logo.jpg") no-repeat fixed center;
    background-size: contain;
    border: 2px solid var(--accent-purple);
  }
</style>

<div class="shorthand-demo"></div>`
    },
    {
        level: "CSS Level 2",
        title: "LEVEL-2 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Try these styling tasks in the sandbox:</p>
                <ul>
                    <li><b>Task 1:</b> Create a black navigation bar header with white text color items.</li>
                    <li><b>Task 2:</b> Create a <code>&lt;div&gt;</code> box, load a background image, and specify a custom width and height.</li>
                    <li><b>Task 3:</b> Create a vertical content container block and add a non-scrolling background image (<code>background-attachment: fixed</code>) to it.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye background tasks ko practice editor me solve karein:</p>
                <ul>
                    <li><b>Task 1:</b> Ek black navigation menu banao jisme white text items hon.</li>
                    <li><b>Task 2:</b> Ek div box me background picture lagao aur width, height set karo.</li>
                    <li><b>Task 3:</b> Ek content page layout me background-attachment property ko <code>fixed</code> karke scroll effect check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-2 CSS practice here -->
`
    },
    {
        level: "CSS Level 3",
        title: "The CSS Box Model",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The CSS Box Model is the structural layout representation of every HTML element. Each tag is viewed as a box comprising:</p>
                <ul>
                    <li><b>Content:</b> The central area containing text, pictures, or headers.</li>
                    <li><b>Padding:</b> The inner spacing surrounding the content (inside the border).</li>
                    <li><b>Border:</b> The surrounding frame line.</li>
                    <li><b>Margin:</b> The outer spacing that separates this element block from other page blocks.</li>
                    <li><b>Total Width Formula:</b> <code>Total Width = width + left/right padding + left/right border + left/right margin</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>CSS Box Model</b> batata hai ki HTML ka har element ek box hai. Har tag in 4 layers se banta hai:</p>
                <ul>
                    <li><b>Content:</b> Jo text ya image screen par dikhta hai.</li>
                    <li><b>Padding:</b> Content aur Border ke beech ki **andar ki space**.</li>
                    <li><b>Border:</b> Box ki outer boundary line.</li>
                    <li><b>Margin:</b> Border ke bahar ki **khali space** jo dusre boxes ko isse door rakhti hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .box-model-demo {
    width: 250px;
    height: 100px;
    background-color: rgba(168, 85, 247, 0.1);
    border: 5px solid var(--accent-purple);
    padding: 20px; /* Inside space */
    margin: 20px;  /* Outside space */
    color: white;
  }
</style>

<div class="box-model-demo">
  Box Model Demo: Content area inside padding, border, and margin.
</div>`
    },
    {
        level: "CSS Level 3",
        title: "Margin & Padding Shorthand",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Instead of declaring left, right, top, bottom spacing properties separately, use shorthand values:</p>
                <ul>
                    <li><b>4 Values (T R B L):</b> Top, Right, Bottom, Left (clockwise order).
                        <br>E.g. <code>margin: 10px 20px 15px 5px;</code>
                    </li>
                    <li><b>2 Values (T,B L,R):</b> Top/Bottom, Left/Right.
                        <br>E.g. <code>padding: 10px 20px;</code>
                    </li>
                    <li><b>Individual margins:</b> <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Margin aur Padding ko simple shorthand me kaise likhein:</p>
                <ul>
                    <li><b>4 Values (T R B L - clockwise):</b> Top, Right, Bottom, Left.
                        <br>E.g. <code>margin: 10px 5px 12px 6px;</code> (Top=10, Right=5, Bottom=12, Left=6).
                    </li>
                    <li><b>2 Values (T,B L,R):</b> Top/Bottom aur Left/Right.
                        <br>E.g. <code>padding: 20px 40px;</code> (Top & Bottom = 20px, Left & Right = 40px).
                    </li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .shorthand-box {
    background: #1e293b;
    color: white;
    /* Top/Bottom=20px, Left/Right=40px */
    padding: 20px 40px;
    /* Top=30px, Right=10px, Bottom=30px, Left=10px */
    margin: 30px 10px 30px 10px;
    border-radius: 8px;
  }
</style>

<div class="shorthand-box">Shorthand Spacings Box</div>`
    },
    {
        level: "CSS Level 3",
        title: "Setting Borders",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Borders frame HTML element containers. We can declare border styling in two ways:</p>
                <ul>
                    <li><b>Separate properties:</b>
                        <ul>
                            <li><code>border-width</code>: Sets thickness (e.g. <code>2px</code>).</li>
                            <li><code>border-style</code>: Sets styling shape (<code>solid</code>, <code>dashed</code>, <code>dotted</code>, <code>double</code>).</li>
                            <li><code>border-color</code>: Sets color value.</li>
                        </ul>
                    </li>
                    <li><b>Border Shorthand:</b> <code>border: width style color;</code>. E.g. <code>border: 2px solid black;</code>.</li>
                    <li><b>border-radius:</b> Rounds the corners of the box (e.g. <code>border-radius: 5px;</code>). Set to <code>50%</code> for circles.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Border se boxes ke corners ko design karein:</p>
                <ul>
                    <li><b>Border properties:</b> Thickness, line style (solid, dashed, dotted) aur color.</li>
                    <li><b>Border Shorthand:</b> Sabko ek sath likhein: <code>border: 3px dashed red;</code>.</li>
                    <li><b>border-radius:</b> Border ke corners ko golaai (rounded shape) deta hai (jaise <code>border-radius: 8px</code>).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .border-demo {
    border: 3px dashed var(--accent-purple);
    border-radius: 15px; /* rounded corners */
    padding: 15px;
    text-align: center;
    color: white;
  }
</style>

<div class="border-demo">
  Dashed borders with rounded corners!
</div>`
    },
    {
        level: "CSS Level 3",
        title: "Margin Collapse & Box Sizing",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Margin Collapse:</b> When two vertical margins touch, they collapse (merge) into a single margin equal to the larger of the two. Horizontal margins never collapse.</li>
                    <li><b>Box Sizing:</b> By default, padding and border are added to the width of the box. Setting <code>box-sizing: border-box;</code> forces padding and borders to sit inside the specified width, preventing layout breakage.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Margin Collapse:</b> Jab do vertical boxes aaju-baju ya upar-niche hote hain, to unke margins double hone ke bajaye aapas me merge (collaps) hokar bade wale margin size ke equal ho jate hain.</li>
                    <li><b>Box Sizing (border-box):</b> Default settings me padding badhane par box ka total size fail jata hai. Isko rokne ke liye hum <code>box-sizing: border-box;</code> lagate hain, taaki padding aur border specified width ke andar hi adjust ho.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .collapsing-margins {
    margin-bottom: 30px;
    background: #0f172a;
    color: white;
    padding: 10px;
  }
  .sizing-demo {
    width: 100%;
    padding: 30px;
    border: 5px solid var(--accent-blue);
    box-sizing: border-box; /* Width is exactly 100% inclusive of padding/border */
    color: white;
  }
</style>

<div class="collapsing-margins">Box 1 (Margin Bottom = 30px)</div>
<div class="collapsing-margins" style="margin-top: 20px;">Box 2 (Margin Top = 20px). Collapsed vertical margin is 30px, not 50px!</div>

<div class="sizing-demo">Border Box Sizing prevents horizontal overflow scrolling!</div>`
    },
    {
        level: "CSS Level 3",
        title: "LEVEL-3 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Complete these Box Model exercises:</p>
                <ul>
                    <li><b>Task 1:</b> Build a layout containing a header box, one content container box, and a footer block.</li>
                    <li><b>Task 2:</b> Apply distinct border styling and margins to all three zones.</li>
                    <li><b>Task 3:</b> Set the <code>box-sizing: border-box;</code> property on the content container and explain if the box layout width changed.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye Box Model tasks ko practice editor me complete karein:</p>
                <ul>
                    <li><b>Task 1:</b> Ek simple webpage layout (header, content box, footer) banao.</li>
                    <li><b>Task 2:</b> In blocks me custom borders, margins aur padding apply karo.</li>
                    <li><b>Task 3:</b> Content container box me <code>box-sizing: border-box;</code> lagakar check karo ki size alignment sahi hui ya nahi.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-3 CSS practice here -->
`
    },
    {
        level: "CSS Level 4",
        title: "Display Property",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <code>display</code> property specifies the rendering behavior of HTML boxes:</p>
                <ul>
                    <li><b>display: inline;</b> Element takes only the required width. Width/height and vertical margins/paddings are **ignored**. Elements sit next to each other on the same line.</li>
                    <li><b>display: block;</b> Element occupies the full width (100%) and starts on a new line. Height and margins behave normally.</li>
                    <li><b>display: inline-block;</b> Hybrid layout style. Elements sit next to each other, but you are **allowed** to set custom width, height, margin, and padding.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><code>display</code> property HTML elements ke behavior ko control karti hai:</p>
                <ul>
                    <li><b>display: inline;</b> Tag sirf utni hi space lega jitni zaruri hai. Isme width/height kaam nahi karti. Elements ek ke baad ek same line me aate hain.</li>
                    <li><b>display: block;</b> Tag poori screen width (100%) gherta hai aur naye line se shuru hota hai.</li>
                    <li><b>display: inline-block;</b> Combo feature hai. Elements ek line me hi aayenge, lekin aap inka size (width/height) aur spacing adjust kar sakte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .inline-demo { display: inline; background: var(--accent-pink); padding: 5px; color: white; }
  .block-demo { display: block; background: var(--accent-blue); padding: 10px; margin: 5px 0; color: white; }
  .inline-block-demo { display: inline-block; width: 100px; height: 50px; background: var(--accent-purple); color: white; margin-right: 5px; }
</style>

<div class="inline-demo">Inline Item 1</div>
<div class="inline-demo">Inline Item 2</div>

<div class="block-demo">Block Element 1</div>
<div class="block-demo">Block Element 2</div>

<div class="inline-block-demo">Inline-Block 1</div>
<div class="inline-block-demo">Inline-Block 2</div>`
    },
    {
        level: "CSS Level 4",
        title: "Display None & Text Align",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Hiding Elements:</b>
                        <ul>
                            <li><code>display: none;</code>: Hides the element and completely removes it from the document layout flow (leaves no gap).</li>
                            <li><code>visibility: hidden;</code>: Hides the element, but its empty space is still reserved in the document layout layout flow.</li>
                        </ul>
                    </li>
                    <li><b>text-align property:</b> Aligns text content horizontally inside block containers. Values include <code>left</code>, <code>right</code>, <code>center</code>, and <code>justify</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Elements Hiding:</b>
                        <ul>
                            <li><code>display: none;</code>: Tag ko screen se hata deta hai aur uski jagah ko khali kar deta hai (koi space nahi rehti).</li>
                            <li><code>visibility: hidden;</code>: Tag chhupega to sahi, lekin uski space abhi bhi reserved (khali gap) rahegi.</li>
                        </ul>
                    </li>
                    <li><b>text-align:</b> Text lines ko left, right, center ya balance (justify) align karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .hidden-demo { visibility: hidden; background: red; height: 50px; }
  .none-demo { display: none; background: green; height: 50px; }
  .align-center { text-align: center; color: var(--accent-blue); }
</style>

<h2 class="align-center">Center Aligned Text</h2>
<p>Below is a visibility hidden block. It leaves a gap:</p>
<div class="hidden-demo">Hidden Box</div>
<p>Below is a display none block. It leaves no gap:</p>
<div class="none-demo">None Box</div>`
    },
    {
        level: "CSS Level 4",
        title: "Text Decoration & Transform",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>text-decoration property:</b> Styles lines on text:
                        <ul>
                            <li><code>overline</code>: Line above text.</li>
                            <li><code>line-through</code>: Strike-through lines.</li>
                            <li><code>underline</code>: Line below text.</li>
                            <li><code>none</code>: Removes default anchor link underlines.</li>
                        </ul>
                    </li>
                    <li><b>text-transform property:</b> Changes text casing: <code>uppercase</code>, <code>lowercase</code>, or <code>capitalize</code> (first letters only).</li>
                    <li><b>line-height property:</b> Specifies vertical line spacing between paragraphs. E.g. <code>line-height: 1.6;</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>text-decoration:</b> Text par line styles lagata hai (jaise <code>underline</code>). Links ke underline ko hatane ke liye use <code>none</code> karte hain.</li>
                    <li><b>text-transform:</b> Pura text capital case (<code>uppercase</code>) ya small case (<code>lowercase</code>) karne ke liye.</li>
                    <li><b>line-height:</b> Lines ke beech ki vertical gap spacing badhata/ghatata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .link-no-decor { text-decoration: none; color: var(--accent-pink); }
  .upper-text { text-transform: uppercase; }
  .spaced-lines { line-height: 2.0; }
</style>

<a href="#" class="link-no-decor">Mera Underline Removed Link</a>
<p class="upper-text">ye capital letters me dikhega.</p>
<p class="spaced-lines">Line 1<br>Line 2 ke beech me gaps zyada h line-height property se!</p>`
    },
    {
        level: "CSS Level 4",
        title: "Font Family & Size",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>font-family property:</b> Specifies the font family type of text. E.g., <code>font-family: Arial, sans-serif;</code>.</li>
                    <li><b>Other Font Properties:</b>
                        <ul>
                            <li><code>font-size</code>: Font size in pixels (<code>16px</code>), <code>em</code>, or percentages.</li>
                            <li><code>font-weight</code>: Thickness of text (<code>bold</code>, <code>normal</code>, or values like <code>300</code>, <code>700</code>).</li>
                            <li><code>font-style</code>: Set text to <code>italic</code>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>font-family:</b> Text ka writing font design change karta hai (jaise Outfit, Plus Jakarta Sans, Arial).</li>
                    <li><b>Font Properties:</b>
                        <ul>
                            <li><code>font-size</code>: Aksharon ka size (jaise <code>24px</code>).</li>
                            <li><code>font-weight</code>: Motaai (jaise <code>bold</code> ya numbers 100-900).</li>
                            <li><code>font-style</code>: Text ko tirchha (<code>italic</code>) karta hai.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .fancy-font {
    font-family: 'Outfit', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: var(--accent-blue);
  }
</style>

<p class="fancy-font">Outfit Web Font Styled Text!</p>`
    },
    {
        level: "CSS Level 4",
        title: "LEVEL-4 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Design layout targets inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Build a standard 2-div flex content block containing a navigation header bar on top.</li>
                    <li><b>Task 2:</b> Add a footer with custom Poppins Google Font style.</li>
                    <li><b>Task 3:</b> Remove anchor underlines from links and style text with uppercase transform.</li>
                    <li><b>Task 4:</b> Use a div to demonstrate the visual layout gap difference between <code>display: none;</code> and <code>visibility: hidden;</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye formatting tasks ko playground me code karein:</p>
                <ul>
                    <li><b>Task 1:</b> Ek page layout banao jisme Top Nav, Div 1 aur Div 2 aaju-baju dikhein.</li>
                    <li><b>Task 2:</b> Footer me Poppins ya similar Google Font lagao.</li>
                    <li><b>Task 3:</b> Links ke default underline ko hatao aur link ko uppercase capital me likho.</li>
                    <li><b>Task 4:</b> <code>display: none;</code> aur <code>visibility: hidden;</code> ka clear test dikhao.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-4 CSS practice here -->
`
    },
    {
        level: "CSS Level 5",
        title: "CSS Relative Sizing",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Apart from pixels (<code>px</code>) which are absolute, CSS uses relative lengths:</p>
                <ul>
                    <li><code>em</code>: Relative to parent element font size.</li>
                    <li><code>rem</code>: Relative to root element font size (usually <code>16px</code>).</li>
                    <li><code>vw</code>: Viewport Width (1vw = 1% width of current browser window).</li>
                    <li><code>vh</code>: Viewport Height (1vh = 1% height of browser window).</li>
                    <li><code>min-width / max-width</code>: Prevents elements from shrinking too small or stretching too wide.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Pixels (<code>px</code>) fixed size dete hain. Page responsive banane ke liye hum relative units use karte hain:</p>
                <ul>
                    <li><code>em</code>: Parent tag ke font size ke ratio me chalta hai.</li>
                    <li><code>rem</code>: Root HTML tag ke font size (generally <code>16px</code>) ke relative chalta hai.</li>
                    <li><code>vw</code> (Viewport Width): Browser screen width ka percentage size.</li>
                    <li><code>vh</code> (Viewport Height): Browser screen height ka percentage size.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .vh-box {
    height: 15vh; /* 15% of browser screen height */
    width: 50vw;  /* 50% of browser screen width */
    background: var(--accent-purple);
    color: white;
    font-size: 1.5rem; /* 1.5 times root font size */
    padding: 1rem;
  }
</style>

<div class="vh-box">Relative Sizing Box</div>`
    },
    {
        level: "CSS Level 5",
        title: "Position Property",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <code>position</code> property manipulates element location. Offset coordinates are set using <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>:</p>
                <ul>
                    <li><b>static:</b> Default value. Normal flow. Left/top positions have no effect.</li>
                    <li><b>relative:</b> Positioned relative to its normal flow. Shifts element without affecting surrounding elements.</li>
                    <li><b>absolute:</b> Removed from standard document flow. Positioned relative to its closest non-static parent element.</li>
                    <li><b>fixed:</b> Glued relative to browser viewport window. Stays static even during page scrolling.</li>
                    <li><b>sticky:</b> Toggles relative/fixed states based on user scroll position.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><code>position</code> property decide karti hai ki tag page me kahan display hoga:</p>
                <ul>
                    <li><b>static:</b> Default setting. Normal line flow me.</li>
                    <li><b>relative:</b> Apni normal jagah se displacement (shift) lene ke liye.</li>
                    <li><b>absolute:</b> Normal flow se bilkul azad ho jata hai, aur parent card ke boundary se position leta hai.</li>
                    <li><b>fixed:</b> Screen par ek jagah chipak (glue) jata hai (scroll karne par bhi move nahi hota).</li>
                    <li><b>sticky:</b> Scroll hone par normal chalta hai, lekin top border par pahunchte hi wahi ruk/freeze (sticky) ho jata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .sticky-header {
    position: sticky;
    top: 0;
    background: var(--accent-blue);
    color: black;
    padding: 10px;
    font-weight: bold;
    z-index: 10;
  }
  .normal-scroll {
    height: 300px;
    background: #1e293b;
    color: white;
    padding: 15px;
    margin-top: 10px;
  }
</style>

<div class="sticky-header">Sticky Header Area (Scroll to test)</div>
<div class="normal-scroll">
  <p>Scroll down this area...</p>
  <p>Hum page positions check kar rahe hain.</p>
</div>`
    },
    {
        level: "CSS Level 5",
        title: "Z-Index Stacking",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>z-index property:</b> Specifies the stack order layer depth of elements. Works only on elements that have a position style set (like relative, absolute, fixed, or sticky):</p>
                <ul>
                    <li>Higher z-index numbers stack on top of lower z-index numbers.</li>
                    <li>Allows overlays, popup models, or floating navigation headers to stay on top of body text.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>z-index property:</b> Stacking layer coordinate hai jo layers ko ek dusre ke upar (over/under) set karta hai:</p>
                <ul>
                    <li>Ye property sirf tabhi kaam karegi jab position property (relative/absolute/fixed) set ho.</li>
                    <li>Jiska z-index value bada hoga (jaise <code>z-index: 100;</code>), wo box baaki elements ke upar chadhkar dikhai dega.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .card-container { position: relative; height: 100px; }
  .box-1 { position: absolute; left: 10px; top: 10px; background: red; width: 80px; height: 80px; z-index: 1; }
  .box-2 { position: absolute; left: 40px; top: 20px; background: blue; width: 80px; height: 80px; z-index: 2; }
</style>

<div class="card-container">
  <div class="box-1">Box 1 (z:1)</div>
  <div class="box-2">Box 2 (z:2) - Blue stacks on top</div>
</div>`
    },
    {
        level: "CSS Level 5",
        title: "LEVEL-5 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Test your positioning knowledge in the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Create a responsive horizontal navigation bar using relative size lengths.</li>
                    <li><b>Task 2:</b> Turn it into a sticky navigation bar that stays locked to the top using the position property.</li>
                    <li><b>Task 3:</b> Place an absolute close icon inside a relative styled card component.</li>
                    <li><b>Task 4:</b> Demonstate stacking overlapping boxes using z-index layers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Positions practice karne ke liye sandbox me code likhein:</p>
                <ul>
                    <li><b>Task 1:</b> Relative units (rem/vw) ka use karke navigation header design karo.</li>
                    <li><b>Task 2:</b> Header ko top border par <code>sticky</code> alignment do.</li>
                    <li><b>Task 3:</b> Relative box ke andar ek close symbol (X) absolute positioning se lagao.</li>
                    <li><b>Task 4:</b> Multiple boxes banakar z-index overlapping test karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-5 CSS practice here -->
`
    },
    {
        level: "CSS Level 6",
        title: "Float, Clear & Flex Intro",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Before Flexbox, layouts were built using float alignments:</p>
                <ul>
                    <li><b>float property:</b> Pushes elements horizontally left or right, allowing inline text wrapping around them. E.g. <code>float: left;</code>.</li>
                    <li><b>clear property:</b> Stops wrapping behavior, preventing elements from floating beside each other. E.g. <code>clear: both;</code>.</li>
                    <li><b>Flexbox introduction:</b> The modern standard. Align spaces dynamically inside flex containers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>purani layout techniques aur flexbox introduction:</p>
                <ul>
                    <li><b>float property:</b> Tags ko left ya right khiskata (float) hai, text uski side me wrap ho jata hai.</li>
                    <li><b>clear property:</b> Float wrap behavior ko band karta hai.</li>
                    <li><b>Flexbox layout:</b> Modern technique jo grid spacing and alignment aasaan karti hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .float-img { float: left; margin-right: 15px; width: 60px; }
  .clear-demo { clear: both; background: var(--accent-purple); padding: 5px; color: white; margin-top: 10px;}
</style>

<img src="assets/logo.jpg" class="float-img">
<p>Lorem ipsum dolor sit amet, text wraps on the side of the floating image. Ye float alignment hai.</p>

<div class="clear-demo">Clear tag has reset floating flow!</div>`
    },
    {
        level: "CSS Level 6",
        title: "Flexbox Container Properties",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Properties set on the parent flex container block:</p>
                <ul>
                    <li><code>display: flex;</code>: Initializes flex layout mode.</li>
                    <li><code>flex-direction</code>: Align direction (<code>row</code> or <code>column</code>).</li>
                    <li><code>flex-wrap</code>: Wrap child elements if width exceeds screen space (<code>wrap</code> / <code>nowrap</code>).</li>
                    <li><code>justify-content</code>: Align items along main axis (<code>center</code>, <code>space-between</code>, <code>space-around</code>).</li>
                    <li><code>align-items</code>: Align items along cross axis vertically (<code>center</code>, <code>stretch</code>).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Parent flexbox element ki major settings:</p>
                <ul>
                    <li><code>display: flex;</code>: Flex layout ko start karta hai.</li>
                    <li><code>flex-direction</code>: Child cards ko row (horizontal) ya column (vertical) alignment deta hai.</li>
                    <li><code>justify-content</code>: Items ke beech ki gaps ko control karta hai. E.g. <code>space-between</code> items ko borders tak dhakel deta hai.</li>
                    <li><code>align-items</code>: Vertically items ko row ke center me align karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .flex-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #0f172a;
    padding: 15px;
    border-radius: 8px;
  }
  .child { background: var(--accent-blue); padding: 10px; color: black; border-radius: 5px; }
</style>

<div class="flex-row">
  <div class="child">Box 1</div>
  <div class="child">Box 2</div>
  <div class="child">Box 3</div>
</div>`
    },
    {
        level: "CSS Level 6",
        title: "Flexbox Item Properties",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Properties set on the direct child items inside flex boxes:</p>
                <ul>
                    <li><code>order</code>: Reorders specific elements. Lower order values print first.</li>
                    <li><code>align-self</code>: Overrides parent's align-items setting for a single item.</li>
                    <li><code>flex-grow</code>: Proportion of space this child can grow to fill relative to others.</li>
                    <li><code>flex-shrink</code>: Defines element shrinking priority when container is small.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Flex child items par lagne wali settings:</p>
                <ul>
                    <li><code>order</code>: Kisi specific block ka visual serial number change karta hai.</li>
                    <li><code>align-self</code>: Kisi single child block ko flex group se alag align deta hai.</li>
                    <li><code>flex-grow</code>: Box ko extra space fill karne ke liye grow hone ka permission deta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .flex-container { display: flex; background: #1e293b; padding: 10px; }
  .box { background: var(--accent-purple); color: white; padding: 15px; margin: 5px; text-align: center; }
  .grow-me { flex-grow: 2; background: var(--accent-pink); } /* Take remaining space */
</style>

<div class="flex-container">
  <div class="box">Standard Box</div>
  <div class="box grow-me">Growing Box</div>
  <div class="box">Standard Box</div>
</div>`
    },
    {
        level: "CSS Level 6",
        title: "LEVEL-6 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Solve these Flexbox challenges:</p>
                <ul>
                    <li><b>Task 1:</b> Design a horizontal grid card layout containing 3 styled cards aligned side-by-side using float alignment.</li>
                    <li><b>Task 2:</b> Recreate the exact same layout using Flexbox container rules instead.</li>
                    <li><b>Task 3:</b> Create a gallery layout where items auto-wrap into the next row when screen size decreases.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Flexbox structures practice karne ke liye coding sheet solve karein:</p>
                <ul>
                    <li><b>Task 1:</b> Float settings ka use karke 3 cards ko horizontally line align karo.</li>
                    <li><b>Task 2:</b> Flexbox property ka use karke exact waisa hi layout structure clean code me design karo.</li>
                    <li><b>Task 3:</b> Responsive image gallery layout design karo jo screen resize hone par flex-wrap use kare.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-6 CSS practice here -->
`
    },
    {
        level: "CSS Level 7",
        title: "CSS Grid Basics",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>CSS Grid is a 2-dimensional (Rows + Columns) layout system:</p>
                <ul>
                    <li><code>display: grid;</code>: Declares a grid container.</li>
                    <li><code>grid-column-gap</code>: Space between vertical column lines.</li>
                    <li><code>grid-row-gap</code>: Space between horizontal row lines.</li>
                    <li><code>grid-gap</code>: Shorthand for both gaps. E.g. <code>grid-gap: 20px 10px;</code> (row column).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>CSS Grid 2D layout (rows aur columns dono ek sath) handle karne ki premium technique hai:</p>
                <ul>
                    <li><code>display: grid;</code>: Tag ko grid layout container banata hai.</li>
                    <li><code>grid-gap</code>: Row gaps aur column gaps ko specify karta hai (jaise <code>grid-gap: 20px;</code>).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .grid-box {
    display: grid;
    grid-template-columns: auto auto; /* Two equal columns */
    grid-gap: 15px;
    background: #0f172a;
    padding: 15px;
  }
  .item { background: var(--accent-blue); padding: 20px; text-align: center; color: black; }
</style>

<div class="grid-box">
  <div class="item">Grid 1</div>
  <div class="item">Grid 2</div>
  <div class="item">Grid 3</div>
  <div class="item">Grid 4</div>
</div>`
    },
    {
        level: "CSS Level 7",
        title: "Grid Container Properties",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Properties set on the parent grid wrapper container:</p>
                <ul>
                    <li><code>grid-template-columns</code>: Declares the width size and count of columns. E.g. <code>grid-template-columns: 100px 1fr 200px;</code>.</li>
                    <li><code>1fr</code> unit: Represents 1 fraction of free available space in the grid container.</li>
                    <li><code>justify-content</code>: Aligns the entire grid matrix horizontally inside container.</li>
                    <li><code>align-content</code>: Aligns grid rows vertically.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Parent Grid container ki major properties:</p>
                <ul>
                    <li><code>grid-template-columns</code>: Grid columns ki size aur sankhya set karta hai. E.g. <code>auto auto auto</code> 3 columns dega.</li>
                    <li><code>1fr</code> unit: Screen ki bachi hui fraction space ko auto-calculate karke share karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .grid-container {
    display: grid;
    /* Column 1 is 100px, Column 2 takes the remaining fraction space */
    grid-template-columns: 100px 1fr;
    grid-gap: 10px;
    background: #1e293b;
    padding: 10px;
  }
  .card { background: var(--accent-purple); color: white; padding: 15px; }
</style>

<div class="grid-container">
  <div class="card">Sidebar (100px)</div>
  <div class="card">Main Content Area (1fr)</div>
</div>`
    },
    {
        level: "CSS Level 7",
        title: "Grid Item Properties",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Properties set on grid child items to merge cells:</p>
                <ul>
                    <li><code>grid-column</code>: Spans a child across columns. E.g. <code>grid-column: 1 / 4;</code> spans from grid line 1 to grid line 4.</li>
                    <li>Shorthand span: <code>grid-column: 1 / span 3;</code> starts at column 1 and spans across 3 column cells.</li>
                    <li><code>grid-row</code>: Spans cells vertically across multiple rows. E.g. <code>grid-row: 1 / span 2;</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Grid items (child elements) ke dimensions set karna:</p>
                <ul>
                    <li><code>grid-column</code>: Kisi box ko columns merge karke bada dikhane ke liye. Jaise <code>grid-column: 1 / span 3;</code> 3 cells ko horizontally merge kar dega.</li>
                    <li><code>grid-row</code>: Vertical row merge ke liye use hota hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .grid-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    background: #000;
    padding: 10px;
  }
  .cell { background: #334155; color: white; padding: 15px; text-align: center; }
  .merge-cell { grid-column: 1 / span 3; background: var(--accent-pink); } /* Merged */
</style>

<div class="grid-grid">
  <div class="cell merge-cell">Header row (merged 3 columns)</div>
  <div class="cell">Box 1</div>
  <div class="cell">Box 2</div>
  <div class="cell">Box 3</div>
</div>`
    },
    {
        level: "CSS Level 7",
        title: "CSS Media Queries",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Media Queries</b> apply styling rules conditional on screen breakpoints (Responsive Design):</p>
                <div class="code-preview-block">
                    @media only screen and (max-width: 900px) { <br>
                    &nbsp;&nbsp;body { background-color: aqua; } <br>
                    }
                </div>
                <p>The code above changes the page background color to aqua only when the screen width is 900px or smaller (e.g. mobile/tablets).</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Media Queries</b> ka use website ko responsive (mobile/tablet friendly) banane ke liye kiya jata hai:</p>
                <ul>
                    <li>Aap media conditions set kar sakte hain, jaise screen width 900px se kam hone par styling automatic badal jaye.</li>
                    <li>Isse design, single column me fit ho jata hai mobile view par.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .responsive-box {
    background: var(--accent-purple);
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  /* Mobile screen check */
  @media only screen and (max-width: 500px) {
    .responsive-box {
      background: var(--accent-pink);
      font-size: 1.2rem;
    }
  }
</style>

<div class="responsive-box">
  Desktop purple h, lekin agar user browser screen ko resize karke 500px se chota karega to me Pink ho jaunga!
</div>`
    },
    {
        level: "CSS Level 7",
        title: "LEVEL-7 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Code these grid responsive layouts:</p>
                <ul>
                    <li><b>Task 1:</b> Create a webpage layout with dynamic header and content rows using CSS Grid grids.</li>
                    <li><b>Task 2:</b> Implement a media query breakpoint showing a Green page background on large screens, a Red background on medium screens, and a Yellow background on small devices.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Grid aur queries ki practices:</p>
                <ul>
                    <li><b>Task 1:</b> CSS Grid template rows aur column merges ka use karke dashboard layout ready karo.</li>
                    <li><b>Task 2:</b> Ek responsive structure design karo jo screen resize hone par dynamic green, red aur yellow backgrounds check kare.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-7 CSS practice here -->
`
    },
    {
        level: "CSS Level 8",
        title: "CSS Transforms",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Transforms skew, rotate, or translate layout elements in 2D or 3D spaces:</p>
                <ul>
                    <li><code>transform: translate(x, y);</code>: Moves the element from its original position.</li>
                    <li><code>transform: rotate(angle);</code>: Rotates the element (e.g. <code>rotate(45deg)</code>).</li>
                    <li><code>transform: scale(x, y);</code>: Resizes the element (e.g. <code>scale(1.5)</code> zooms in).</li>
                    <li><code>transform-origin</code>: Specifies the pivot coordinate of rotation.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Transforms se hum elements ko shift, rotate, zoom ya skew kar sakte hain:</p>
                <ul>
                    <li><code>translate(x, y)</code>: Box ko coordinates par move karta hai.</li>
                    <li><code>rotate(45deg)</code>: Box ko 45 degrees par ghumata hai.</li>
                    <li><code>scale(1.5)</code>: Box ko zoom-in (size increase) karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .transform-card {
    width: 100px;
    height: 100px;
    background: var(--accent-blue);
    margin: 40px auto;
    transition: transform 0.3s ease;
  }
  /* Hover effect */
  .transform-card:hover {
    transform: rotate(45deg) scale(1.2);
  }
</style>

<div class="transform-card"></div>
<p style="text-align:center; color:white;">Hover over the box to rotate and zoom!</p>`
    },
    {
        level: "CSS Level 8",
        title: "Transitions & Animations",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Transitions:</b> Smoothly animate property changes over time.
                        <br>Syntax shorthand: <code>transition: property duration timing delay;</code>. E.g. <code>transition: width 2s ease-in 1s;</code>.
                    </li>
                    <li><b>Animations:</b> More complex keyframe animations. Uses <code>@keyframes</code>:
                        <div class="code-preview-block">
                            @keyframes my-spin { <br>
                            &nbsp;&nbsp;from { transform: rotate(0deg); } <br>
                            &nbsp;&nbsp;to { transform: rotate(360deg); } <br>
                            }
                        </div>
                    </li>
                    <li><b>Animation Shorthand:</b> <code>animation: name duration timing-function iteration-count direction;</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Transitions:</b> Hover hone par color/size change hone ko jhatke ke bajaye smooth (slow motion) banata hai.</li>
                    <li><b>Animations:</b> Complex loop animations chalane ke liye <code>@keyframes</code> use hota hai, jisme hum state values batate hain (from -> to).</li>
                    <li><b>Shorthand animation:</b> <code>animation: spin 5s linear infinite;</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .animated-circle {
    width: 60px;
    height: 60px;
    background: var(--accent-pink);
    border-radius: 50%;
    margin: 20px auto;
    animation: bounce 1.5s infinite alternate ease-in-out;
  }
  @keyframes bounce {
    from { transform: translateY(0px); }
    to { transform: translateY(-50px); }
  }
</style>

<div class="animated-circle"></div>`
    },
    {
        level: "CSS Level 8",
        title: "LEVEL-8 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Complete this animation assignment:</p>
                <ul>
                    <li><b>Task:</b> Create a rotating loading spinner image animation using custom CSS rules. When the user hovers over it, the animation should speed up.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diya gaya task editor playground me check karein:</p>
                <ul>
                    <li><b>Task:</b> CSS transitions and keyframes ka use karke ek circular loading spinner banao jo continuously circular path me rotate kare.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-8 practice here -->
`
    },
    {
        level: "CSS Capstone Project",
        title: "Project: Netflix Clone",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's combine all HTML and CSS skills to design a landing page structure resembling a <b>Netflix Clone</b> interface:</p>
                <ul>
                    <li>Layout header bar containing brand logo and select inputs.</li>
                    <li>A hero section with a dark-opacity background image.</li>
                    <li>Centered texts, bold heading descriptions, a custom styled email input form, and a red submit button.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Chalo ab hum apne HTML aur CSS concepts ko mix karke ek real static page design karte hain: **Netflix Landing Page Clone**!</p>
                <ul>
                    <li><b>Step 1:</b> Top Nav bar design karein (logo, select lang, login button).</li>
                    <li><b>Step 2:</b> Center text details, signup labels, inputs, aur Red color input button add karein.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Capstone Project: Netflix Landing Page Layout here -->
<div style="background-color: black; font-family: 'Outfit', sans-serif; color: white; padding: 30px; text-align: center; border-radius: 12px; border: 2px solid #e50914;">
  <h2 style="color: #e50914; font-size: 2.2rem; margin-bottom: 5px;">NETFLIX</h2>
  <p style="font-size: 1.2rem; font-weight: bold;">Unlimited movies, TV shows, and more</p>
  <p style="font-size: 0.9rem; color: #ccc;">Starts at ₹149. Cancel anytime.</p>
  <br>
  <form style="display: flex; justify-content: center; gap: 10px; max-width: 500px; margin: 0 auto; flex-wrap: wrap;">
    <input type="email" placeholder="Email address" style="flex: 1; padding: 12px; border-radius: 4px; border: 1px solid #555; background: rgba(0,0,0,0.5); color: white; min-width: 200px;">
    <button type="submit" style="background: #e50914; color: white; padding: 12px 24px; border: none; font-weight: bold; border-radius: 4px; cursor: pointer;">Get Started ></button>
  </form>
</div>`
    },

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* JAVASCRIPT COURSE SLIDES (Based on provided PDF) */
    {
        level: "JS Level 0",
        title: "Introduction to JavaScript",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to the <b>JavaScript course</b> by <b>codewith_ai</b>! JavaScript is the programming language of the web that makes web pages interactive and logical.</p>
                <ul>
                    <li>It helps us to interact with the computer.</li>
                    <li>It can be executed directly inside the browser's console or using node.js.</li>
                    <li>We insert JS inside our HTML pages using the <code>&lt;script&gt;</code> tag.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>codewith_ai</b> ke JavaScript tutorial me aapka swagat hai! JavaScript (JS) website ko responsive aur logical banati hai:</p>
                <ul>
                    <li>Ye computer se interactive bhasha me baat karne me madad karti hai.</li>
                    <li>Ise browser console me ya backend me node.js se chala sakte hain.</li>
                    <li>HTML file me JS code likhne ke liye hum <code>&lt;script&gt;</code> tag ka use karte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<button onclick="alert('Namaste, codewith_ai JS me aapka swagat h!')">Click to test JS</button>`
    },
    {
        level: "JS Level 1",
        title: "Declaration of Variables",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Variables store data. We have three ways to declare variables in JavaScript:</p>
                <ul>
                    <li><code>let a = 20;</code>: Block scoped variable that can be updated but **not re-declared**.</li>
                    <li><code>const a = 20;</code>: Block scoped constant that **neither can be updated nor re-declared**.</li>
                    <li><code>var a = 20;</code>: Globally scoped variable that can be updated and re-declared. (Not recommended).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Variables data store karne ke containers (boxes) hote hain. JS me declaration ke 3 keyword hain:</p>
                <ul>
                    <li><code>let</code>: Scope block me chalta hai. Iski value change kar sakte hain, lekin same name ka let variable dobara nahi bana sakte.</li>
                    <li><code>const</code>: Constants ke liye hota hai jo freeze hote hain (na value badlegi na dobara declare honge).</li>
                    <li><code>var</code>: Global scope variable (purana tarika, ab standard me use nahi hota).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<h3 id="var-output">Loading...</h3>
<script>
  let score = 50;
  score = 100; // Let variables can be updated
  
  const student = " Vivaan";
  // student = "Rohan"; // Will throw error! Const cannot be updated
  
  document.getElementById("var-output").innerText = student + " scored: " + score;
</script>`
    },
    {
        level: "JS Level 1",
        title: "Rules for Variable Names",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>When naming variables, follow these strict rules:</p>
                <ul>
                    <li>Letters, digits, underscores (<code>_</code>), and dollar signs (<code>$</code>) are allowed.</li>
                    <li>A variable name must begin with a letter, underscore, or dollar sign. It **cannot** start with a digit.</li>
                    <li>JavaScript reserved words (like <code>let</code>, <code>class</code>, <code>function</code>) cannot be used as variable names.</li>
                    <li>Variable names are **case-sensitive**. E.g., <code>AYUSH</code> and <code>ayush</code> are two completely different variables.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Variable naming rules:</p>
                <ul>
                    <li>Variables me alphabets, numbers, underscore (<code>_</code>) aur dollar (<code>$</code>) sign chalte hain.</li>
                    <li>Naam humesha letter, underscore ya dollar sign se hi shuru hoga (number se shuru nahi ho sakta).</li>
                    <li>JS reserved keywords (jaise <code>let</code>, <code>const</code>, <code>if</code>) variables ke name nahi ban sakte.</li>
                    <li>JS case-sensitive hai: <code>CODING</code> aur <code>coding</code> dono alag variables honge.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<h3 id="rules-demo">Testing...</h3>
<script>
  let _user$Name = "Aanya";
  let age = 12;
  // let 1stRank = "Winner"; // Invalid variable name! Starts with digit.
  
  document.getElementById("rules-demo").innerText = "Variable parsed: " + _user$Name;
</script>`
    },
    {
        level: "JS Level 1",
        title: "Primitive Types & Objects",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>JavaScript has 7 **Primitive Data Types**:
                    <ul>
                        <li><code>Null</code>: Represents deliberate empty value.</li>
                        <li><code>Number</code>: Numeric digits (integer/float).</li>
                        <li><code>String</code>: Text elements.</li>
                        <li><code>Symbol</code>: Unique identifiers.</li>
                        <li><code>Undefined</code>: Uninitialized variable default state.</li>
                        <li><code>Boolean</code>: <code>true</code> or <code>false</code>.</li>
                        <li><code>BigInt</code>: Extremely large numbers.</li>
                    </ul>
                    <b>Objects:</b> Key-value pair structures (e.g. <code>const student = { name: "Rohan", age: 20 };</code>).
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>JS me basic data formats (Primitive types) ye hain:</p>
                <ul>
                    <li><code>Null</code> (khali value), <code>Number</code> (sankhya), <code>String</code> (text block), <code>Undefined</code> (uninitialized variable), <code>Boolean</code> (ha/na logic), aur <code>BigInt</code> (bade digits).</li>
                    <li><b>Objects:</b> Details store karne ke liye group variables hote hain: <code>{ name: "Ayush", age: "20" }</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="obj-out"></div>
<script>
  const student = {
    name: "Ayush",
    age: 20,
    marks: 98
  };
  
  document.getElementById("obj-out").innerHTML = 
    "<p>Name: " + student.name + "</p><p>Age: " + student.age + "</p>";
</script>`
    },
    {
        level: "JS Level 1",
        title: "Level-1 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Task 1:</b> Create a variable of type string and try to add a number to it (e.g. <code>"hello" + 25</code>). Check what is the output.</li>
                    <li><b>Task 2:</b> Use the <code>typeof</code> operator to find the datatype of the string in Task 1.</li>
                    <li><b>Task 3:</b> Create a const object in JavaScript. Can you change it to hold a number later?</li>
                    <li><b>Task 4:</b> Try to add a new key to the const object in Task 3. Were you able to do it?</li>
                    <li><b>Task 5:</b> Write a JavaScript program to store the name, age, and marks of a student using objects and print them.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye logic tasks ko sandbox me run karein:</p>
                <ul>
                    <li><b>Task 1:</b> String variable banao aur usme `+` sign se ek number add karo, output display karo.</li>
                    <li><b>Task 2:</b> <code>typeof</code> command se Task 1 wale variable ka type check karo.</li>
                    <li><b>Task 3:</b> Ek const object banao, kya aap use completely badal kar number object assign kar sakte hain?</li>
                    <li><b>Task 4:</b> Task 3 wale object ke andar naya key insert karke check karo.</li>
                    <li><b>Task 5:</b> Object data design karke student details render karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-1 JS practice here -->
`
    },
    {
        level: "JS Level 2",
        title: "Operators in JS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Operators perform mathematical and logical computations:</p>
                <ul>
                    <li><b>Arithmetic Operators:</b> 
                        <code>+</code> (Add), <code>-</code> (Subtract), <code>*</code> (Multiply), <code>/</code> (Divide), 
                        <code>**</code> (Exponentiation / Power), <code>%</code> (Modulus / Remainder), 
                        <code>++</code> (Increment), <code>--</code> (Decrement).
                    </li>
                    <li><b>Assignment Operators:</b> 
                        <code>=</code> (a=b), <code>+=</code> (a=a+b), <code>-=</code> (a=a-b), <code>*=</code> (a=a*b).
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>JS me basic calculations karne ke liye hum operators use karte hain:</p>
                <ul>
                    <li><b>Arithmetic:</b> Jod (<code>+</code>), Ghaata (<code>-</code>), Guna (<code>*</code>), Bhaag (<code>/</code>), Power exponent (<code>**</code>), sheshfal modulus remainder (<code>%</code>), increment (+1), decrement (-1).</li>
                    <li><b>Assignment:</b> Value assign aur self update karne ke liye (jaise <code>x += 5</code> yaani <code>x = x + 5</code>).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="ops-out"></div>
<script>
  let a = 10;
  let b = 3;
  let result = a ** b; // 10 ki power 3 = 1000
  let rem = a % b;    // Remainder of 10/3 = 1
  
  document.getElementById("ops-out").innerHTML = 
    "<p>10 Power 3: " + result + "</p><p>Remainder: " + rem + "</p>";
</script>`
    },
    {
        level: "JS Level 2",
        title: "Logical & Comparison",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Comparison and Logical operators guide decision flow:</p>
                <ul>
                    <li><b>Comparison Operators:</b> 
                        <code>==</code> (Equal to), <code>===</code> (Equal value and type), 
                        <code>!=</code> (Not equal), <code>!==</code> (Strict not equal), 
                        <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.
                    </li>
                    <li><b>Logical Operators:</b> 
                        <code>&&</code> (Logical AND: true if both are true), 
                        <code>||</code> (Logical OR: true if at least one is true), 
                        <code>!</code> (Logical NOT: reverses boolean state).
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Comparison aur logical check features:</p>
                <ul>
                    <li><b>Comparison:</b> Do variables ko compare karta hai (<code>==</code> sirf value dekhta hai, jabki <code>===</code> value aur datatype dono check karta hai).</li>
                    <li><b>Logical:</b> Multi-conditions checks (<code>&&</code> yaani dono condition true ho, <code>||</code> yaani koi ek condition bhi true chalegi, <code>!</code> true ko false aur false ko true banata hai).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="log-out"></div>
<script>
  let x = 5;
  let y = "5";
  
  let eqVal = (x == y);   // true (both have value 5)
  let eqType = (x === y); // false (one is number, other is string)
  
  document.getElementById("log-out").innerHTML = 
    "<p>Double Equals: " + eqVal + "</p><p>Triple Equals: " + eqType + "</p>";
</script>`
    },
    {
        level: "JS Level 2",
        title: "Conditional Statements",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Conditional blocks run specific segments of code depending on boolean checks:</p>
                <ul>
                    <li><b>if statement:</b> Executes block if condition is true.</li>
                    <li><b>if-else statement:</b> Runs if-block if true, else-block if false.</li>
                    <li><b>if-else if:</b> Checks multiple conditions sequentially.</li>
                    <li><b>Ternary Operator:</b> Short syntax: <code>condition ? expressionIfTrue : expressionIfFalse</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Decision making blocks:</p>
                <ul>
                    <li><b>if:</b> Condition match hone par chalta hai.</li>
                    <li><b>if-else:</b> Agar condition sahi hai to code block A run hoga, nahi to block B.</li>
                    <li><b>Ternary operator:</b> Single line decision block (<code>age >= 18 ? "Vote" : "No Vote"</code>).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="cond-out"></div>
<script>
  let age = 15;
  let result = (age >= 18) ? "Eligible for driving license" : "Too young to drive!";
  
  document.getElementById("cond-out").innerText = result;
</script>`
    },
    {
        level: "JS Level 2",
        title: "Level-2 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Solve these tasks inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Use logical operators to find whether the age of a person lies between 10 and 20.</li>
                    <li><b>Task 2:</b> Demonstrate the use of <code>switch case</code> statements in JavaScript.</li>
                    <li><b>Task 3:</b> Write a JavaScript program to check if a number is divisible by both 2 and 3.</li>
                    <li><b>Task 4:</b> Check user proposal inputs: print "accepted" or "rejected" using a ternary operator.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye operations ko check karein:</p>
                <ul>
                    <li><b>Task 1:</b> Logical <code>&&</code> ka use karke age range (10 se 20) filter check karo.</li>
                    <li><b>Task 2:</b> Switch statement use karke weekday display run karo.</li>
                    <li><b>Task 3:</b> Remainder modulo checks use karke 2 aur 3 se divisible values check check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-2 JS practice here -->
`
    },
    {
        level: "JS Level 3",
        title: "Loops in JS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Loops are used to execute a block of code repeatedly as long as a specified condition is met:</p>
                <ul>
                    <li><b>for loop:</b> Contains <code>initialization; condition; update</code> counters in one line. Best when iterations count is known.</li>
                    <li><b>while loop:</b> Repeats code while a condition is true. Condition is checked **before** the block runs.</li>
                    <li><b>do-while loop:</b> Checks condition **after** the block runs. Executes code at least **once** regardless of condition.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Loops ka use kisi task ko baar-baar repeat karne ke liye hota hai:</p>
                <ul>
                    <li><b>for loop:</b> Ek hi line me starting (initialization), check condition aur increment/decrement counters set kar deta hai.</li>
                    <li><b>while loop:</b> Loop tabhi chalega jab condition pehle se true ho.</li>
                    <li><b>do-while loop:</b> Condition bad me check karta hai. Is wajah se code block bina check hue **kam se kam ek baar** zaroor run hota hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="loop-out"></div>
<script>
  let text = "";
  for (let i = 1; i <= 5; i++) {
    text += "Iteration No: " + i + "<br>";
  }
  document.getElementById("loop-out").innerHTML = text;
</script>`
    },
    {
        level: "JS Level 3",
        title: "For-in & For-of Loops",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>JavaScript provides simplified loop iterators for collections:</p>
                <ul>
                    <li><b>for-in loop:</b> Iterates through the **keys (properties)** of an object.
                        <br>Syntax: <code>for (key in object) { ... }</code>.
                    </li>
                    <li><b>for-of loop:</b> Iterates through the **values** of an iterable collection (like arrays or strings).
                        <br>Syntax: <code>for (value of iterable) { ... }</code>.
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Advanced collection loop arrays/objects:
                    <ul>
                        <li><b>for-in loop:</b> Kisi object ki saari **keys/properties** ko serial wise filter karne ke liye (jaise student record).</li>
                        <li><b>for-of loop:</b> Iterables (jaise arrays, lists, strings) ki **values** ko direct access karta hai.</li>
                    </ul>
                </p>
            </div>
        `,
        sandboxCode: `<div id="adv-loop-out"></div>
<script>
  const marks = { rohan: 90, aanya: 95, vivaan: 88 };
  let res = "";
  for (let key in marks) {
    res += key + " got " + marks[key] + " marks.<br>";
  }
  document.getElementById("adv-loop-out").innerHTML = res;
</script>`
    },
    {
        level: "JS Level 3",
        title: "Functions in JS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>A Function is a block of code designed to perform a particular task. We declare functions once and call them when needed:</p>
                <ul>
                    <li><b>Standard Function:</b>
                        <code>function name(param1, param2) { return val; }</code>
                    </li>
                    <li><b>Arrow Function:</b> Modern concise syntax.
                        <code>const add = (a, b) => { return a + b; }</code>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Function design aur use-case:</p>
                <ul>
                    <li>Hum code ka ek block banate hain jo baar-baar reuse ho sake.</li>
                    <li><b>Standard declaration:</b> <code>function sum(a,b) { ... }</code>.</li>
                    <li><b>Arrow function (Modern):</b> Simple arrow format <code>const sum = (a, b) => a + b;</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="func-out"></div>
<script>
  const multiply = (x, y) => x * y;
  
  let val = multiply(12, 5); // Calling function
  document.getElementById("func-out").innerText = "Result: " + val;
</script>`
    },
    {
        level: "JS Level 3",
        title: "Level-3 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Complete these tasks inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Write a program to print the marks of students in an object using a <code>for-in</code> loop. Object: <code>obj = { ayush: 95, Hemant: 92, Dev: 33 }</code>.</li>
                    <li><b>Task 2:</b> Write a program to print the multiplication table of a given number.</li>
                    <li><b>Task 3:</b> Write a program to print "try again" until the user enters the correct number.</li>
                    <li><b>Task 4:</b> Write a function that calculates and prints the average of 4 numbers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye tasks complete karein:</p>
                <ul>
                    <li><b>Task 1:</b> <code>for-in</code> loop ka use karke students ke marks print karo.</li>
                    <li><b>Task 2:</b> For loop ka use karke table (pahaada) print karo.</li>
                    <li><b>Task 3:</b> While loop ka use karke correct target number filter loop chalao.</li>
                    <li><b>Task 4:</b> 4 numbers ka average nikalne wala custom function design karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-3 JS practice here -->
`
    },
    {
        level: "JS Level 4",
        title: "Strings & Literals",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Strings are collections of text characters. Declared inside single or double quotes:</p>
                <ul>
                    <li><code>let name = "ayush";</code>: Standard string.</li>
                    <li><b>Template Literals:</b> Enclosed in backticks (<code>\`</code>). Supports **string interpolation** to inject variables directly inside text using <code>\${variable}</code>.
                        <br>E.g., <code>let status = \`\${name} is a good boy\`;</code>
                    </li>
                    <li><b>Escape Sequences:</b> Used to print special formatting characters:
                        <ul>
                            <li><code>\n</code>: Prints a newline.</li>
                            <li><code>\t</code>: Prints a tab space.</li>
                            <li><code>\'</code> or <code>\"</code>: Escapes quote characters.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Strings aksharon (text) ka collection hoti hain:</p>
                <ul>
                    <li>Double quotes (<code>"text"</code>) ya single quotes (<code>'text'</code>) me likha jata hai.</li>
                    <li><b>Template Literals:</b> Backticks (<code>\`</code>) ke andar hum dynamic variables inject kar sakte hain: <code>Student: \${name}</code>.</li>
                    <li><b>Escape Characters:</b> Special spaces add karne ke liye (jaise <code>\n</code> next line par jaane ke liye).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="str-out"></div>
<script>
  let user = "Ayush";
  let greeting = \`Namaste \${user}!\nWelcome to our page.\`;
  
  document.getElementById("str-out").innerHTML = "<pre>" + greeting + "</pre>";
</script>`
    },
    {
        level: "JS Level 4",
        title: "String Properties & Methods",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>JavaScript offers built-in properties and methods to manipulate strings:</p>
                <ul>
                    <li><code>name.length</code>: Returns length of string. (It is a property, not a function).</li>
                    <li><code>name.toUpperCase()</code>: Converts string to uppercase.</li>
                    <li><code>name.toLowerCase()</code>: Converts string to lowercase.</li>
                    <li><code>name.slice(start, end)</code>: Cuts out a portion of the string from start index to end index.</li>
                    <li><code>name.replace(target, replacement)</code>: Replaces target word.</li>
                    <li><code>name.trim()</code>: Removes extra starting and ending whitespaces.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Strings ko manipulate karne ke helper methods:</p>
                <ul>
                    <li><code>length</code>: Strings me kitne characters hain unka count batata hai.</li>
                    <li><code>toUpperCase() / toLowerCase()</code>: Upper / lower case casing change.</li>
                    <li><code>slice(start, end)</code>: String ka specific tukda cut (slice) karne ke liye.</li>
                    <li><code>replace(old, new)</code>: Target word ko badalta hai.</li>
                    <li><code>trim()</code>: Faltu space ko clear karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="str-methods"></div>
<script>
  let text = "   codewith_ai   ";
  let trimmed = text.trim();
  let length = trimmed.length;
  let sliced = trimmed.slice(0, 4); // "code"
  
  document.getElementById("str-methods").innerHTML = 
    "<p>Original: '" + text + "'</p>" +
    "<p>Trimmed: '" + trimmed + "' (Length: " + length + ")</p>" +
    "<p>Sliced: '" + sliced + "'</p>";
</script>`
    },
    {
        level: "JS Level 4",
        title: "Level-4 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Perform these string operations inside the playground:</p>
                <ul>
                    <li><b>Task 1:</b> Find the output of: <code>console.log("ayush\"".length)</code>. Explain how escape quotes impact string length.</li>
                    <li><b>Task 2:</b> Explore string methods: <code>includes</code>, <code>startsWith</code>, and <code>endsWith</code>.</li>
                    <li><b>Task 3:</b> Write a program to convert a given string to uppercase.</li>
                    <li><b>Task 4:</b> Extract the score number out of the string: <code>"virat scored 100 in last match"</code>.</li>
                    <li><b>Task 5:</b> Try to change the 3rd character of a string. Were you able to do it? (Hint: JS strings are immutable!).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Strings tasks complete karein:</p>
                <ul>
                    <li><b>Task 1:</b> <code>ayush\"</code> string ke characters counts filter check karo.</li>
                    <li><b>Task 2:</b> <code>includes</code>, <code>startsWith</code> commands check karo jo boolean True/False details batate hain.</li>
                    <li><b>Task 3:</b> Custom string text ko dynamic uppercase letters check karo.</li>
                    <li><b>Task 4:</b> String me se number (100) slice slice check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-4 JS practice here -->
`
    },
    {
        level: "JS Level 5",
        title: "Arrays & Accessing",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Arrays are multi-value variables that can hold lists of elements in a single container. Elements are ordered and indexed starting at 0:</p>
                <ul>
                    <li><b>Declaration:</b> <code>const arr = [27, "ayush", true, "dev"];</code>. (Arrays can hold values of different data types).</li>
                    <li><b>Accessing:</b> <code>let value = numbers[0];</code> returns the first element.</li>
                    <li><b>Updating:</b> <code>numbers[1] = 99;</code> changes the second element value directly.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Arrays ek se zyada values ko single list me store karne ke variables hote hain:</p>
                <ul>
                    <li><b>Declaration:</b> <code>const arr = [10, "Rohan", true];</code> (JS me same array me alag-alag data types chal sakte hain).</li>
                    <li><b>Accessing:</b> Items ka index 0 se shuru hota hai. Jaise <code>arr[0]</code> index par pehla item display hoga.</li>
                    <li><b>Mutability:</b> Arrays ki values ko beech me change (update) kiya ja sakta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="arr-out"></div>
<script>
  let names = ["Ayush", "Dev", "Hemant"];
  names[1] = "Aanya"; // Change index 1
  
  document.getElementById("arr-out").innerHTML = 
    "<p>First Name: " + names[0] + "</p><p>Second Name: " + names[1] + "</p>";
</script>`
    },
    {
        level: "JS Level 5",
        title: "Methods of Arrays",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>JavaScript provides powerful methods to manipulate arrays:</p>
                <ul>
                    <li><code>arr.push(val)</code>: Adds a new element to the **end** of the array.</li>
                    <li><code>arr.pop()</code>: Removes the **last** element from the array.</li>
                    <li><code>arr.shift()</code>: Removes the **first** element and returns it.</li>
                    <li><code>arr.unshift(val)</code>: Adds a new element to the **beginning** of the array.</li>
                    <li><code>arr.join(separator)</code>: Joins elements into a string using a custom separator.</li>
                    <li><code>arr.concat(arr2)</code>: Merges two arrays.</li>
                    <li><code>arr.reverse()</code>: Reverses array element orders.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Arrays list ke standard methods:</p>
                <ul>
                    <li><code>push()</code>: Naya item array ke **aakhir (end)** me jodta hai.</li>
                    <li><code>pop()</code>: Aakhri item ko remove kar deta hai.</li>
                    <li><code>shift()</code>: Pehle item (index 0) ko remove karta hai.</li>
                    <li><code>unshift()</code>: Naye item ko array ke **shuruat (beginning)** me add karta hai.</li>
                    <li><code>join("-")</code>: List ko custom symbol ke sath join karke text banata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="arr-methods"></div>
<script>
  let numbers = [1, 2, 3];
  numbers.push(4);      // [1, 2, 3, 4]
  let popped = numbers.pop(); // Removes 4
  
  document.getElementById("arr-methods").innerHTML = 
    "<p>Remaining List: " + numbers.join(" -> ") + "</p>" +
    "<p>Removed Item: " + popped + "</p>";
</script>`
    },
    {
        level: "JS Level 5",
        title: "Looping through Arrays",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Higher-order array methods allow you to loop and process lists efficiently:</p>
                <ul>
                    <li><code>arr.forEach((value, index) => { ... })</code>: Runs a function for each array element.</li>
                    <li><code>arr.map((value) => { return value * 2; })</code>: Creates a **new array** by transforming each element.</li>
                    <li><code>arr.filter((value) => { return value &gt; 5; })</code>: Creates a **new array** containing only elements that pass the logic check.</li>
                    <li><code>arr.reduce((accumulator, value) => { return accumulator + value; })</code>: Reduces array to a single value (e.g. calculating total sum).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Array looping aur transformation techniques:</p>
                <ul>
                    <li><code>forEach()</code>: Har element par logic code chala deta hai.</li>
                    <li><code>map()</code>: Ek **nayi array** banata hai elements me calculations karke.</li>
                    <li><code>filter()</code>: Ek **nayi array** banata hai conditions check karke elements filter karne ke liye (jaise marks &gt; 90).</li>
                    <li><code>reduce()</code>: Pure array ko single value me calculate kar deta hai (jaise total sum calculation).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="loop-arr"></div>
<script>
  let prices = [10, 20, 30, 40];
  let discounted = prices.map(p => p - 2); // Substract 2 from each price
  let filtered = prices.filter(p => p > 25); // Prices above 25
  
  document.getElementById("loop-arr").innerHTML = 
    "<p>Map Result: " + discounted.join(", ") + "</p>" +
    "<p>Filter Result: " + filtered.join(", ") + "</p>";
</script>`
    },
    {
        level: "JS Level 5",
        title: "Level-5 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Solve these array logic problems:</p>
                <ul>
                    <li><b>Task 1:</b> Create an array of numbers and write a script to insert a user input number to the beginning of the array.</li>
                    <li><b>Task 2:</b> Keep adding numbers to an array using a loop until the number 27 is inserted.</li>
                    <li><b>Task 3:</b> Filter out all even numbers from a given array.</li>
                    <li><b>Task 4:</b> Use the <code>map</code> method to create an array containing the cubes of a given number array.</li>
                    <li><b>Task 5:</b> Use the <code>reduce</code> method to calculate the factorial of a given number from an array of first n natural numbers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Arrays list tasks completed code edit karein:</p>
                <ul>
                    <li><b>Task 1:</b> <code>unshift()</code> keyword use karke inputs array front start check karo.</li>
                    <li><b>Task 2:</b> While loop conditional logic use karke array entries inputs check loop chalao.</li>
                    <li><b>Task 3:</b> Remainder modulo check se even numbers (even % 2 === 0) list filter check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-5 JS practice here -->
`
    },
    {
        level: "JS Level 6",
        title: "Console Object Methods",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The console object provides debugging console panel print helpers:</p>
                <ul>
                    <li><code>console.log()</code>: Outputs generic message.</li>
                    <li><code>console.error()</code>: Displays error message with red highlight.</li>
                    <li><code>console.warn()</code>: Displays warning message.</li>
                    <li><code>console.table()</code>: Displays complex array or object data in a clean matrix table.</li>
                    <li><code>console.clear()</code>: Clears the console screen.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Console object methods jo developers code testing ke liye browser inspect panel console me check karte hain:</p>
                <ul>
                    <li><code>console.log()</code>: Simple output message print.</li>
                    <li><code>console.error()</code>: Red error message print.</li>
                    <li><code>console.warn()</code>: Yellow warning print.</li>
                    <li><code>console.table()</code>: Objects aur lists ko clean visual table me print karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<p>Open browser console (Right-Click -> Inspect -> Console) to see output!</p>
<script>
  console.log("Console Log prints normal");
  console.warn("Console Warn prints warning");
  console.error("Console Error prints error message");
  
  const users = [
    { name: "Ayush", age: 20 },
    { name: "Aanya", age: 12 }
  ];
  console.table(users); // Displays table format!
</script>`
    },
    {
        level: "JS Level 6",
        title: "Alert, Prompt & Confirm",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Three browser interaction popups:</p>
                <ul>
                    <li><b>alert(msg):</b> Invokes a small popup window showing a message and OK button. Halts script execution until OK is clicked.</li>
                    <li><b>prompt(msg, default):</b> Displays input window. Returns string entered by user, or null if canceled.</li>
                    <li><b>confirm(msg):</b> Shows message with OK and Cancel options. Returns <code>true</code> for OK and <code>false</code> for Cancel.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Browser interactions popups:</p>
                <ul>
                    <li><b>alert():</b> Message popup dikhata hai. User jab tak OK nahi dabata tab tak browser freezing halt rehta hai.</li>
                    <li><b>prompt():</b> Input text lene ke liye box.</li>
                    <li><b>confirm():</b> Yes/No confirm popup (OK dabane par <code>true</code> return hoga, Cancel par <code>false</code>).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<button onclick="runInteraction()">Test Alerts</button>
<p id="alert-res"></p>

<script>
  function runInteraction() {
    alert("Alert: Loading driving age prompt!");
    let ageInput = prompt("Enter your age:", "18");
    if (ageInput !== null) {
      let isSure = confirm("Are you sure your age is " + ageInput + "?");
      document.getElementById("alert-res").innerText = 
        "User Age: " + ageInput + ". Confirmed state: " + isSure;
    }
  }
</script>`
    },
    {
        level: "JS Level 6",
        title: "Window Object, BOM & DOM",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The global <code>window</code> object represents the browser window. It contains:</p>
                <ul>
                    <li><b>JavaScript Core:</b> Basic arrays, functions, variables.</li>
                    <li><b>BOM (Browser Object Model):</b> Additional browser control settings (navigator, screen, location, scroll). Functions like <code>alert</code>, <code>prompt</code> are part of the BOM.</li>
                    <li><b>DOM (Document Object Model):</b> Represents page content as tree nodes. The core entry point is <code>window.document</code> (or simply <code>document</code>).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Browser architecture tree:</p>
                <ul>
                    <li><b>Window:</b> Sabse bada global container object (Browser tab window).</li>
                    <li><b>BOM:</b> Website content ke alawa browser ki controls ko handle karta hai (jaise tab URL redirect location ya browser type navigator settings).</li>
                    <li><b>DOM:</b> HTML document structure ko variables me map karta hai. Entry point <code>document</code> hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<button onclick="testBOM()">Test Location Redirect</button>
<script>
  function testBOM() {
    // BOM location check to verify current page href
    alert("Current URL is: " + window.location.href);
  }
</script>`
    },
    {
        level: "JS Level 6",
        title: "Walking the DOM",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTML elements form parent-child tree nodes. We navigate these nodes using DOM navigation properties:</p>
                <ul>
                    <li><code>element.firstChild</code>: First child node.</li>
                    <li><code>element.lastChild</code>: Last child node.</li>
                    <li><code>element.childNodes</code>: Node list of all child nodes (includes text nodes and spacing).</li>
                    <li><code>element.parentNode</code> / <code>element.parentElement</code>: Gets parent tag element.</li>
                    <li><code>element.nextElementSibling</code> / <code>previousElementSibling</code>: Gets next/previous sibling tag block on the same level.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>DOM Navigation pointers:</p>
                <ul>
                    <li>Hum nodes tree me upar-niche navigate kar sakte hain.</li>
                    <li><code>firstChild / lastChild</code>: Pehla aur aakhri child tag.</li>
                    <li><code>parentElement</code>: Kisi tag ka parent block.</li>
                    <li><code>nextElementSibling</code>: Same level par uske aage ka next tag.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="parent-container">
  <span>Span 1</span>
  <span>Span 2</span>
</div>
<button onclick="navigateDOM()">Check child</button>

<script>
  function navigateDOM() {
    const parent = document.getElementById("parent-container");
    const child = parent.firstElementChild; // Span 1
    child.style.color = "var(--accent-pink)";
    alert("First Element Child tag is: " + child.tagName);
  }
</script>`
    },
    {
        level: "JS Level 6",
        title: "Searching the DOM",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Methods to search and select specific tags inside the DOM:</p>
                <ul>
                    <li><code>document.getElementById("id")</code>: Selects the single element with matching ID.</li>
                    <li><code>document.querySelector("selector")</code>: Returns the **first** element matching CSS selector format (e.g. <code>.class</code> or <code>#id</code>).</li>
                    <li><code>document.querySelectorAll("selector")</code>: Returns a **NodeList** of all matching elements.</li>
                    <li><code>document.getElementsByClassName("class-name")</code>: Returns all elements with matching class attribute.</li>
                    <li><code>document.getElementsByTagName("tag-name")</code>: Returns elements matching tag name.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>DOM me elements search aur select karne ke premium methods:</p>
                <ul>
                    <li><code>getElementById()</code>: Ek unique ID tag fetch karta hai.</li>
                    <li><code>querySelector()</code>: CSS selector rules use karke sabse **pehla** matching tag find karta hai (jaise <code>.box p</code>).</li>
                    <li><code>querySelectorAll()</code>: Saare matching elements ki list details banakar return karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<p class="search-item">Item A</p>
<p class="search-item">Item B</p>
<button onclick="searchItems()">Highlight All</button>

<script>
  function searchItems() {
    const items = document.querySelectorAll(".search-item");
    items.forEach(el => el.style.background = "rgba(0,210,255,0.2)");
  }
</script>`
    },
    {
        level: "JS Level 6",
        title: "Level-6 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Code these DOM navigation challenges:</p>
                <ul>
                    <li><b>Task 1:</b> Write a program using prompt to ask user age. If age is 18+, alert "You can drive". Use confirm to ask if they want to run the prompt again.</li>
                    <li><b>Task 2:</b> Take user color inputs inside a prompt and change the background-color of the document body to that color.</li>
                    <li><b>Task 3:</b> Create a navigation bar header list. Use querySelector to select the first list item and style its text color to Brown.</li>
                    <li><b>Task 4:</b> Write a script to select all <code>&lt;li&gt;</code> tags and change their backgrounds to Purple.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Niche diye gaye DOM and popups tasks sandbox me code karein:</p>
                <ul>
                    <li><b>Task 1:</b> Prompt, alert, aur confirm statements use karke looping driving logic run check check check check check karo.</li>
                    <li><b>Task 2:</b> User se input kiya color name read karke body background change change check check karo.</li>
                    <li><b>Task 3:</b> QuerySelector se list select karke details check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-6 JS practice here -->
`
    },
    {
        level: "JS Level 7",
        title: "DOM Attribute Methods",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Manipulate HTML attributes directly from scripts:</p>
                <ul>
                    <li><code>element.hasAttribute(name)</code>: Returns true if attribute exists on element.</li>
                    <li><code>element.getAttribute(name)</code>: Reads value of attribute.</li>
                    <li><code>element.setAttribute(name, value)</code>: Writes or modifies attribute setting (e.g. changing <code>src</code> path of image).</li>
                    <li><code>element.removeAttribute(name)</code>: Deletes attribute from tag.</li>
                    <li><code>element.attributes</code>: Returns collection of all attributes.</li>
                    <li><b>data-* Attributes:</b> Custom developer variables. Accessible using <code>element.dataset</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTML attributes modify karne ke dynamic commands:</p>
                <ul>
                    <li><code>getAttribute() / setAttribute()</code>: Link path ya image source properties read/write karne ke liye.</li>
                    <li><code>removeAttribute()</code>: Attribute settings delete karne ke liye.</li>
                    <li><b>data-x:</b> Custom parameters list jo user details map karne ke liye data-prefix ke sath embed hoti hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<a id="custom-link" data-info="test">Target Link</a>
<button onclick="changeLink()">Set Redirect URL</button>

<script>
  function changeLink() {
    const el = document.getElementById("custom-link");
    el.setAttribute("href", "https://google.com");
    el.setAttribute("target", "_blank");
    el.innerText = "Visit Google (New Tab)! Dataset: " + el.dataset.info;
    el.style.color = "var(--accent-blue)";
  }
</script>`
    },
    {
        level: "JS Level 7",
        title: "innerHTML & outerHTML",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>innerHTML property:</b> Reads or updates the internal HTML content inside the selected element as a raw string. E.g. <code>box.innerHTML = "&lt;h1&gt;Header&lt;/h1&gt;";</code>.</li>
                    <li><b>outerHTML property:</b> Contains the innerHTML plus the element tag container itself.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>innerHTML:</b> Select kiye tag ke andar ka pure HTML structure text badalta hai ya load karta hai. Isse hum variables ke sath direct new elements (jaise heading tags) inject kar sakte hain.</li>
                    <li><b>outerHTML:</b> Selected tag ke andar aur bahar ke container elements ko poora select kar leta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="div-card">Initial Text</div>
<button onclick="updateHTML()">Update HTML</button>

<script>
  function updateHTML() {
    const card = document.getElementById("div-card");
    // Change inner block structure
    card.innerHTML = "<h3 style='color:var(--accent-pink);'>Dynamic Header Injected!</h3>";
  }
</script>`
    },
    {
        level: "JS Level 7",
        title: "DOM Insertion Methods",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Add dynamically generated elements into the document page flow:</p>
                <ul>
                    <li><code>document.createElement("tag")</code>: Creates a new element box in memory.
                        <br>E.g. <code>let box = document.createElement("div");</code>
                    </li>
                    <li><code>element.append(node)</code>: Inserts element at the **end** of the parent node.</li>
                    <li><code>element.prepend(node)</code>: Inserts element at the **beginning** of the parent node.</li>
                    <li><code>element.before(node)</code>: Places element immediately **before** target element.</li>
                    <li><code>element.after(node)</code>: Places element immediately **after** target element.</li>
                    <li><code>element.replaceWith(node)</code>: Replaces target element directly.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Naye HTML elements ko document me dynamically insert karne ke methods:</p>
                <ul>
                    <li><code>createElement()</code>: Memory me naya container tag create karta hai.</li>
                    <li><code>append()</code>: Selected tag ke end me add karta hai.</li>
                    <li><code>prepend()</code>: Tag ke starting boundary me check insert karta hai.</li>
                    <li><code>before() / after()</code>: Tag se immediate pehle ya immediate baad insert karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<ul id="my-list">
  <li>Item 2</li>
</ul>
<button onclick="insertItem()">Insert Elements</button>

<script>
  function insertItem() {
    const list = document.getElementById("my-list");
    
    // Create new list elements
    let first = document.createElement("li");
    first.innerText = "Item 1 (Prepended)";
    list.prepend(first);
    
    let last = document.createElement("li");
    last.innerText = "Item 3 (Appended)";
    list.append(last);
  }
</script>`
    },
    {
        level: "JS Level 7",
        title: "Adjacent HTML & Classes",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>insertAdjacentHTML(position, html):</b> Inserts raw HTML adjacent to target element position:
                        <ul>
                            <li><code>"beforebegin"</code>: Immediately before element.</li>
                            <li><code>"afterbegin"</code>: Inside element at the beginning.</li>
                            <li><code>"beforeend"</code>: Inside element at the end.</li>
                            <li><code>"afterend"</code>: Immediately after element.</li>
                        </ul>
                    </li>
                    <li><b>classList API:</b> Manipulates CSS classes dynamically:
                        <ul>
                            <li><code>classList.add("class")</code>: Adds class.</li>
                            <li><code>classList.remove("class")</code>: Removes class.</li>
                            <li><code>classList.toggle("class")</code>: Adds class if not present, else removes it.</li>
                            <li><code>classList.contains("class")</code>: Checks if class exists.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Element adjacent insert aur CSS classes manipulate karna:</p>
                <ul>
                    <li><b>insertAdjacentHTML:</b> Position parameters (beforebegin, afterbegin, etc.) use karke adjacent HTML inject karta hai.</li>
                    <li><b>classList:</b> CSS styles toggling ke liye classes add ya remove karta hai. <code>classList.toggle()</code> light/dark mode switch me bohot useful hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .dark-card { background: #000; color: yellow; padding: 15px; border-radius: 8px; }
</style>
<div id="target-box" style="border: 1px solid white; padding: 10px; margin-bottom:10px;">
  Box Content
</div>
<button onclick="testAdjacent()">Adjacent Insert</button>
<button onclick="toggleDarkClass()">Toggle Style</button>

<script>
  function testAdjacent() {
    const el = document.getElementById("target-box");
    el.insertAdjacentHTML("beforebegin", "<p>Paragraph Inserted Before Begin!</p>");
  }
  function toggleDarkClass() {
    document.getElementById("target-box").classList.toggle("dark-card");
  }
</script>`
    },
    {
        level: "JS Level 7",
        title: "Timers & DOM Events",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>1. Timer functions:</b>
                    <ul>
                        <li><code>let timerID = setTimeout(function, delay, arg1...)</code>: Executes function once after specified millisecond delay. Clear using <code>clearTimeout(timerID)</code>.</li>
                        <li><code>let timerID = setInterval(function, delay)</code>: Repeats function execution regularly at every delay interval. Clear using <code>clearInterval(timerID)</code>.</li>
                    </ul>
                </p>
                <p><b>2. DOM Events:</b> Signals emitted by DOM elements (Mouse clicks, Keydown/keyup keyboard clicks, Form Submit/focus, DOMContentLoaded).</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Timers aur dynamic events logic:</p>
                <ul>
                    <li><b>setTimeout:</b> Specific time delay (milliseconds me, e.g. 1000 = 1 second) ke baad function ko **sirf ek baar** chalata hai.</li>
                    <li><b>setInterval:</b> Specific intervals par functions ko **baar-baar repeat** chalata rehta hai.</li>
                    <li><b>Browser Events:</b> Inputs/Signals (jaise mouse clicks, keydown keys, form submit events).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<h3 id="timer-val">0</h3>
<button onclick="startLoop()">Start Counter</button>
<button onclick="stopLoop()">Stop</button>

<script>
  let intervalID = null;
  let count = 0;
  function startLoop() {
    if (!intervalID) {
      intervalID = setInterval(() => {
        count++;
        document.getElementById("timer-val").innerText = "Counter: " + count;
      }, 1000); // 1 second repeat
    }
  }
  function stopLoop() {
    clearInterval(intervalID);
    intervalID = null;
  }
</script>`
    },
    {
        level: "JS Level 7",
        title: "Level-7 Practice Sheet",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Perform these event tasks inside the editor:</p>
                <ul>
                    <li><b>Task 1:</b> Write a program to change the background-color of the page body to different colors by clicking different buttons (Red, Green, Blue buttons).</li>
                    <li><b>Task 2:</b> Create a Nightmode toggle switch feature on your website using classList toggle.</li>
                    <li><b>Task 3:</b> Bind click events using both <code>onclick</code> HTML properties and <code>addEventListener</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Events practice tasks:</p>
                <ul>
                    <li><b>Task 1:</b> Teen alag-alag buttons banakar unpar click logic set karo jo body color change karein.</li>
                    <li><b>Task 2:</b> <code>classList.toggle("dark-mode")</code> use karke dynamic Nightmode features design karo.</li>
                    <li><b>Task 3:</b> Click events binding method check check check karo.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<!-- Solve Level-7 JS practice here -->
`
    },
    {
        level: "JS Level 7",
        title: "Project-1: Digital Clock",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's build a functional **Digital Clock** project. We will use:
                    <ul>
                        <li>The Javascript built-in <code>Date</code> object.
                            <br>Syntax: <code>let now = new Date();</code>
                            <br>Methods: <code>now.getHours()</code>, <code>now.getMinutes()</code>, <code>now.getSeconds()</code>.
                        </li>
                        <li><code>setInterval()</code> to refresh the time display values on screen every single second.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Chalo ab hum ek real digital clock project code karte hain:</p>
                <ul>
                    <li><b>Date Object:</b> JS ka internal object hai jo system time details read karta hai (jaise hours, minutes, seconds).</li>
                    <li><b>setInterval:</b> Is date function block ko har 1 second (1000ms) par trigger karega taaki screen clock automatic update ho sake.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div style="text-align: center; padding: 30px; background: #0d1117; border: 2px solid var(--accent-blue); border-radius: 12px; max-width: 300px; margin: 0 auto;">
  <h2 style="color: var(--accent-blue); margin-bottom: 10px;">Digital Clock</h2>
  <h1 id="clock-display" style="color: white; font-family: monospace; font-size: 2.2rem; margin: 0;">00:00:00</h1>
</div>

<script>
  function updateTime() {
    const now = new Date();
    let hrs = now.getHours().toString().padStart(2, '0');
    let mins = now.getMinutes().toString().padStart(2, '0');
    let secs = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("clock-display").innerText = hrs + ":" + mins + ":" + secs;
  }
  
  // Update time instantly and set repeat loop
  updateTime();
  setInterval(updateTime, 1000);
</script>`
    },
    {
        level: "JS Level 8",
        title: "Sync vs Async Actions",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Synchronous Action:</b> Code runs sequentially in a single line thread. Each instruction waits for the previous instruction to finish execution before starting (blocks flow).</li>
                    <li><b>Asynchronous Action:</b> Allows next instructions to execute immediately without waiting, not blocking the program flow (e.g. data fetching, setTimeout timers).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Synchronous:</b> Code sequential line-by-line chalta hai. Har statement apne pehle wale statement ke complete hone ka wait karta hai.</li>
                    <li><b>Asynchronous:</b> Aise actions jo execute hone me time lete hain (jaise data fetch), unka browser background me wait karta hai aur baki sequential steps bina block hue chalti rehti hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<script>
  console.log("1. Start Sync Action");
  setTimeout(() => {
    console.log("2. Async Timer Action completed!");
  }, 1500); // Background run
  console.log("3. End Sync Action. Notice console log ordering!");
</script>
<p>Open browser console inspect pane to see async log orders!</p>`
    },
    {
        level: "JS Level 8",
        title: "Callbacks & Promises",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <ul>
                    <li><b>Callbacks:</b> A function passed as an argument to another function, to run after an async operation completes.
                        <br><b>Callback Hell (Pyramid of Doom):</b> Deeply nested callbacks stacked under each other, making code unreadable and hard to maintain.
                    </li>
                    <li><b>Promises:</b> Represents the eventual success or failure of an async task.
                        <br>Syntax: <code>let promise = new Promise((resolve, reject) => { ... })</code>.
                        <br>Handle states using <code>.then()</code> (success) and <code>.catch()</code> (errors).
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul>
                    <li><b>Callbacks:</b> Ek function jo doosre function me argument ki tarah pass hota hai taaki task complete hone par trigger ho sake.</li>
                    <li><b>Callback Hell:</b> Jab bohot saare nested callbacks ek ke andar ek phans jate hain (Pyramid of doom) aur code ko padhna mushkil ho jata hai.</li>
                    <li><b>Promises:</b> Callback hell ka modern solution hai jo asynchronous task ki final value ya failure state ko handle karta hai (<code>.then</code> success ke liye aur <code>.catch</code> errors ke liye).</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="promise-res">Running promise...</div>
<script>
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
    }, 1000);
  });
  
  myPromise.then(result => {
    document.getElementById("promise-res").innerText = result;
  }).catch(err => {
    console.error(err);
  });
</script>`
    },
    {
        level: "JS Level 8",
        title: "Async - Await",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Modern clean syntax built on top of Promises to write asynchronous code that reads like synchronous code:</p>
                <ul>
                    <li><code>async</code> keyword: Declares a function that returns a Promise.</li>
                    <li><code>await</code> keyword: Pauses the execution of the surrounding async function until the promise settles (either resolves or rejects). Works only inside async functions.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Promises aur callbacks handle karne ki modern standard clean method:</p>
                <ul>
                    <li><code>async</code>: Function ke aage likhte hain, isse function hamesha promise return karta hai.</li>
                    <li><code>await</code>: Sirf async function ke andar chalta hai. Ye program flow ko tab tak hold karta hai jab tak promise complete/settle na ho jaye. Isse nested code lines likhne se bach jaate hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="async-out">Waiting...</div>
<script>
  function delayLoad() {
    return new Promise(resolve => setTimeout(() => resolve("Loaded after delay!"), 1500));
  }
  
  async function runProcess() {
    // Await will wait for delayLoad promise to resolve
    let data = await delayLoad();
    document.getElementById("async-out").innerText = data;
  }
  
  runProcess();
</script>`
    },
    {
        level: "JS Level 8",
        title: "Fetch API & JSON",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <b>Fetch API</b> provides a script interface to fetch (send/receive) data resources from external servers:</p>
                <ul>
                    <li>Returns a promise resolving to a response object.</li>
                    <li><code>let promise = fetch(url, [options]);</code></li>
                    <li><b>JSON (JavaScript Object Notation):</b> The standard format to exchange web data. Parse text body to a Javascript object using <code>response.json()</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>External server se data fetch aur save karne ki standard method:</p>
                <ul>
                    <li><code>fetch(url)</code>: Target API se server values load karne ka command.</li>
                    <li><b>JSON:</b> Server data format. Is text block data structure format ko access karne ke liye hum <code>response.json()</code> compile karte hain jo text ko standard array/object me change kar deta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="fetch-out">Fetching API data...</div>
<script>
  async function loadDummyData() {
    try {
      // Free public API placeholder data
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let data = await response.json();
      document.getElementById("fetch-out").innerHTML = 
        "<p>Task ID: " + data.id + "</p><p>Title: " + data.title + "</p>";
    } catch(err) {
      document.getElementById("fetch-out").innerText = "Fetch failed: " + err;
    }
  }
  loadDummyData();
</script>`
    },
    {
        level: "JS Capstone Project",
        title: "Project-2: Weather App",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>We combine Fetch API, async-await, and DOM manipulation to construct a **Weather App Dashboard**:</p>
                <ul>
                    <li>Queries free public API coordinates dynamically (we will mock details for simplicity).</li>
                    <li>Updates element headings dynamically based on the searched city names.</li>
                    <li>Displays temperature, weather descriptions, and matches UI color styling to temperatures.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Chalo ab hum JS course ka capstone weather application design karte hain:</p>
                <ul>
                    <li><b>Step 1:</b> User se input read karenge city name input.</li>
                    <li><b>Step 2:</b> API fetch call chala kar values fetch karenge.</li>
                    <li><b>Step 3:</b> DOM manipulation se temperature card contents render karenge page par.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div style="text-align: center; padding: 25px; background: #1e293b; border-radius: 12px; color: white; max-width: 300px; margin: 0 auto; border: 2px solid var(--accent-purple);">
  <h2 style="margin-top:0;">Weather App</h2>
  <input type="text" id="city-in" placeholder="Enter City (e.g. Mumbai)" style="padding: 8px; border-radius: 4px; border:none; width: 80%; margin-bottom: 10px; color:black;">
  <br>
  <button onclick="getWeather()" style="background: var(--accent-purple); color: white; padding: 8px 16px; border:none; border-radius:4px; font-weight:bold; cursor:pointer;">Search</button>
  
  <div style="margin-top: 20px;">
    <h3 id="w-city">City Name</h3>
    <h1 id="w-temp">-- °C</h1>
    <p id="w-desc">No data searched yet</p>
  </div>
</div>

<script>
  async function getWeather() {
    const city = document.getElementById("city-in").value;
    if (!city) return;
    
    document.getElementById("w-city").innerText = city.toUpperCase();
    document.getElementById("w-temp").innerText = "Checking...";
    
    // Simulate Weather API fetch response (Mock)
    setTimeout(() => {
      let temp = Math.floor(Math.random() * 15) + 20; // 20 to 35
      let desc = temp > 28 ? "Sunny Weather" : "Cool Breeze";
      
      document.getElementById("w-temp").innerText = temp + " °C";
      document.getElementById("w-desc").innerText = desc;
    }, 1000);
  }
</script>`
    },

    /* REACT COURSE SLIDES (Based on provided PDF) */
    {
        level: "React Level 1",
        title: "Introduction to React",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to **React JS** by **codewith_ai**! React is a free, open-source front-end JavaScript library created by Facebook for building premium User Interfaces using **Components**.</p>
                <ul>
                    <li>It is widely used to develop **Single Page Applications (SPAs)** that feel smooth and fast.</li>
                    <li>React only updates and rerenders the specific parts of the webpage that have changed, rather than reloading the entire DOM.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>React JS kya hai aur iska use kyu karte hain?</p>
                <ul>
                    <li>React ek free aur open-source frontend JS library hai jise Facebook ne banaya hai.</li>
                    <li>Isse hum high-speed **Single Page Applications (SPAs)** banate hain jo bina page reload hue chalte hain.</li>
                    <li>React website me sirf usi part ko update/render karta hai jisme badlav hua ho, jisse website super fast load hoti hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 1",
        title: "React DOM & Architecture",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>React splits development into multiple modules to compile pages:</p>
                <ul>
                    <li><b>React Core:</b> Deals with states, props, hooks, and component logic.</li>
                    <li><b>ReactDOM:</b> Directly interacts with the browser's Document Object Model to render views.</li>
                    <li><b>React Native:</b> Builds native mobile apps (iOS & Android) using the same React structure!</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>React ka modular architecture:</p>
                <ul>
                    <li><b>React Core:</b> Logic, states, components, aur props manage karne ka base module.</li>
                    <li><b>ReactDOM:</b> HTML pages me dynamic inputs render karke site screen show karta hai.</li>
                    <li><b>React Native:</b> Mobile applications (Android/iOS) build karne me help karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 2",
        title: "Create React App & Utilities",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>To set up a local React development environment, you can use these popular tools:</p>
                <ul>
                    <li><b>Create-React-App (CRA):</b> Classic official utility to spawn templates.</li>
                    <li><b>Vite (Recommended):</b> Extremely fast modern build tool for spawning frontend applications.</li>
                    <li><b>Key Terms:</b>
                        <ul>
                            <li><code>npm</code>: Node Package Manager (installs packages/libraries).</li>
                            <li><code>npx</code>: Node Package Executor (runs package binaries directly without permanent install).</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>React environment setup karne ke main tools:</p>
                <ul>
                    <li><b>Vite:</b> Aajkal ka recommended build tool hai jo project ko bohot jaldi load aur run karta hai.</li>
                    <li><b>npm (Package Manager):</b> Alag libraries install karne ke liye tools standard.</li>
                    <li><b>npx (Package Executor):</b> Bina full installation ke binary commands directly run karta hai (jaise React initialization project templates).</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 2",
        title: "What is JSX?",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>JSX</b> stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows us to write HTML structures directly inside JavaScript files.</p>
                <ul>
                    <li>It makes writing components visual and straightforward.</li>
                    <li>Browsers cannot parse JSX directly. Build tools compile JSX into standard JavaScript code using compilers (like Babel).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>JSX (JavaScript XML):</b></p>
                <ul>
                    <li>Ye JavaScript ka syntax extension hai jiske zariye hum JS code ke andar direct HTML likh sakte hain.</li>
                    <li>Yaani **HTML + JS = JSX**!</li>
                    <li>Browser ise direct samajh nahi sakta, isliye build tools ise compiled format JS me translate karte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 2",
        title: "JSX Syntaxes & Rules",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>When writing JSX, remember these key differences from standard HTML:</p>
                <ul>
                    <li>Use <code>className</code> instead of <code>class</code> to define CSS styling classes.</li>
                    <li>Use <code>htmlFor</code> instead of <code>for</code> inside labels.</li>
                    <li>Inject dynamic JavaScript values and expressions directly inside JSX templates using **curly braces** <code>{ variable }</code>.</li>
                    <li>Every JSX block must be wrapped in a single parent tag or a fragment block (<code>&lt;&gt; ... &lt;/&gt;</code>).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>JSX ke important rules jo standard HTML se alag hain:</p>
                <ul>
                    <li>HTML ka <code>class</code> JSX me <b><code>className</code></b> ban jata hai.</li>
                    <li>Label ka <code>for</code> JSX me <b><code>htmlFor</code></b> ban jata hai.</li>
                    <li>JSX ke andar dynamic JavaScript variables aur logic ko wrap karne ke liye <b>Curly Braces (<code>{ ... }</code>)</b> use karte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="react-jsx-demo"></div>
<script>
  // Simple representation of JSX compilation in codewith_ai playground
  const student = { name: "codewith_ai", role: "React Developer" };
  
  // Enclosing HTML template with JS variables interpolation
  const renderedHTML = \`
    <div>
      <h3 class="title">Student: \${student.name}</h3>
      <p>Role: <strong>\${student.role}</strong></p>
    </div>
  \`;
  document.getElementById("react-jsx-demo").innerHTML = renderedHTML;
</script>`
    },
    {
        level: "React Capstone Project",
        title: "Project 1: Layout Box",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's build **Practice Project 1**: A React-styled landing page dashboard layout.
                    <ul>
                        <li><b>Header:</b> Brand logo and navigation menu links.</li>
                        <li><b>Body Content:</b> Structured cards grid showcasing beautiful animal details (Leopards, Elephants).</li>
                        <li><b>Footer:</b> Clean bottom copyright layout.</li>
                    </ul>
                </p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Chalo ab hum pehla React project setup code test karte hain:</p>
                <ul>
                    <li><b>Header Navbar:</b> logo, home links.</li>
                    <li><b>Image Grid:</b> Cards system displaying animals.</li>
                    <li><b>Footer:</b> Copyright text page blocks.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<style>
  .app-header { display: flex; justify-content: space-between; padding: 15px; background: #0f172a; color: white; border-bottom: 2px solid var(--accent-blue); }
  .grid-container { display: flex; gap: 15px; margin: 20px 0; }
  .card { border: 1px solid var(--border-color); padding: 10px; border-radius: 8px; flex: 1; text-align: center; }
  .card img { border-radius: 6px; width: 100%; height: 120px; object-fit: cover; border-radius: 6px; }
  .app-footer { text-align: center; padding: 15px; background: #1e293b; color: #94a3b8; font-size: 0.9rem; }
</style>

<div class="app-header">
  <strong>codewith_ai LOGO</strong>
  <div>HOME | ABOUT | CONTACT US</div>
</div>

<div class="grid-container">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1602491453979-02654b33c24b?w=400" alt="Leopard">
    <h4>Leopard</h4>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400" alt="Elephant">
    <h4>Elephant</h4>
  </div>
</div>

<div class="app-footer">
  THIS IS FOOTER - © 2026 codewith_ai
</div>`
    },
    {
        level: "React Level 3",
        title: "Introduction to Props",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Props</b> stands for **Properties**. They are read-only arguments passed into React components.</p>
                <ul>
                    <li>React props function exactly like arguments in JavaScript functions or attributes in HTML tags.</li>
                    <li>They allow us to pass data from a parent component to child components to render dynamic contents.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>React Props (Properties):</b></p>
                <ul>
                    <li>Props ka full form Properties hai. Ye read-only argument values hoti hain jo hum components ko pass karte hain.</li>
                    <li>Jaise HTML tags me attributes use hote hain (jaise <code>src</code> image me), waise hi React components me dynamic values pass karne ke liye props use karte hain.</li>
                    <li>Isse hum parent component se child component me data send karte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 3",
        title: "Props Arguments Example",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Observe how components receive and render props arguments:</p>
                <ul>
                    <li>Parent passes attribute: <code>&lt;Car brand="Ford" /&gt;</code></li>
                    <li>Child accesses value: <code>props.brand</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Props transfer ka syntax check karein:</p>
                <ul>
                    <li>Parent call: <code>&lt;Car brand="Ford" /&gt;</code></li>
                    <li>Child code: <code>props.brand</code> read karke content print karta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="props-car-demo"></div>
<script>
  // Simple functional component mock
  function CarComponent(props) {
    return \`<div style="border:1px solid yellow; padding:10px; margin:5px;">I am a \${props.brand} car!</div>\`;
  }
  
  // Render two components with different props value
  let outHTML = CarComponent({ brand: "Ford" }) + CarComponent({ brand: "Tesla" });
  document.getElementById("props-car-demo").innerHTML = outHTML;
</script>`
    },
    {
        level: "React Capstone Project",
        title: "Project 2: Cars Cards Grid",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's build **Practice Project 2**: A cars grid displaying various dynamic model cards using props configurations:</p>
                <ul>
                    <li>Range Rover: RS 1.89cr</li>
                    <li>BMW: RS 2.89cr</li>
                    <li>Lamborghini: RS 8.89cr</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Practice Project 2: Cars detail dashboard layout. BMW, Range Rover aur Lamborghini ke details standard card formats me render honge.</p>
            </div>
        `,
        sandboxCode: `<style>
  .cars-header { display: flex; justify-content: space-between; padding: 12px; background: #1e293b; color: white; }
  .cars-grid { display: flex; gap: 15px; margin: 20px 0; }
  .car-card { background: #0f172a; border: 2px solid var(--accent-purple); color: white; padding: 12px; border-radius: 8px; flex: 1; text-align: center; }
  .car-card img { width: 100%; height: 110px; object-fit: cover; border-radius: 4px; }
  .car-price { color: var(--accent-pink); font-weight: bold; margin-top: 5px; }
  .cars-footer { text-align: center; padding: 10px; background: #1e293b; color: #94a3b8; }
</style>

<div class="cars-header">
  <strong>codewith_ai Cars</strong>
  <div>HOME | CARS | CONTACT</div>
</div>

<div class="cars-grid">
  <div class="car-card">
    <img src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=400" alt="Range Rover">
    <h4>Range Rover</h4>
    <div class="car-price">RS 1.89cr</div>
  </div>
  <div class="car-card">
    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" alt="BMW">
    <h4>BMW</h4>
    <div class="car-price">RS 2.89cr</div>
  </div>
  <div class="car-card">
    <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?w=400" alt="Lamborghini">
    <h4>Lamborghini</h4>
    <div class="car-price">RS 8.89cr</div>
  </div>
</div>

<div class="cars-footer">
  THIS IS FOOTER - codewith_ai Showcase
</div>`
    },
    {
        level: "React Level 4",
        title: "Introduction to Hooks",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Hooks</b> allow functional components to hook into state, lifecycle events, and other core React features.</p>
                <ul>
                    <li>Previously, states were only accessible in class components. Hooks allow us to use React state without writing class code.</li>
                    <li>Some commonly used React hooks are:
                        <ul>
                            <li><code>useState()</code>, <code>useEffect()</code>, <code>useRef()</code>.</li>
                            <li><code>useMemo()</code>, <code>useCallback()</code>, <code>useContext()</code>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>React Hooks:</b></p>
                <ul>
                    <li>Hooks functional components ke andar state aur dynamic lifecycle features use karne ka aasan tareeqa dete hain.</li>
                    <li>Iske aane se ab class components likhne ki zaroorat nahi padti, pura kaam aasaan function functions se ho jata hai.</li>
                    <li>Main hooks: <code>useState()</code> (state maintain karne ke liye), <code>useEffect()</code> (side-effects ke liye), aur <code>useRef()</code> (DOM reference).</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 4",
        title: "useState Hook",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <code>useState</code> hook tracks state and data properties in functional components:</p>
                <ul>
                    <li>It accepts an initial state value as an argument and returns two values:
                        <ol>
                            <li>The **current state** variable.</li>
                            <li>A **function** to update the state variable and trigger page re-render.</li>
                        </ol>
                    </li>
                    <li>Syntax: <code>const [color, setColor] = useState("red");</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>useState Hook:</b></p>
                <ul>
                    <li>Ye application data values ke values updates ko track karta hai.</li>
                    <li>Ise call karne par do elements milte hain: current variable aur use badalne wala functions parameter.</li>
                    <li>Syntax: <code>const [score, setScore] = useState(0);</code></li>
                </ul>
            </div>
        `,
        sandboxCode: `<div style="text-align:center; padding:15px; border:1px solid white;">
  <h3>useState Mock Demo</h3>
  <h1 id="count-val" style="color:var(--accent-blue);">Count: 0</h1>
  <button onclick="addCount()">Increment Count</button>
</div>

<script>
  // Simulating react useState lifecycle
  let countState = 0;
  function addCount() {
    countState++; // setScore update call
    document.getElementById("count-val").innerText = "Count: " + countState;
  }
</script>`
    },
    {
        level: "React Level 4",
        title: "useEffect Hook",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <code>useEffect</code> hook allows you to perform side effects in functional components:</p>
                <ul>
                    <li><b>Side Effects Examples:</b> Fetching data from APIs, directly updating DOM elements, setting up timers/intervals.</li>
                    <li>Syntax: <code>useEffect( &lt;function&gt;, &lt;dependency&gt; )</code></li>
                    <li>The second dependency array argument is optional but controls when the effect executes.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>useEffect Hook:</b></p>
                <ul>
                    <li>Ye components me external actions perform karne ke liye hota hai.</li>
                    <li>Jaise backend server se dynamic list fetch karna, timer loops trigger karna, ya background DOM values color shift logic.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 4",
        title: "useEffect Dependencies",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Control the execution of <code>useEffect</code> using these dependency array configurations:</p>
                <ul>
                    <li><b>No dependency passed:</b> Runs on every single render.
                        <br><code>useEffect(() => { ... });</code>
                    </li>
                    <li><b>Empty array passed:</b> Runs only once on the first initial render.
                        <br><code>useEffect(() => { ... }, []);</code>
                    </li>
                    <li><b>Props/State values passed:</b> Runs on the first render, and anytime any value in the array changes.
                        <br><code>useEffect(() => { ... }, [prop, state]);</code>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>useEffect dependency controls:</p>
                <ul>
                    <li><b>Bina array ke:</b> Har single page updates/renders par automatic chalta hai.</li>
                    <li><b>Empty Array (<code>[]</code>):</b> Sirf component ke load hone par (first page render) **sirf ek baar** chalta hai.</li>
                    <li><b>State values pass karne par:</b> Jab us list ki targeted value change hogi, tabhi trigger hoga.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Level 4",
        title: "useRef Hook",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <code>useRef</code> hook allows you to persist mutable values between renders without causing a component re-render when the value changes.</p>
                <ul>
                    <li>It can also be used to access browser DOM elements directly.</li>
                    <li>It returns a single mutable object with a <code>.current</code> property. E.g. <code>const val = useRef(0);</code> sets <code>val.current = 0</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>useRef Hook:</b></p>
                <ul>
                    <li>Ye values ko save rakhta hai bina kisi component re-render ke trigger ke.</li>
                    <li>Isse hum directly dynamic custom DOM elements (input fields) target kar sakte hain.</li>
                    <li>Ye ek object return karta hai jisme <code>.current</code> property standard data save rakhti hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div style="text-align:center; padding:15px;">
  <input type="text" id="target-input" placeholder="Type text...">
  <button onclick="focusInput()">Focus Field</button>
</div>

<script>
  function focusInput() {
    // Simulating useRef access to raw DOM element focus call
    const inputElement = document.getElementById("target-input");
    inputElement.focus();
    inputElement.style.border = "2px solid var(--accent-pink)";
  }
</script>`
    },
    {
        level: "React Level 5",
        title: "Single Page Routing",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>React Router</b> is the standard library for handling routing and page navigation in React applications.</p>
                <ul>
                    <li>It enables navigation between different views (Home, About, Contact) in a Single Page Application without reloading the entire webpage.</li>
                    <li>We configure routers using <code>createBrowserRouter</code> and render them using <code>RouterProvider</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>React Router:</b></p>
                <ul>
                    <li>React application me alag-alag pages ke paths (Home, About, Contact) manage karne ki library hai.</li>
                    <li>Isse website bina reload hue doosre links/views par transition karti hai.</li>
                    <li>Iske liye <code>createBrowserRouter</code> aur <code>RouterProvider</code> components configure hote hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "React Capstone Project",
        title: "Project 3: Routing SPA",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Let's build **Practice Project 3**: A Single Page Application (SPA) dashboard layout with clickable links mapping to subpages (Home, About, Contact) without page refresh.</p>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Practice Project 3: Dynamic routing. Nav tabs (Home, About, Contact) par click karne par main layout data shift content updates bina reload state display hoga.</p>
            </div>
        `,
        sandboxCode: `<style>
  .nav-bar { display: flex; gap: 15px; padding: 12px; background: #0f172a; color: white; }
  .nav-link { cursor: pointer; color: var(--accent-blue); font-weight: bold; text-decoration: underline; }
  .page-content { padding: 30px; background: rgba(255,255,255,0.05); text-align: center; border-radius: 8px; margin: 20px 0; }
</style>

<div class="nav-bar">
  <span>codewith_ai SPA Portal</span> |
  <span class="nav-link" onclick="loadTab('home')">Home</span> |
  <span class="nav-link" onclick="loadTab('about')">About</span> |
  <span class="nav-link" onclick="loadTab('contact')">Contact</span>
</div>

<div class="page-content" id="spa-body">
  <h1>Welcome Home!</h1>
  <p>This is the landing dashboard view of the Single Page App.</p>
</div>

<script>
  function loadTab(tabName) {
    const body = document.getElementById("spa-body");
    if (tabName === 'home') {
      body.innerHTML = "<h1>Welcome Home!</h1><p>This is the landing dashboard view of the Single Page App.</p>";
    } else if (tabName === 'about') {
      body.innerHTML = "<h1>About us</h1><p>We train junior developers inside codewith_ai academy!</p>";
    } else if (tabName === 'contact') {
      body.innerHTML = "<h1>Contact page</h1><p>Send emails to portal support staff.</p>";
    }
  }
</script>`
    },
    {
        level: "React Level 6",
        title: "Global State Sharing",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The <b>Context API</b> is a React feature used to share state variables and data globally across the entire component tree hierarchy.</p>
                <ul>
                    <li>It avoids **Prop Drilling** (passing props manually through nested sub-components that don't need them).</li>
                    <li>Created using <code>React.createContext()</code>. It provides a Provider component wrapping the children node tree.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Context API (Global State Sharing):</b></p>
                <ul>
                    <li>Bina **Prop Drilling** (yaani middle levels me faltu props pass kiye bina) direct nested components me data share karne ka system hai.</li>
                    <li>Ise <code>React.createContext()</code> se create karte hain. Iska ek Provider wrapper hota hai jo pure child components tree ko enclose kar leta hai taaki data direct access ho sake.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },

    /* BACKEND COURSE SLIDES (Based on provided PDF) */
    {
        level: "Backend Level 0",
        title: "What is Back-end Development?",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to the **Backend Course** by **codewith_ai**! Back-end development means working on server-side software, which focuses on everything you **cannot see** on a website.</p>
                <ul>
                    <li>It focuses on databases, back-end server logic, APIs, and servers.</li>
                    <li>Common Backend Programming Languages: JavaScript (Node.js), Python (Django/Flask), Java (Spring Boot), PHP (Laravel).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Backend development kya hota hai?</p>
                <ul>
                    <li>Backend development ka matlab hai website ke server-side par kaam karna. Har wo cheez jo user ko direct screen par nahi dikhti (jaise datastores ya servers logic).</li>
                    <li>Isme main focus databases storage, API endpoints, aur authentication servers par hota hai.</li>
                    <li>Languages use: Node.js (JavaScript), Python, Java, PHP etc.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 0",
        title: "Client-Server Flow",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>The standard backend data exchange works in a Request-Response cycle:</p>
                <ul>
                    <li><b>Client (Browser):</b> Sends a **Request** for data (e.g. searching for a video).</li>
                    <li><b>Server:</b> Receives the request, processes server logic, queries the database, and sends a **Response** back.</li>
                    <li><b>Database:</b> Securely stores persistent user logs and profile details.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Client-Server communication ka basic chakradhar:</p>
                <ul>
                    <li><b>Client (User Laptop):</b> Server ko data **Request** bhejta hai.</li>
                    <li><b>Server (Brain):</b> Request check karta hai, logic perform karta hai, database query karta hai, aur client ko **Response** bhejta hai.</li>
                    <li><b>Database (Memory):</b> Saara record aur data safe rakhta hai (jaise user login details).</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 1",
        title: "Node JS Runtime",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Node.js</b> is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser (on servers).</p>
                <ul>
                    <li>It runs on Google's high-performance **V8 JavaScript Engine**.</li>
                    <li>It is widely used to build fast, scalable network applications and web servers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Node.js Runtime Environment:</b></p>
                <ul>
                    <li>Node.js ek runtime environment hai jo browser ke bahar computer/server par JavaScript run karne ki permission deta hai.</li>
                    <li>Ye Chrome ke high-speed <b>V8 JS Engine</b> par chalta hai aur iska use web servers banana me kiya jata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 1",
        title: "Setting up Node JS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Follow these steps to set up your Node JS workspace:</p>
                <ol>
                    <li>Download and install Node JS from the official website.</li>
                    <li>Verify Node and npm installations inside terminal: <code>node -v</code> and <code>npm -v</code>.</li>
                    <li>Create your project folder and initialize package settings: <code>npm init -y</code> (this generates the <code>package.json</code> file).</li>
                </ol>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Node JS workspace setup ke steps:</p>
                <ol>
                    <li>Node.js install karein aur cmd me <code>node -v</code> aur <code>npm -v</code> se verify karein.</li>
                    <li>Apna project folder banakar cmd me initialize command run karein: <b><code>npm init -y</code></b> (isse <code>package.json</code> settings file auto-generate ho jayegi).</li>
                </ol>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 2",
        title: "Creating HTTP Server",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>We can build a basic web server using Node's built-in <code>http</code> module:</p>
                <ul>
                    <li>Import module: <code>import http from "http";</code></li>
                    <li>Create server: <code>http.createServer((req, res) => { res.end("hello"); });</code></li>
                    <li>Bind listener port: <code>server.listen(port);</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Node JS ka default http server banana:</p>
                <ul>
                    <li>Node ke native <code>http</code> module se raw web server generate hota hai.</li>
                    <li><code>res.end("text")</code> browser call ko text output respond karke close karta hai.</li>
                    <li>Server start karne ke liye hum use port bind listener <code>server.listen(3000)</code> commands dete hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="http-server-demo"></div>
<script>
  // Mocking http createServer request-response handling
  const mockRequest = { url: "/" };
  const mockResponse = {
    content: "",
    end: function(msg) { this.content = msg; }
  };
  
  // Server logic function
  const serverHandler = (req, res) => {
    res.end("Hello Mumbai, this is node.js server output response!");
  };
  
  serverHandler(mockRequest, mockResponse);
  document.getElementById("http-server-demo").innerHTML = 
    "<p style='color:var(--accent-blue); font-weight:bold;'>Server response output:</p><pre>" + mockResponse.content + "</pre>";
</script>`
    },
    {
        level: "Backend Level 2",
        title: "Routing in Node JS",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Routing</b> is the process of defining how an application responds to different client requests based on the URL paths (or Routes).</p>
                <ul>
                    <li>We read the client path check inside request URL property: <code>req.url</code>.</li>
                    <li>We write routing paths checks using conditional <code>if/else</code> statements inside the server logic handler.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Routing kya hai?</b></p>
                <ul>
                    <li>Routing se hum decide karte hain ki alag-alag URL links request par server kya reply dega.</li>
                    <li>Iske liye hum req object ke <code>req.url</code> parameter ko check karte hain.</li>
                    <li>Raw Node.js me hum conditional if/else check statements likhte hain, jise Express.js bohot aasan bana deta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 2",
        title: "Multi Route Server Code",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Look at how multiple page routes are checked and responded inside a raw Node.js HTTP server:</p>
                <ul>
                    <li>Home path: <code>if (req.url == "/") { res.end("Home"); }</code></li>
                    <li>About path: <code>else if (req.url == "/about") { res.end("About"); }</code></li>
                    <li>Fallback 404: <code>else { res.end("404 Not Found"); }</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Multi-route check parameters ka visual flow:</p>
            </div>
        `,
        sandboxCode: `<div id="routing-demo"></div>
<script>
  function mockServerRouting(urlPath) {
    let responseText = "";
    if (urlPath === "/") {
      responseText = "Welcome to Home Page!";
    } else if (urlPath === "/about") {
      responseText = "Welcome to About Page!";
    } else if (urlPath === "/contact") {
      responseText = "Welcome to Contact Page!";
    } else {
      responseText = "404 Page Not Found!";
    }
    return responseText;
  }
  
  document.getElementById("routing-demo").innerHTML = 
    "<p>Querying '/about' route response: <b>" + mockServerRouting("/about") + "</b></p>" +
    "<p>Querying '/invalid' route response: <b>" + mockServerRouting("/invalid") + "</b></p>";
</script>`
    },
    {
        level: "Backend Level 3",
        title: "What is Express JS?",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Express JS</b> is the most popular lightweight web framework for Node.js.</p>
                <ul>
                    <li>Instead of writing complex routing logic manually using Node's raw http module, Express provides clean shortcuts and features.</li>
                    <li>Install the package using npm: <code>npm install express</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Express JS Framework:</b></p>
                <ul>
                    <li>Express.js Node.js ka sabse popular web framework hai.</li>
                    <li>Raw Node.js me jo servers/routes manually codes se likhne padte the, Express unhe short aur readable commands me change kar deta hai.</li>
                    <li>Installation command: <b><code>npm install express</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 3",
        title: "Express Server Code",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Setting up a basic server using Express JS is concise:</p>
                <ul>
                    <li>Initialize app: <code>const app = express();</code></li>
                    <li>Define GET route: <code>app.get("/", (req, res) => { res.send("hello"); });</code></li>
                    <li>Bind listener port: <code>app.listen(3000);</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Express server creation steps:</p>
                <ul>
                    <li><code>express()</code> instance initialize hota hai.</li>
                    <li><code>app.get()</code> get request route configuration ke liye.</li>
                    <li><code>res.send()</code> automatic content types headers bind karke responses bhejta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="express-out"></div>
<script>
  // Simple simulation of Express route handler
  const mockExpressApp = {
    getRoute: function(path, handler) {
      if (path === "/") {
        const mockRes = { send: (msg) => msg };
        return handler({}, mockRes);
      }
    }
  };
  
  let msgOut = mockExpressApp.getRoute("/", (req, res) => {
    return res.send("hello, I'm Mumbai Express Home Route!");
  });
  
  document.getElementById("express-out").innerHTML = 
    "<p style='color:var(--accent-purple);'>Express simulated output:</p><code>" + msgOut + "</code>";
</script>`
    },
    {
        level: "Backend Level 3",
        title: "HTTP Request Methods",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTTP methods define the semantic nature of server requests:</p>
                <ul>
                    <li><b>GET:</b> Used to retrieve data resources from the server.</li>
                    <li><b>POST:</b> Used to send data payloads to create a new resource on the server.</li>
                    <li><b>PUT:</b> Overwrites/updates an entire existing resource.</li>
                    <li><b>PATCH:</b> Performs partial updates on an existing resource.</li>
                    <li><b>DELETE:</b> Removes a resource.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTTP methods ke usage rules:</p>
                <ul>
                    <li><b>GET:</b> Server se data load/retrieve karne ke liye.</li>
                    <li><b>POST:</b> Naya record database me create/insert karne ke liye (payload submit).</li>
                    <li><b>PUT:</b> Existing record ko poora replace/update karne ke liye.</li>
                    <li><b>PATCH:</b> Record ke kisi single key/value ko update karne ke liye.</li>
                    <li><b>DELETE:</b> Record ko delete/remove karne ke liye.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 3",
        title: "Express Route Params",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>req.params:</b> Stores route parameters defined inside the URL paths. It is used to capture dynamic segments from matching links:</p>
                <ul>
                    <li>Route path definition: <code>app.get("/user/:id", ...)</code></li>
                    <li>Access param: <code>const userId = req.params.id;</code></li>
                    <li>If URL is <code>/user/27</code>, then <code>userId</code> parses to <code>"27"</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>req.params (Dynamic Routing):</b></p>
                <ul>
                    <li>Route ke dynamic parameters read karne ka tarika hai (jaise user IDs).</li>
                    <li>Path setup: <code>"/user/:id"</code> (colons parameter parameterize define karte hain).</li>
                    <li>Agar link <code>/user/45</code> aati hai to <code>req.params.id</code> value <code>"45"</code> catch ho jayegi.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="params-out"></div>
<script>
  // Mock params parsing
  const mockParams = { id: "987" };
  const greeting = \`fetching details of user with ID: \${mockParams.id}\`;
  document.getElementById("params-out").innerText = greeting;
</script>`
    },
    {
        level: "Backend Level 3",
        title: "Express Query Params",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>req.query:</b> Stores key-value parameters passed after the query symbol (<code>?</code>) inside the URLs. Typically used for search, paging, and filters:</p>
                <ul>
                    <li>If URL is: <code>/search?name=ayush&age=21</code></li>
                    <li>Access keys: <code>const { name, age } = req.query;</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>req.query (Query Filters):</b></p>
                <ul>
                    <li>URL parameters jo question mark symbol (<code>?</code>) ke baad key-value inputs me aate hain (jaise search search filters).</li>
                    <li>URL link: <code>/user?name=ayush&age=21</code></li>
                    <li>Access code: <code>req.query.name</code> read karega <code>"ayush"</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="query-out"></div>
<script>
  // Mock query parsing
  const mockQuery = { name: "Aanya", age: "12" };
  const queryResult = \`Searching results for user: \${mockQuery.name} (Age: \${mockQuery.age})\`;
  document.getElementById("query-out").innerText = queryResult;
</script>`
    },
    {
        level: "Backend Level 4",
        title: "RESTful API Structure",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>A **RESTful API** (Representational State Transfer) is a standardized design architecture enabling applications to communicate over the web:</p>
                <ul>
                    <li>Uses standard HTTP requests (GET, POST, PUT, DELETE).</li>
                    <li>The client sends the data request, the server processes the database updates, and sends back responses, usually formatted as **JSON**.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>RESTful API structure standard:</b></p>
                <ul>
                    <li>REST APIs ke rules se apps aapas me talk karti hain.</li>
                    <li>Client parameters request bhejega, backend calculations perform karke client ko clean JSON response return karega.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 4",
        title: "CORS Security Policy",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>CORS (Cross-Origin Resource Sharing):</b> A browser security feature that blocks requests from different domains/ports unless allowed by the server:</p>
                <ul>
                    <li>Same-origin policy restricts cross-domain fetches.</li>
                    <li>To allow frontend requests (e.g. React running on port 5173 fetching Node running on port 4000), enable CORS middleware:
                        <br>Install: <code>npm install cors</code>
                        <br>Usage: <code>app.use(cors());</code>
                    </li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>CORS (Cross-Origin Resource Sharing) Security check:</b></p>
                <ul>
                    <li>Browser ka security safety check jo cross domain requests ko block karta hai (jaise local port 3000 ka page port 4000 par search call nahi chala sakta).</li>
                    <li>Is access block ko clear karne ke liye hum backend me cors libraries enable karte hain: <b><code>app.use(cors())</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 5",
        title: "Express Middlewares",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Middlewares</b> are functions executing sequentially before route handlers receive request details:</p>
                <ul>
                    <li>They inspect requests, parse bodies, log metrics, or verify authentication tokens.</li>
                    <li>Every middleware must call the <code>next()</code> callback to forward execution. If it is omitted, the request will hang permanently.</li>
                    <li>Types: Third Party (<code>cors()</code>), Built-in (<code>express.json()</code> to parse bodies), or Custom handlers.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>Express Middlewares concepts:</b></p>
                <ul>
                    <li>Middleware functions routes triggers hone se pehle triggers hoti hain request checking karne ke liye.</li>
                    <li>Har middleware me <b><code>next()</code></b> call chalana compulsory hai, warna request loading stage (hang state) me stuck rahegi.</li>
                    <li>Built-in types: <code>express.json()</code> payload parameters extract karne ke liye.</li>
                </ul>
            </div>
        `,
        sandboxCode: `<div id="middleware-out"></div>
<script>
  let logs = [];
  function customLogger(req, res, next) {
    logs.push("Log: request received for path " + req.path);
    next();
  }
  
  // Simulated request flow
  customLogger({ path: "/user" }, {}, () => {
    logs.push("Execution passed to route handler.");
  });
  
  document.getElementById("middleware-out").innerHTML = logs.join("<br>");
</script>`
    },
    {
        level: "Backend Level 5",
        title: "HTTP Status Codes",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Status codes indicate the semantic outcome of HTTP request cycles:</p>
                <ul>
                    <li><b>100 - 199:</b> Informational responses.</li>
                    <li><b>200 - 299:</b> Successful responses. (E.g. <code>200 OK</code>, <code>201 Created</code>).</li>
                    <li><b>300 - 399:</b> Redirection messages.</li>
                    <li><b>400 - 499:</b> Client error responses. (E.g. <code>400 Bad Request</code>, <code>404 Not Found</code>).</li>
                    <li><b>500 - 599:</b> Server error responses. (E.g. <code>500 Internal Server Error</code>).</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTTP Status Codes ke standard ranges:</p>
                <ul>
                    <li><b>2xx:</b> Success outcomes (jaise 200 standard output ya 201 data save).</li>
                    <li><b>4xx:</b> Client ki side se mistake (jaise 400 wrong payload data ya 404 incorrect URL paths).</li>
                    <li><b>5xx:</b> Backend crash exceptions server issues (jaise 500 server crash).</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 5",
        title: "HTTP Headers",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>HTTP Headers are key-value pairs used to pass metadata settings between client and server:</p>
                <ul>
                    <li><b>Request Headers:</b> Sent by client (User-Agent type, Authorization token). Access using <code>req.get("Header-Name")</code>.</li>
                    <li><b>Response Headers:</b> Sent by server (Content-Type, Custom cookie settings). Set using <code>res.set("Header", "Value")</code>.</li>
                    <li>Delete headers using <code>res.removeHeader("Header-Name")</code>.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>HTTP Headers values parameters:</p>
                <ul>
                    <li>Headers variables me metadata and configuration parameters shift hote hain.</li>
                    <li><b>Request Headers:</b> Client se milte hain, access command: <code>req.headers</code>.</li>
                    <li><b>Response Headers:</b> Server send karta hai, set command: <code>res.set()</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 6",
        title: "SQL vs NoSQL DB",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Databases store and retrieve persistent application records:</p>
                <ul>
                    <li><b>SQL Databases (MySQL, PostgreSQL):</b> Stores data inside strict, pre-defined schemas of tables (rows and columns).</li>
                    <li><b>NoSQL Databases (MongoDB):</b> Schema-less storage. Saves data inside flexible, JSON-like document lists.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>SQL vs NoSQL Databases comparison:</p>
                <ul>
                    <li><b>SQL DBs:</b> Strict, pre-defined table structural constraints me rows columns save hote hain.</li>
                    <li><b>NoSQL DBs (MongoDB):</b> Flexible, document-based schemas (JSON blocks lists format) me records data maintain karte hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 6",
        title: "Mongoose Schema & Models",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p><b>Mongoose</b> is a popular ODM (Object Data Modeling) library for MongoDB and Node.js:</p>
                <ul>
                    <li><b>Schema:</b> Defines structural shapes of documents in a collection. E.g. setting types of fields, required inputs, or unique settings.</li>
                    <li><b>Model:</b> Wrapper constructor compiled from Schema. It acts as the direct query interface to read/write records.</li>
                    <li>Command: <code>export const User = mongoose.model("User", userSchema);</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Mongoose Schema aur Models architecture:</p>
                <ul>
                    <li><b>Mongoose ODM:</b> JS models ke paths ko database structures me safe map karne ki tool engine.</li>
                    <li><b>Schema:</b> Document keys structure layout (validation rules, datatypes types).</li>
                    <li><b>Model:</b> Collection mapping object constructor jis par query commands execute hote hain.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 6",
        title: "CRUD Queries Syntax",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Standard query syntax for MongoDB Mongoose operations:</p>
                <ul>
                    <li><b>Create:</b> <code>User.create({ name: "Ayush", age: 21 })</code></li>
                    <li><b>Read:</b> <code>User.find()</code> (all), <code>User.findOne({ name: "Ayush" })</code> (first match), or <code>User.findById("id")</code></li>
                    <li><b>Update:</b> <code>User.updateOne({ name: "Ayush" }, { age: 22 })</code></li>
                    <li><b>Delete:</b> <code>User.deleteOne({ id: "1" })</code> or <code>User.deleteMany({ age: { $lt: 18 } })</code></li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>CRUD queries syntax aur operators list:</p>
                <ul>
                    <li><b>Create:</b> <code>User.create()</code> se database entry save hoti hai.</li>
                    <li><b>Read:</b> <code>User.find()</code> query matching database list fetches data.</li>
                    <li><b>Update:</b> <code>User.updateOne()</code> data property adjustments updates.</li>
                    <li><b>Delete:</b> <code>User.deleteOne()</code> remove criteria matches.</li>
                </ul>            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 7",
        title: "Auth Flow (JWT & Bcrypt)",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Security flow inside Web APIs:</p>
                <ul>
                    <li><b>Authentication:</b> Verifies user identity (SignUp and LogIn). Passwords must be hashed using <b>Bcrypt</b> before saving.</li>
                    <li><b>Authorization:</b> Checks permissions. Secure sessions are validated by generating a <b>JWT (JSON Web Token)</b> and saving it inside cookies.</li>
                    <li><b>Log Out:</b> Clears token cookie from browser state.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>User authentication process flow:</p>
                <ul>
                    <li><b>SignUp:</b> Password raw save nahi hota. use <b>Bcrypt</b> library se cryptographic hashes me encrypt karke hi database me save karte hain.</li>
                    <li><b>Login check:</b> Password compare matching hone par dynamic <b>JWT token</b> create karke browser cookies me save kar diya jata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },
    {
        level: "Backend Level 7",
        title: "Multer & Cloudinary Upload",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>File and Profile picture upload sequence:</p>
                <ul>
                    <li><b>Multer:</b> Node middleware that processes multipart/form-data file uploads and saves files locally temporarily.</li>
                    <li><b>Cloudinary:</b> Cloud media storage provider. We upload local media files to Cloudinary and retrieve secure URLs: <code>result.secure_url</code>.</li>
                    <li>Once uploaded, the local temp file is deleted to preserve server disk space.</li>
                </ul>
            </div>
            
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Profile images upload sequence:</p>
                <ul>
                    <li><b>Multer:</b> User device se upload kiye image payloads read karta hai aur local disk par temp store karta hai.</li>
                    <li><b>Cloudinary:</b> Multi-cloud media storage par send karke unique secure picture link return kar deta hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    }
,

    {
        level: "Adv Advanced Backend Level 0",
        title: "Advanced",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Advanced</li><li>BACKEND</li><li>AI</li><li>Full Course</li><li>codewith_ai</li><li>System Design</li><li>Microservices</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv In This Course Level 0",
        title: "Part 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>In This Course</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Part 2</li><li>Project</li><li>Level 4 – AI Full Course</li><li>LLM</li><li>Langchain</li><li>LangGraph</li><li>RAG</li><li>Vector DB</li><li>Level 5 – Cloud Deployment</li><li>AWS</li><li>CI/CD Pipeline</li><li>Level 0– Basic Backend Revision</li><li>Level 1 – Docker</li><li>introduction</li><li>Images & Containers</li><li>How to Dockerize a node Application</li><li>Port Mapping</li><li>Docker Compose</li><li>Docker Networking</li><li>Docker Volumes</li><li>Level 2 – Redis</li><li>introduction</li><li>API Caching</li><li>Rate Limiting</li><li>Message Queue</li><li>Level 3 – System Design</li><li>introduction</li><li>Scaling Concepts</li><li>Nginx</li><li>Microservices</li><li>Database Scaling ( Replication , sharding )</li><li>Part 1</li></ul>
            </div>
            
    `,
        sandboxCode: "// Node dependency setup\nnpm install express dotenv"
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "“Pay what you think this course ...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>“Pay what you think this course deserves” 💙</li><li>codewith_ai</li><li>Agar aapko ye course valuable laga ho, to aap apni marzi se</li><li>upport kar sakte ho ❤️</li><li>Amount completely aapke upar hai — ₹1 se lekar jitna aapko</li><li>ahi lage utna.</li><li>Bas agar course ne genuinely help kiya ho, to at least ₹50</li><li>upport kar dena 🙌</li><li>Isse aur free & quality content banane me help milegi.</li><li>Scan QR or Support via Link in Description</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL</li><li>0</li><li>Basic Backend Revision</li><li>codewith_ai</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Basic Backend Revision Level 0",
        title: "Slide 5",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Basic Backend Revision</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Basic Backend Revision Level 0",
        title: "Watch this for",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Basic Backend Revision</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Watch this for</li><li>Node js , express , mongodb</li><li>, authentication and more</li><li>codewith_ai</li></ul>
            </div>
            
    `,
        sandboxCode: "// Node dependency setup\nnpm install express dotenv"
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL 1",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 1</li><li>codewith_ai</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Maan lo tumne ek backend project",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Maan lo tumne ek backend project</li><li>banaya.</li><li>Tumhare laptop me:</li><li>Node.js installed</li><li>MongoDB installed</li><li>sab versions correct</li><li>Project perfectly chal raha hai.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Ab Friend Ko",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Ab Friend Ko</li><li>Project Diya</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Bhai project",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Bhai project</li><li>chal nahi raha</li><li>Mere system</li><li>me toh chal</li><li>raha hai</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Why?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Why?</li><li>Kyuki uske system me:</li><li>Node version different</li><li>Mongo install nahi</li><li>Environment variables missing</li><li>Ye Problem Industry Me Bahut Hoti Thi</li><li>Isko bolte hain:</li><li>“Works On My Machine Problem”</li></ul>
            </div>
            
    `,
        sandboxCode: "// Node dependency setup\nnpm install express dotenv"
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Ye Problem Solve Karta Hai",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Ye Problem Solve Karta Hai</li><li>Docker application ko ek box/container me pack kar deta</li><li>hai.</li><li>Us box ke andar:</li><li>app</li><li>node</li><li>packages</li><li>dependencies</li><li>configs</li><li>ab hota hai.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Real Life Example — Tiffin Box",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Real Life Example — Tiffin Box</li><li>Without Docker</li><li>Food alag</li><li>Sabzi alag</li><li>Roti alag</li><li>Spill ho sakta hai</li><li>With Docker</li><li>Sab ek tiffin box me packed</li><li>Safe</li><li>Portable</li><li>Easy</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker = Shipping Container",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker = Shipping Container</li><li>Real world shipping containers dekhe honge.</li><li>Truck , Ship , Train</li><li>Sab same container use karte hain.</li><li>Inside kya hai doesn't matter.</li><li>Docker Bhi Same Kaam Karta Hai</li><li>App + Dependencies</li><li>↓</li><li>Docker Container</li><li>↓</li><li>Runs Everywhere</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Ka Main Goal",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Ka Main Goal</li><li>“Run Anywhere”</li><li>Chahe:</li><li>Windows</li><li>Linux</li><li>Mac</li><li>AWS Server</li><li>ame chalega.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Why Companies Love Docker?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Why Companies Love Docker?</li><li>Companies like:</li><li>Netflix</li><li>Uber</li><li>Spotify</li><li>use Docker because:</li><li>easy deployment</li><li>calable</li><li>consistent environments</li><li>microservices friendly</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Images and Containers :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Images and Containers :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Images and Containers :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Images and Containers :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Slide 19",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Simple Docker Commands",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Simple Docker Commands</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Simple Docker Commands",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Simple Docker Commands</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "How Docker Works..?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How Docker Works..?</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "How Docker Works..?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How Docker Works..?</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "How Docker Works..?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How Docker Works..?</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "How to Dockerize Node Application -",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Dockerize Node Application -</li></ul>
            </div>
            
    `,
        sandboxCode: "// Node dependency setup\nnpm install express dotenv"
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Dockerfile -",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Dockerfile -</li><li>Dockerfile is a text file containing instructions to</li><li>build a Docker image</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Flow of Dockerfile -",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Flow of Dockerfile -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Dockerfile to Docker Image conve...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Dockerfile to Docker Image conversion -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Dockerfile to Docker Image conve...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Dockerfile to Docker Image conversion -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Port Mapping -",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Port Mapping -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Port Mapping -",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Port Mapping -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Add Environment Variable in run ...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Add Environment Variable in run time -</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "How to Push custom Image on Dock...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Push custom Image on Docker Hub:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Compose:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Compose:</li><li>Docker Compose is a tool used to run multiple Docker containers</li><li>together using one file and one command.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Compose:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Compose:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Networking :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Networking :</li><li>Docker network allows containers to</li><li>communicate with each other.</li></ul>
            </div>
            
            <div class="architecture-diagram-container">
                <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.75rem; text-align: center;">🐳 Docker Bridge Networking Mode</div>
                <div class="diagram-flex">
                    <div class="diagram-node active-glow">Container A (Node API)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node">Docker Bridge (docker0)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">Container B (MongoDB)</div>
                </div>
            </div>
        
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Networking :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Networking :</li></ul>
            </div>
            
            <div class="architecture-diagram-container">
                <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.75rem; text-align: center;">🐳 Docker Bridge Networking Mode</div>
                <div class="diagram-flex">
                    <div class="diagram-node active-glow">Container A (Node API)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node">Docker Bridge (docker0)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">Container B (MongoDB)</div>
                </div>
            </div>
        
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Networking :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Networking :</li></ul>
            </div>
            
            <div class="architecture-diagram-container">
                <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.75rem; text-align: center;">🐳 Docker Bridge Networking Mode</div>
                <div class="diagram-flex">
                    <div class="diagram-node active-glow">Container A (Node API)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node">Docker Bridge (docker0)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">Container B (MongoDB)</div>
                </div>
            </div>
        
    `,
        sandboxCode: ""
    },

    {
        level: "Adv DOCKER Level 1",
        title: "Docker Volumes :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>DOCKER</b> (Level 1), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Docker Volumes :</li><li>Docker volumes store data permanently outside containers</li><li>o data remains safe even if containers are deleted or</li><li>restarted.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 2</li><li>codewith_ai</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Redis Definition",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Redis Definition</li><li>Redis is an in-memory key-value database used for super fast</li><li>data access.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Redis Definition",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Redis Definition</li><li>Redis is an in-memory key-value database used for super fast</li><li>data access.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 43",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 44",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 45",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 46",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 47",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 48",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "API Caching:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>API Caching:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "OTP Storage:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>OTP Storage:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Sessions:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Sessions:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Rate Limiting :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Rate Limiting :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 53",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 54",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 55",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 56",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Queues:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Queues:</li><li>Queue ek waiting line hoti hai jisme backend tasks store hote</li><li>hain taaki unhe background me process kiya ja sake bina user</li><li>ko wait karaye.</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 58",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Slide 59",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Welcome to codewith_ai Advanced Backend section.</p>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "BullMQ ek Redis-based queue mana...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>BullMQ ek Redis-based queue management library hai jo</li><li>background jobs handle karti hai.</li><li>BullMQ:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "BullMQ:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>BullMQ:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "queue.js:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>queue.js:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "worker.js:",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>worker.js:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Redis Level 2",
        title: "Add job in queue :",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Redis</b> (Level 2), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Add job in queue :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL 3",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 3</li><li>codewith_ai</li><li>System Design</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>1. System Design:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Scaling Concepts :</li><li>100 users server</li><li>No Issues</li><li>1 million users server</li><li>Server Crashed</li><li>Scaling Needed</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Load</li><li>Balancer</li><li>users</li><li>Server 1</li><li>Server 2</li><li>Server 3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Load Balancer :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Load Balancer :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Nginx :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>2. Monolith and Microservices :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>Monolith and Microservices :</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li><li>3. Database Scaling:</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "System design",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>System design</li><li>3</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Advanced",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Advanced</li><li>BACKEND</li><li>AI</li><li>Full Course</li><li>codewith_ai</li><li>PART 2</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv In This Course Level 0",
        title: "Part 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>In This Course</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Part 2</li><li>Project</li><li>Level 4 – AI Full Course</li><li>LLM</li><li>Langchain</li><li>LangGraph</li><li>RAG</li><li>Vector DB</li><li>Level 5 – Cloud Deployment</li><li>AWS</li><li>CI/CD Pipeline</li><li>Level 0– Basic Backend Revision</li><li>Level 1 – Docker</li><li>introduction</li><li>Images & Containers</li><li>How to Dockerize a node Application</li><li>Port Mapping</li><li>Docker Compose</li><li>Docker Networking</li><li>Docker Volumes</li><li>Level 2 – Redis</li><li>introduction</li><li>API Caching</li><li>Rate Limiting</li><li>Message Queue</li><li>Level 3 – System Design</li><li>introduction</li><li>Scaling Concepts</li><li>Nginx</li><li>Microservices</li><li>Database Scaling ( Replication , sharding )</li><li>Part 1</li></ul>
            </div>
            
    `,
        sandboxCode: "// Node dependency setup\nnpm install express dotenv"
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "“Pay what you think this course ...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>“Pay what you think this course deserves” 💙</li><li>codewith_ai</li><li>Agar aapko ye course valuable laga ho, to aap apni marzi se</li><li>upport kar sakte ho ❤️</li><li>Amount completely aapke upar hai — ₹1 se lekar jitna aapko</li><li>ahi lage utna.</li><li>Bas agar course ne genuinely help kiya ho, to at least ₹50</li><li>upport kar dena 🙌</li><li>Isse aur free & quality content banane me help milegi.</li><li>Scan QR or Support via Link in Description</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL</li><li>4</li><li>codewith_ai</li><li>AI Full Course</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "AI  Full Course",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>AI  Full Course</li><li>4</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "LEVEL 5",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 5</li><li>codewith_ai</li><li>Cloud Deployment</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "Adv Advanced Backend Level 0",
        title: "Cloud Deployment",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>Advanced Backend</b> (Level 0), we explore key concepts to scale and automate our backend infrastructure.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Cloud Deployment</li><li>5</li></ul>
            </div>
            
    `,
        sandboxCode: ""
    },

    {
        level: "VPS Hosting",
        title: "MERN Stack VPS Deployment",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Welcome to the <b>Hostinger VPS MERN Deployment Guide</b> by <b>codewith_ai</b>! In this module, we will learn how to host a complete production MERN Stack application (React frontend + Express Node.js backend + MongoDB database) on a live Virtual Private Server (VPS).</p>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p><b>codewith_ai</b> ke VPS hosting guide me swagat hai! Is course me hum seekhenge ki kaise ek complete MERN stack website ko live internet par <b>Hostinger VPS</b> server par run aur deploy kiya jata hai.</p>
            </div>
        `,
        sandboxCode: ""
    },

    {
        level: "VPS Hosting",
        title: "Architecture Overview",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Understand the standard production request routing architecture:</p>
                <ul>
                    <li>Client queries domain URL (<code>yourdomain.com</code>).</li>
                    <li>Nginx receives the request on ports 80/443 and acts as a reverse proxy.</li>
                    <li>Nginx forwards static frontend file assets from directories and routes API calls to the PM2 Node.js process running locally.</li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>MERN stack deployment ka standard design block:</p>
                <ul>
                    <li>User website domain open karega -> request <b>Nginx reverse proxy</b> par aayegi.</li>
                    <li>Nginx frontend requests ko static dist files show karega aur API endpoints (\`/api\`) requests ko local port 4000 par running backend code ko divert karega.</li>
                </ul>
            </div>
            <!-- Animated architecture flow chart -->
            <div class="architecture-diagram-container">
                <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.75rem; text-align: center;">🌐 VPS Traffic Routing Flow Diagram</div>
                <div class="diagram-flex">
                    <div class="diagram-node">Domain Name</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">Nginx Server</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">PM2 (Node Express)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node">MongoDB</div>
                </div>
            </div>
        `,
        sandboxCode: ""
    },

    {
        level: "VPS Hosting",
        title: "Preparing VPS Environment",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>First, log in to your Linux server machine remotely using SSH terminal protocols and install system upgrades:</p>
                <ul>
                    <li>Terminal login command: <code>ssh root@your_vps_ip</code></li>
                    <li>Update system repository: <code>sudo apt update && sudo apt upgrade -y</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>VPS server me SSH se login aur upgrades trigger karna:</p>
                <ul>
                    <li>Apne terminal se type karein: <b><code>ssh root@your_vps_ip</code></b> (apne server ka actual IP address likhein).</li>
                    <li>System repositories update karne ke liye run: <b><code>sudo apt update && sudo apt upgrade -y</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: "ssh root@187.124.98.219\nsudo apt update && sudo apt upgrade -y"
    },

    {
        level: "VPS Hosting",
        title: "Installing Node & Git",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Install Node Version Manager (NVM) to fetch Node.js runtime and setup git:</p>
                <ul>
                    <li>Install NVM tool: <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash</code></li>
                    <li>Install Node.js version 22: <code>nvm install 22</code></li>
                    <li>Install Git versioning tool: <code>sudo apt install -y git</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>NVM, Node runtime, aur Git installation command steps:</p>
                <ul>
                    <li>NVM tool install karne ke liye curl curl command run karein.</li>
                    <li>NVM installation confirm hone ke baad run: <b><code>nvm install 22</code></b>.</li>
                    <li>Github repositories fetch download ke liye run: <b><code>sudo apt install -y git</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: "nvm install 22\nnode -v\nsudo apt install -y git"
    },

    {
        level: "VPS Hosting",
        title: "Setting Up MongoDB",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>We configure database connections inside our MERN stack. We have two options:</p>
                <ul>
                    <li><b>Option 1: MongoDB Atlas (Recommended):</b> Serverless cloud DB, zero server maintenance overhead.</li>
                    <li><b>Option 2: Install MongoDB locally on VPS:</b>
                        <br>Command: <code>sudo apt install mongodb</code>
                        <br>Start service: <code>sudo systemctl start mongodb</code>
                    </li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>MongoDB Database setup karne ke two choices:</p>
                <ul>
                    <li><b>Option 1: MongoDB Atlas:</b> Online database cluster connection uri config use karna (easy standard way).</li>
                    <li><b>Option 2: Local Install on VPS:</b> Ubuntu package install systemctl command triggers list database configuration.</li>
                </ul>
            </div>
        `,
        sandboxCode: "sudo apt install mongodb\nsudo systemctl start mongodb\nsudo systemctl enable mongodb"
    },

    {
        level: "VPS Hosting",
        title: "Deploying Express Backend",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Fetch backend server codes and setup env variables:</p>
                <ul>
                    <li>Create standard web directory: <code>mkdir /var/www && cd /var/www</code></li>
                    <li>Clone git repository: <code>git clone https://github.com/username/repo.git</code></li>
                    <li>Setup environment keys inside <code>.env</code> file (PORT, MONGO_URI, JWT_SECRET).</li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Node JS backend code directories structure configuration:</p>
                <ul>
                    <li>Web apps hosting directory create karein: <b>\`/var/www\`</b>.</li>
                    <li>Git clone command se code import karein, <code>npm install</code> run karein.</li>
                    <li><code>nano .env</code> se database environment connections keys save configuration set karein.</li>
                </ul>
            </div>
        `,
        sandboxCode: "mkdir /var/www && cd /var/www\ngit clone https://github.com/your-username/repo.git\ncd repo/backend && npm install"
    },

    {
        level: "VPS Hosting",
        title: "PM2 & Startup Configs",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>PM2 is a production process manager for Node.js applications with a built-in load balancer. It keeps application servers active permanently:</p>
                <ul>
                    <li>Install globally: <code>npm install -g pm2</code></li>
                    <li>Start backend process: <code>pm2 start server.js --name "api-backend"</code></li>
                    <li>Configure startup script: <code>pm2 startup</code> and save config: <code>pm2 save</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>PM2 Process Manager runtime daemon configurations:</p>
                <ul>
                    <li>PM2 process manager background daemon server launch system install.</li>
                    <li>Backend process boot command: <b><code>pm2 start server.js --name project-backend</code></b>.</li>
                    <li>Reboot system safety configuration sets: <b><code>pm2 startup && pm2 save</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: "npm install -g pm2\npm2 start server.js --name my-app-backend\npm2 startup\npm2 save"
    },

    {
        level: "VPS Hosting",
        title: "Deploying React Frontend",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>React codes must be compiled into optimized static HTML/CSS/JS assets before distribution:</p>
                <ul>
                    <li>Navigate to React directory: <code>cd /var/www/repo/frontend</code></li>
                    <li>Trigger compiler command: <code>npm run build</code></li>
                    <li>This outputs static files inside the <code>dist</code> (or <code>build</code>) output folder.</li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>React static build generation steps:</p>
                <ul>
                    <li>React project frontend directory folder me parameters open triggers code.</li>
                    <li>Build compilation run check trigger: <b><code>npm run build</code></b>.</li>
                    <li>Isse static optimized page assets \`dist/\` or \`build/\` folder generate ho jata hai.</li>
                </ul>
            </div>
        `,
        sandboxCode: "cd ../frontend\nnpm install\nnpm run build"
    },

    {
        level: "VPS Hosting",
        title: "Installing Nginx",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Nginx acts as our high-performance HTTP web server and reverse proxy:</p>
                <ul>
                    <li>Install Nginx server: <code>sudo apt install -y nginx</code></li>
                    <li>Verify running status: <code>systemctl status nginx</code></li>
                    <li>Allow firewall rules: <code>sudo ufw allow 'Nginx Full'</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Nginx static server installation:
                    <ul>
                        <li>Server package installation: <b><code>sudo apt install -y nginx</code></b>.</li>
                        <li>Firewall port access configuration enable: <b><code>sudo ufw allow 'Nginx Full'</code></b>.</li>
                    </ul>
                </p>
            </div>
        `,
        sandboxCode: "sudo apt install -y nginx\nsystemctl status nginx\nsudo ufw allow 'Nginx Full'"
    },

    {
        level: "VPS Hosting",
        title: "Nginx Routing Configs",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Write virtual server configuration inside <code>/etc/nginx/sites-available/yourdomain.conf</code>:</p>
                <pre>server {
    listen 80;
    server_name yourdomain.com;
    location / {
        root /var/www/repo/frontend/dist;
        try_files $uri /index.html;
    }
}</pre>
                <p>Link config to sites-enabled: <code>ln -s /etc/nginx/sites-available/domain.conf /etc/nginx/sites-enabled/</code></p>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Nginx reverse proxy configurations files setting:</p>
                <ul>
                    <li>\`/etc/nginx/sites-available/yourdomain.com.conf\` file me server configuration inputs block set update check rules apply settings parameter.</li>
                </ul>
            </div>
            <!-- Animated Nginx routing flowchart -->
            <div class="architecture-diagram-container">
                <div style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.75rem; text-align: center;">⚡ Nginx Route Redirection Mapping</div>
                <div class="diagram-flex">
                    <div class="diagram-node">Port 80/443 (HTTP/S)</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node active-glow">Nginx Router</div>
                    <div class="diagram-arrow"><div class="diagram-packet"></div></div>
                    <div class="diagram-node">Proxy Pass (Port 4000)</div>
                </div>
            </div>
        `,
        sandboxCode: "sudo nano /etc/nginx/sites-available/yourdomain.conf\nsudo nginx -t\nsudo systemctl restart nginx"
    },

    {
        level: "VPS Hosting",
        title: "Domain DNS Mapping",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Connect your domain name to the VPS IP address inside DNS Domain Management Console (Namecheap, GoDaddy):</p>
                <ul>
                    <li>Add <b>A Record</b> with host <code>@</code> mapping to <code>VPS_IP_Address</code>.</li>
                    <li>Add <b>A Record</b> with host <code>api</code> (or subdomains) mapping to <code>VPS_IP_Address</code>.</li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Domain DNS settings point configuration parameters:</p>
                <ul>
                    <li>Apne domain manager panel me DNS configuration me target <b>A record</b> insert karein.</li>
                    <li>Host \`@\` aur host \`api\` values mapping target IP address par mapping configure karein.</li>
                </ul>
            </div>
        `,
        sandboxCode: ""
    },

    {
        level: "VPS Hosting",
        title: "SSL HTTPS Setup",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Secure web request transactions with Let's Encrypt SSL certificates using Certbot:</p>
                <ul>
                    <li>Install Certbot client: <code>sudo apt install -y certbot python3-certbot-nginx</code></li>
                    <li>Generate and bind certificates: <code>certbot --nginx -d yourdomain.com -d api.yourdomain.com</code></li>
                    <li>Verify auto-renewal: <code>certbot renew --dry-run</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Certbot certificate creation ssl configuration maps:</p>
                <ul>
                    <li>Let's Encrypt dynamic SSL certificates request code run: <b><code>sudo certbot --nginx</code></b>.</li>
                    <li>Test auto-renewal config checks: <b><code>certbot renew --dry-run</code></b>.</li>
                </ul>
            </div>
        `,
        sandboxCode: "sudo apt install -y certbot python3-certbot-nginx\nsudo certbot --nginx -d yourdomain.com"
    },

    {
        level: "VPS Hosting",
        title: "Production CLI Commands",
        content: `
            <div class="english-explanation">
                <div class="english-header">🇬🇧 English Explanation</div>
                <p>Master these core CLI helper scripts inside active servers production operations:</p>
                <ul>
                    <li>PM2 process checks: <code>pm2 status</code> / <code>pm2 restart all</code> / <code>pm2 logs</code></li>
                    <li>Nginx configuration checker: <code>nginx -t</code></li>
                    <li>Nginx restart command: <code>systemctl restart nginx</code></li>
                </ul>
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <p>Production server command checks list:</p>
                <ul>
                    <li>Backend restart checks: <code>pm2 restart project-backend</code>.</li>
                    <li>Nginx web configuration check updates run command: <code>nginx -t</code>.</li>
                </ul>
            </div>
        `,
        sandboxCode: "pm2 list\npm2 logs\nsudo nginx -t\nsudo systemctl restart nginx"
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "WITH PROJECT",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>WITH PROJECT</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Prerequisites for this video",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Prerequisites for this video</li><li>HTML & CSS</li><li>Java Scrip</li><li>t</li><li>React Js</li><li>Mongo DB</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL 1",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 1</li><li>INTRODUCTION TO NEXT JS</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "INTRODUCTION TO NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>INTRODUCTION TO NEXT JS</li><li>WHAT IS NEXT JS ?</li><li>Next.js is a React-based open-source web framework that enables developers</li><li>to build fast, scalable, and SEO-friendly web applications with features like</li><li>erver-side rendering (SSR), static site generation (SSG), API routes, and built-in</li><li>optimization for performance and routing.</li><li>✨ In short: It’s React, but with superpowers like SSR, SSG, routing, and full-stack</li><li>capabilities.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 2</li><li>App Router</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Introduction to App Router</li><li>Next.js uses file-system routing, which means the routes in your</li><li>application are determined by how you structure your files.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "INTRODUCTION TO NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>INTRODUCTION TO NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Nested Routes</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Dynamic Routes</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Dynamic Route Segment</li><li>A Dynamic Segment can be created by wrapping a folder's</li><li>name in square brackets: [folderName]. For example, a blog</li><li>could include the following</li><li>route app/blog/[slug]/page.js where [slug] is the Dynamic</li><li>Segment for blog posts.</li><li>Since the params prop is a promise. You must</li><li>use async/await or React's use function to access the values.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Catch-all Segments</li><li>Dynamic Segments can be extended to catch-all subsequent</li><li>egments by adding an ellipsis inside the</li><li>brackets [...folderName].</li><li>For example, app/shop/[...slug]/page.js will</li><li>match /shop/clothes, but</li><li>also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Optional Catch-all Segments</li><li>Catch-all Segments can be made optional by including the</li><li>parameter in double square brackets:[[...folderName]].</li><li>For example, app/shop/[[...slug]]/page.js will also match /shop,</li><li>in addition</li><li>to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-</li><li>hirts.</li><li>The difference between catch-all and optional catch-</li><li>all segments is that with optional, the route without the</li><li>parameter is also matched (/shop in the example above).</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Optional Catch-all Segments</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Routes Group</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Parallel Routes</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Parallel Routes</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "App Router",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>App Router</li><li>Note</li><li>In next js , every page is server component so</li><li>if you want to use hooks ( useState…. etc)  ,</li><li>you have to write</li><li>‘use client’</li><li>at the top of</li><li>the page.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL 3",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 3</li><li>Navigation , Image & Font in Next JS</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Navigation in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Navigation in Next JS</li><li>There are two methods of Navigation in Next JS</li><li>Navigation , Image & Font in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Navigation , Image & Font in Nex...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Navigation , Image & Font in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Navigation , Image & Font in Nex...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Navigation , Image & Font in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Navigation , Image & Font in Nex...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Navigation , Image & Font in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Image Optimization",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Image Optimization</li><li>Automatically resizes, compresses, and serves images in modern</li><li>formats (like WebP/AVIF) for faster loading and better performance.</li><li>Navigation , Image & Font in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Reduces font file size by includ...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Reduces font file size by including only needed characters (subsets) and</li><li>preloading them for faster page rendering and minimal layout shifts.</li><li>Navigation , Image & Font in Next JS</li><li>Font Optimization</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Build a simple  Travel Guide web...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Build a simple  Travel Guide website using next JS -</li><li>Practice Project 1</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Build a simple  Travel Guide web...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Build a simple  Travel Guide website using next JS -</li><li>Practice Project 1</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Build a simple  Travel Guide web...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Build a simple  Travel Guide website using next JS -</li><li>Practice Project 1</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Build a simple  Travel Guide web...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Build a simple  Travel Guide website using next JS -</li><li>Practice Project 1</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL</li><li>4</li><li>Typescript Tutorial</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "What is TypeScript ?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>What is TypeScript ?</li><li>Typescript Tutorial</li><li>TypeScript is a strongly typed, object-oriented, compiled programming language</li><li>developed by Microsoft.</li><li>It is a superset of JavaScript, meaning that all valid JavaScript code is also valid</li><li>TypeScript code.</li><li>The primary addition TypeScript brings to JavaScript is static typing, allowing</li><li>developers to define the types of variables, function parameters, and return</li><li>values.</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Basic Types",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Basic Types</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Arrays & Tuples",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Arrays & Tuples</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Functions",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Functions</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Type Declaration & Type Inference",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Type Declaration & Type Inference</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: "// TypeScript Types\ninterface Student {\n  name: string;\n  age: number;\n}"
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Type Aliases",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Type Aliases</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: "// TypeScript Types\ninterface Student {\n  name: string;\n  age: number;\n}"
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Interfaces",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Interfaces</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: "// TypeScript Types\ninterface Student {\n  name: string;\n  age: number;\n}"
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Difference b/w Type & Interface",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Difference b/w Type & Interface</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: "// TypeScript Types\ninterface Student {\n  name: string;\n  age: number;\n}"
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Union & Intersection",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Union & Intersection</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Generics",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Generics</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Global Declaration",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Global Declaration</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "React with TS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>React with TS</li><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Typescript Tutorial",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Typescript Tutorial",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Typescript Tutorial</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL 5",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 5</li><li>API Routes In NEXT JS</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "API Routes in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>API Routes in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "API Routes in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>API Routes in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "API Routes in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>API Routes in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "API Routes in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>API Routes in Next JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS NEXT JS Level 1",
        title: "LEVEL 6",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>NEXT JS</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>LEVEL 6</li><li>Data Fetching in NEXT JS</li><li>codewith_ai</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Data Fetching in NEXT JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Data Fetching in NEXT JS</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Build a Full Stack Next JS App i...",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Build a Full Stack Next JS App in which –</li><li>Use MongoDB Atlas</li><li>Authentication Using Next Auth</li><li>Image Upload Using Cloudinary</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "MongoDB Atlas",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>MongoDB Atlas</li><li>Important Note for Creating Model-</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: "// Next.js Component sample\nimport Link from 'next/link';\n\nexport default function Home() {\n  return <Link href=\"/about\">About Us</Link>;\n}"
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "MongoDB Atlas",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>MongoDB Atlas</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "MongoDB Atlas",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>MongoDB Atlas</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "MongoDB Atlas",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>MongoDB Atlas</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "MongoDB Atlas",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>MongoDB Atlas</li><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "How to Connect MongoDb in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "How to Connect MongoDb in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "How to Connect MongoDb in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "How to Connect MongoDb in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "How to Connect MongoDb in Next JS",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>How to Connect MongoDb in Next JS</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Authentication Using Next Auth",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Authentication Using Next Auth</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Authentication Using Next Auth",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Authentication Using Next Auth</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Authentication Using Next Auth",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Authentication Using Next Auth</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Authentication Using Next Auth",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Authentication Using Next Auth</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Authentication Using Next Auth",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Authentication Using Next Auth</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "What we write in authOptions ?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>What we write in authOptions ?</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "What we write in authOptions ?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>What we write in authOptions ?</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "What we write in authOptions ?",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>What we write in authOptions ?</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "1. Providers option",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>1. Providers option</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "1. Providers option",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>1. Providers option</li><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li><li>JWT Callback</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li><li>JWT Callback</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li><li>ession Callback</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li><li>ummary</li></ul>
            </div>
    `,
        sandboxCode: ""
    },

    {
        level: "NextJS codewith_ai Level 1",
        title: "Practice Project 2",
        content: `
            <div class="english-explanation">
                
        <div class="english-header">🇬🇧 English Explanation</div>
        <p>In this slide of <b>codewith_ai</b> (Level 1), we explore standard React frameworks capabilities built dynamically by Next.js.</p>
        <p>Follow the list points inside the Hinglish explanation below for structured explanation context.</p>
    
            </div>
            <div class="hinglish-explanation">
                <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                <ul><li>Practice Project 2</li><li>ummary</li></ul>
            </div>
    `,
        sandboxCode: ""
    }
];

/* Inject style tag dynamically for checkmarks & theme custom styling */
const checkStyle = document.createElement('style');
checkStyle.innerHTML = `
    .slide-link.completed {
        color: #10b981 !important;
        font-weight: 700;
    }
    .slide-link.completed::before {
        content: '✓ ';
    }
    
    /* Cyberpunk Theme variables */
    body[data-theme="cyberpunk"] {
        --bg-primary: #040113;
        --bg-secondary: #0c0228;
        --bg-sidebar: #050117;
        --text-main: #00ffcc;
        --text-muted: #ff007f;
        --accent-blue: #00ffcc;
        --accent-pink: #ff007f;
        --border-glass: 1px solid rgba(0, 255, 204, 0.25);
        background: radial-gradient(circle, #0e0238 0%, #040113 100%) !important;
        color: #00ffcc !important;
    }
    body[data-theme="cyberpunk"] .glass {
        background: rgba(12, 2, 40, 0.7) !important;
        border: 1px solid rgba(0, 255, 204, 0.3) !important;
        box-shadow: 0 0 15px rgba(0, 255, 204, 0.2) !important;
    }
    body[data-theme="cyberpunk"] .sidebar {
        border-right: 2px solid #ff007f !important;
    }
    body[data-theme="cyberpunk"] .btn-primary {
        background: linear-gradient(135deg, #ff007f 0%, #00ffcc 100%) !important;
        border: none !important;
        color: #000000 !important;
        font-weight: 800 !important;
        box-shadow: 0 0 10px rgba(255, 0, 127, 0.5) !important;
    }
    body[data-theme="cyberpunk"] .accordion-header {
        border-bottom-color: rgba(255, 0, 127, 0.2) !important;
    }
    
    /* Nord Theme variables */
    body[data-theme="nord"] {
        --bg-primary: #2e3440;
        --bg-secondary: #3b4252;
        --bg-sidebar: #242933;
        --text-main: #eceff4;
        --text-muted: #d8dee9;
        --accent-blue: #88c0d0;
        --accent-pink: #b48ead;
        --border-glass: 1px solid rgba(136, 192, 208, 0.2);
        background: #2e3440 !important;
        color: #eceff4 !important;
    }
    body[data-theme="nord"] .glass {
        background: rgba(59, 66, 82, 0.8) !important;
        border: 1px solid rgba(136, 192, 208, 0.2) !important;
    }
    body[data-theme="nord"] .btn-primary {
        background: #88c0d0 !important;
        border-color: #81a1c1 !important;
        color: #2e3440 !important;
    }
    
    /* Streaks grid styling */
    .heatmap-cell {
        width: 15px;
        height: 15px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.05);
        transition: background 0.2s;
    }
    body[data-theme="light"] .heatmap-cell {
        background: rgba(0, 0, 0, 0.08);
    }
    .heatmap-cell.lvl-1 { background: rgba(16, 185, 129, 0.25) !important; }
    .heatmap-cell.lvl-2 { background: rgba(16, 185, 129, 0.5) !important; }
    .heatmap-cell.lvl-3 { background: rgba(16, 185, 129, 0.75) !important; }
    .heatmap-cell.lvl-4 { background: rgba(16, 185, 129, 1) !important; }
`;
document.head.appendChild(checkStyle);

/* Application States */
let currentSlideIndex = 0;
let completedSlides = {};
let customCourses = JSON.parse(localStorage.getItem('codewith_ai_custom_courses') || '[]');
let savedSnippets = JSON.parse(localStorage.getItem('codewith_ai_snippets') || '[]');
let slideNotes = {};
let activityLog = {};

/* Gamification metrics */
let studentXP = 0;
let studentLevel = 1;

/* Speech synthesis states */
let synth = window.speechSynthesis;
let speechUtterance = null;
let isSpeaking = false;

/* Coding Challenges Database mapping to Practice slides */
const codingChallengesDB = {
    25: { title: "Challenge 1: HTML Heading", desc: "Write an &lt;h1&gt; tag containing precisely the text: 'codewith_ai'", assertFn: (doc) => doc.querySelector('h1')?.innerText.trim() === "codewith_ai" },
    65: { title: "Challenge 2: CSS Background", desc: "Write a styled &lt;div class='box'&gt;&lt;/div&gt; with CSS rule '.box { background-color: purple; }'", assertFn: (doc) => {
        const b = doc.querySelector('.box');
        if (!b) return false;
        const style = doc.defaultView.getComputedStyle(b);
        return style.backgroundColor === "rgb(128, 0, 128)" || style.backgroundColor === "purple";
    }},
    103: { title: "Challenge 3: JS Add Function", desc: "Write a function 'sum(a, b) { return a + b; }' inside a &lt;script&gt; tag.", assertFn: (doc) => {
        const win = doc.defaultView;
        return typeof win.sum === "function" && win.sum(4, 5) === 9;
    }},
    120: { title: "Challenge 4: React Elements Rendering", desc: "Write a component that renders an image with source 'logo.jpg'.", assertFn: (doc) => !!doc.querySelector('img[src*="logo"]') },
    142: { title: "Challenge 5: Backend API Routes", desc: "Write a fetch statement querying endpoint '/api/user'.", assertFn: (doc) => doc.body.innerHTML.includes('/api/user') },
    266: { title: "Challenge 6: Docker Ports Mapping", desc: "Execute command to map host port 8080 to container port 3000.", assertFn: (doc) => doc.body.innerHTML.includes('8080:3000') },
    279: { title: "Challenge 7: PM2 Service Startup", desc: "Write command to save PM2 server runtime states.", assertFn: (doc) => doc.body.innerHTML.includes('pm2 save') },
    368: { title: "Challenge 8: Next Auth Setup", desc: "Initialize NextAuth configuration options variable.", assertFn: (doc) => doc.body.innerHTML.includes('authOptions') }
};

/* Quiz Database corresponding to the course modules */
const quizzesDB = {
    "HTML Course": [
        { q: "HTML stands for?", a: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Machine Language"], correct: 0 },
        { q: "Which tag is used for the largest heading?", a: ["<h6>", "<h1>", "<head>"], correct: 1 },
        { q: "Which attribute is used to provide image source link?", a: ["href", "src", "link"], correct: 1 },
        { q: "Which element is used to display preformatted text layout?", a: ["<pre>", "<code>", "<text>"], correct: 0 },
        { q: "Which tag creates an ordered list?", a: ["<ul>", "<li>", "<ol>"], correct: 2 }
    ],
    "CSS Course": [
        { q: "CSS stands for?", a: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"], correct: 0 },
        { q: "Which HTML tag is used to write inline CSS styles?", a: ["<style>", "<script>", "style attribute"], correct: 2 },
        { q: "Which property is used to change font colors?", a: ["text-color", "color", "font-color"], correct: 1 },
        { q: "How do you select an element with id 'demo'?", a: [".demo", "#demo", "demo"], correct: 1 },
        { q: "Which CSS layout model is best for one-dimensional layouts?", a: ["Flexbox", "Grid", "Float"], correct: 0 }
    ],
    "JavaScript Course": [
        { q: "How do you write a variable that cannot be reassigned?", a: ["let", "var", "const"], correct: 2 },
        { q: "Which method converts a JSON string into a JS object?", a: ["JSON.stringify()", "JSON.parse()", "Object.parse()"], correct: 1 },
        { q: "What is the output of 'typeof []' in JS?", a: ["'array'", "'object'", "'list'"], correct: 1 },
        { q: "Which browser function populates an input popup prompt?", a: ["alert()", "confirm()", "prompt()"], correct: 2 },
        { q: "Which event trigger matches keyboard press?", a: ["onclick", "onkeydown", "onpress"], correct: 1 }
    ],
    "React Course": [
        { q: "What is React JS?", a: ["A CSS framework", "A Javascript frontend library", "A server runtime database"], correct: 1 },
        { q: "Which hook stores state values inside functional components?", a: ["useEffect", "useContext", "useState"], correct: 2 },
        { q: "How do you pass data down from parent to child components?", a: ["State", "Props", "Context"], correct: 1 },
        { q: "Which keyword outputs elements representation in React?", a: ["JSX", "HTML", "JS"], correct: 0 },
        { q: "Which hook triggers side effects (data fetching, subscriptions)?", a: ["useMemo", "useEffect", "useRef"], correct: 1 }
    ],
    "Backend Course": [
        { q: "Which Node JS module is used to build web application routes?", a: ["fs", "Express", "http"], correct: 1 },
        { q: "What does HTTP status code 404 represent?", a: ["Success", "Internal Server Error", "Not Found"], correct: 2 },
        { q: "Which file format parses client inputs into environment values?", a: [".env", ".config", ".xml"], correct: 0 },
        { q: "Which method defines a database schema using MongoDB ODM?", a: ["Mongoose.model()", "Mongoose.Schema()", "Mongoose.connect()"], correct: 1 },
        { q: "Which token format is typically used for authentication?", a: ["HTML", "JWT", "XML"], correct: 1 }
    ],
    "Advanced Backend & AI": [
        { q: "Which tool containerizes applications into isolated environments?", a: ["Redis", "Docker", "Nginx"], correct: 1 },
        { q: "What is Redis primarily used for?", a: ["Database Scaling", "Caching & Queuing", "Reverse Proxy"], correct: 1 },
        { q: "Which parameter scales Nginx requests traffic load?", a: ["Reverse Proxy", "Load Balancing", "SSL Termination"], correct: 1 },
        { q: "What does RAG stand for in AI systems?", a: ["Random Access Generation", "Retrieval Augmented Generation", "Route Active Gateway"], correct: 1 },
        { q: "Which container model manages background job queues?", a: ["BullMQ", "Nginx", "Certbot"], correct: 0 }
    ],
    "VPS Hosting Guide": [
        { q: "Which command connects to a remote server using SSH?", a: ["ssh user@ip", "curl root@ip", "ping root@ip"], correct: 0 },
        { q: "Which tool runs Node APIs continuously in production backgrounds?", a: ["Nginx", "PM2", "Docker"], correct: 1 },
        { q: "Which folder holds Nginx sites-available configuration files?", a: ["/var/www", "/etc/nginx/sites-available", "/etc/nginx/sites-enabled"], correct: 1 },
        { q: "Which utility fetches free SSL certificates for secure HTTPS?", a: ["Certbot", "PM2", "Nginx"], correct: 0 },
        { q: "How long do Let's Encrypt certificates last before expiry?", a: ["30 Days", "90 Days", "1 Year"], correct: 1 }
    ],
    "Next.js Course": [
        { q: "Which folder model handles routing in Next.js 13+ App Router?", a: ["pages/", "app/", "routes/"], correct: 1 },
        { q: "Are pages in Next.js Server Components or Client Components by default?", a: ["Server Components", "Client Components", "Hybrid Components"], correct: 0 },
        { q: "Which directive must be added at the top of client components?", a: ["'use server'", "'use client'", "'import client'"], correct: 1 },
        { q: "Which component handles optimized prefetching links?", a: ["<a>", "<Link>", "<Navigate>"], correct: 1 },
        { q: "What options configuration file authenticates Next Auth APIs?", a: ["authOptions", "jwtOptions", "providersList"], correct: 0 }
    ]
};

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let currentQuizScore = 0;
let activeQuizCourseName = "";

/* Elements Selection */
let slidesContainer, btnPrev, btnNext, slideCounter, progressBar, sandboxContainer, sandboxEditor, sandboxPreview, sidebarLinks;

/* Initialize App */
function initApp() {
    loadStudentSession();
    slidesContainer = document.getElementById('slides-container');
    btnPrev = document.getElementById('btn-prev');
    btnNext = document.getElementById('btn-next');
    slideCounter = document.getElementById('slide-counter');
    progressBar = document.getElementById('progress-bar');
    sandboxContainer = document.getElementById('sandbox');
    sandboxEditor = document.getElementById('sandbox-editor');
    sandboxPreview = document.getElementById('sandbox-preview');
    sidebarLinks = document.querySelectorAll('.slide-link');

    // Merge custom courses from local storage
    customCourses.forEach(c => {
        slidesData.push(...c.slides);
    });

    renderAllSlides();
    renderCustomAccordions();
    showSlide(0);
    setupKeyboardControls();
    updateDashboard();
    updateXPBar();
    renderContributionGrid();
    
    // Bind console messages listener
    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'CONSOLE_LOG') {
            const consoleLogBox = document.getElementById('console-drawer-log');
            if (consoleLogBox) {
                const line = document.createElement('div');
                line.className = 'console-log-line';
                line.innerText = e.data.data;
                consoleLogBox.appendChild(line);
                consoleLogBox.scrollTop = consoleLogBox.scrollHeight;
            }
        }
    });

    // Check for admin URL triggers
    if (window.location.hash === '#admin' || window.location.search.includes('admin')) {
        setTimeout(openAdminModal, 500);
    }
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#admin') openAdminModal();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/* Render Custom Accordions */
function renderCustomAccordions() {
    const nav = document.querySelector('.levels-nav');
    if (!nav) return;
    
    document.querySelectorAll('.custom-accordion-item').forEach(el => el.remove());
    
    const baseAccordionCount = 8;
    customCourses.forEach((c, idx) => {
        const div = document.createElement('div');
        div.className = 'accordion-item custom-accordion-item';
        div.id = `accordion-${c.id}`;
        
        let linksHTML = c.slides.map(slide => {
            const index = slidesData.indexOf(slide);
            return `<li class="slide-link" data-slide="${index}">${index + 1}. ${slide.title}</li>`;
        }).join('');
        
        div.innerHTML = `
            <button class="accordion-header" onclick="toggleAccordion(${baseAccordionCount + idx})">
                <span class="header-title">${c.title}</span>
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="accordion-content">
                <div class="level-group" id="nav-${c.id}-group">
                    <div class="level-title">Complete Course Material</div>
                    <ul class="slide-list">
                        ${linksHTML}
                    </ul>
                </div>
            </div>
        `;
        nav.appendChild(div);
    });
    
    sidebarLinks = document.querySelectorAll('.slide-link');
    sidebarLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
            const slideNum = parseInt(e.target.getAttribute('data-slide'));
            showSlide(slideNum);
        });
    });
    sidebarLinks = document.querySelectorAll('.slide-link');
}

/* Cycle Themes: dark -> light -> cyberpunk -> nord */
const themesList = ["dark", "light", "cyberpunk", "nord"];
let currentThemeIndex = themesList.indexOf(localStorage.getItem('codewith_ai_theme') || 'dark');

window.cycleTheme = function() {
    currentThemeIndex = (currentThemeIndex + 1) % themesList.length;
    const selectedTheme = themesList[currentThemeIndex];
    document.body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('codewith_ai_theme', selectedTheme);
};

// Initialize theme on script execution
document.body.setAttribute('data-theme', themesList[currentThemeIndex]);

/* Toggle Sidebar Accordion Module */
window.toggleAccordion = function(index) {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, idx) => {
        if (idx === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
};

/* Render All Slides for both view and printing */
function renderAllSlides() {
    slidesContainer.innerHTML = '';
    slidesData.forEach((slide, index) => {
        const slideItem = document.createElement('div');
        slideItem.className = `slide-item-container ${index === 0 ? 'active' : ''}`;
        slideItem.id = `slide-item-${index}`;
        
        let printSandboxHTML = '';
        if (slide.sandboxCode) {
            printSandboxHTML = `
                <div class="print-only-layout">
                    <div class="practice-title">📝 Code Sample for Practice:</div>
                    <pre class="print-code-box">${escapeHTML(slide.sandboxCode)}</pre>
                </div>
            `;
        }

        slideItem.innerHTML = `
            <div class="slide-watermark">${slide.level}</div>
            <span class="slide-level-badge">${slide.level}</span>
            <h2 class="slide-title">${slide.title}</h2>
            <div class="slide-body">
                ${slide.content}
                ${printSandboxHTML}
            </div>
        `;
        slidesContainer.appendChild(slideItem);
    });
}

/* Escape HTML Helper for printing codes */
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}

/* Display Specific Slide */
function showSlide(index) {
    if (index < 0 || index >= slidesData.length) return;
    
    if (isSpeaking) {
        synth.cancel();
        isSpeaking = false;
        const speechBtn = document.getElementById('btn-speech');
        if (speechBtn) speechBtn.classList.remove('speaking');
    }
    
    const activeSlide = document.querySelector('.slide-item-container.active');
    if (activeSlide) activeSlide.classList.remove('active');
    
    const targetSlide = document.getElementById(`slide-item-${index}`);
    if (targetSlide) targetSlide.classList.add('active');

    currentSlideIndex = index;
    
    slideCounter.innerText = `Slide ${index + 1} of ${slidesData.length}`;
    const progressPercent = ((index + 1) / slidesData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    btnPrev.disabled = index === 0;
    btnNext.disabled = index === slidesData.length - 1;

    sidebarLinks.forEach(link => {
        if (parseInt(link.getAttribute('data-slide')) === index) {
            link.classList.add('active');
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            link.classList.remove('active');
        }
    });

    const completedCheckbox = document.getElementById('slide-completed-checkbox');
    completedCheckbox.checked = !!completedSlides[index];

    // Load slide note value
    const notesArea = document.getElementById('slide-note-textarea');
    if (notesArea) {
        notesArea.value = slideNotes[index] || '';
    }

    let activeAccordionIndex = 0;
    if (index >= 26 && index < 66) {
        activeAccordionIndex = 1;
    } else if (index >= 66 && index < 104) {
        activeAccordionIndex = 2;
    } else if (index >= 104 && index < 121) {
        activeAccordionIndex = 3;
    } else if (index >= 121 && index < 143) {
        activeAccordionIndex = 4;
    } else if (index >= 143 && index < 267) {
        activeAccordionIndex = 5;
    } else if (index >= 267 && index < 280) {
        activeAccordionIndex = 6;
    } else if (index >= 280 && index < 369) {
        activeAccordionIndex = 7;
    } else if (index >= 369) {
        activeAccordionIndex = 8 + customCourses.findIndex(c => c.slides.includes(slidesData[index]));
    }
    
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, idx) => {
        if (idx === activeAccordionIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const currentSlideData = slidesData[index];
    if (currentSlideData.sandboxCode) {
        sandboxContainer.style.display = 'flex';
        sandboxEditor.value = currentSlideData.sandboxCode;
        runSandboxCode();
    } else {
        sandboxContainer.style.display = 'none';
    }

    const titleLower = currentSlideData.title.toLowerCase();
    const isPracticeSlide = titleLower.includes('practice') || titleLower.includes('sheet') || titleLower.includes('project');
    if (isPracticeSlide) {
        const targetContainer = document.getElementById(`slide-item-${index}`);
        if (targetContainer && !targetContainer.querySelector('.quiz-launcher-box')) {
            const quizBox = document.createElement('div');
            quizBox.className = 'quiz-launcher-box';
            quizBox.style.marginTop = '2rem';
            quizBox.style.padding = '1.5rem';
            quizBox.style.borderRadius = '12px';
            quizBox.style.border = '1px solid var(--accent-blue)';
            quizBox.style.background = 'linear-gradient(135deg, rgba(0,210,255,0.05) 0%, rgba(168,85,247,0.05) 100%)';
            quizBox.style.textAlign = 'center';
            quizBox.innerHTML = `
                <h3 style="font-size: 1.25rem; font-family: var(--font-heading); margin-bottom: 0.5rem; color: var(--accent-blue);">📝 Module Test Practice Quiz!</h3>
                <p style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1.25rem;">Test your knowledge for this level module using an interactive quiz sheet!</p>
                <button class="modal-btn" onclick="startModuleQuiz()">Start Practice Quiz</button>
            `;
            targetContainer.querySelector('.slide-body').appendChild(quizBox);
        }
    }

    setupChallengeUI(index);
}

/* Feature 3: Set up Challenge UI */
function setupChallengeUI(index) {
    const challenge = codingChallengesDB[index];
    const editorLabel = document.querySelector('.editor-label');
    
    const prevBox = document.querySelector('.challenge-box');
    if (prevBox) prevBox.remove();
    
    if (challenge) {
        editorLabel.innerText = "HTML Editor & coding challenge";
        const cBox = document.createElement('div');
        cBox.className = 'challenge-box';
        cBox.innerHTML = `
            <div class="challenge-title">🎯 ${challenge.title}</div>
            <div style="font-size:0.85rem; margin-bottom: 0.5rem;">${challenge.desc}</div>
            <span class="challenge-status pending" id="challenge-status-badge">Pending Verification</span>
        `;
        document.querySelector('.editor-pane').insertBefore(cBox, sandboxEditor);
    } else {
        editorLabel.innerText = "HTML Editor";
    }
}

/* Slide Navigation Functions */
function nextSlide() {
    if (currentSlideIndex < slidesData.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            if (e.key === 'Enter' && e.ctrlKey) {
                runSandboxCode();
            } else if (e.key === 's' && e.ctrlKey) {
                e.preventDefault();
                saveCodeSnippet();
            }
            return;
        }
        
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === '?') {
            toggleShortcutsModal();
        } else if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

window.toggleShortcutsModal = function() {
    document.getElementById('shortcuts-modal').classList.toggle('active');
};

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

/* Tab selector switch */
window.switchPreviewTab = function(tabName) {
    document.querySelectorAll('.btn-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
    
    document.getElementById(`tab-btn-${tabName}`).classList.add('active');
    document.getElementById(`panel-${tabName}`).style.display = 'block';
};

function runSandboxCode() {
    const code = sandboxEditor.value;
    runDBMockParser(code);

    const consoleLoggerScript = `
        <script>
            (function() {
                const _log = console.log;
                const _error = console.error;
                const _warn = console.warn;
                
                console.log = function(...args) {
                    _log(...args);
                    window.parent.postMessage({ type: 'CONSOLE_LOG', data: args.join(' ') }, '*');
                };
                console.error = function(...args) {
                    _error(...args);
                    window.parent.postMessage({ type: 'CONSOLE_LOG', data: '❌ ERROR: ' + args.join(' ') }, '*');
                };
                console.warn = function(...args) {
                    _warn(...args);
                    window.parent.postMessage({ type: 'CONSOLE_LOG', data: '⚠️ WARNING: ' + args.join(' ') }, '*');
                };
            })();
        </script>
    `;

    sandboxPreview.srcdoc = `
        <!DOCTYPE html>
        <html lang="hi">
        <head>
            ${consoleLoggerScript}
            <style>
                body {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    padding: 10px;
                    margin: 0;
                    background-color: #ffffff;
                    color: #111827;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            ${code}
        </body>
        </html>
    `;
    
    setTimeout(() => {
        verifyChallengeCode();
    }, 400);
}

/* Feature 2: Database Command Mock Parser & GUI Monitor Rendering */
function runDBMockParser(code) {
    const dbBadge = document.getElementById('db-type-badge');
    const dbContent = document.getElementById('db-gui-content');
    if (!dbBadge || !dbContent) return;
    
    const codeLower = code.toLowerCase();
    
    if (codeLower.includes('set ') || codeLower.includes('get ') || currentSlideIndex >= 182 && currentSlideIndex <= 206) {
        dbBadge.innerText = "Redis Local Server";
        dbBadge.style.background = "rgba(239, 68, 68, 0.15)";
        dbBadge.style.color = "#ef4444";
        
        const redisStore = {};
        const lines = code.split('\n');
        lines.forEach(l => {
            const cleanLine = l.trim();
            const setMatch = cleanLine.match(/SET\s+(\w+)\s+["']?([^"']+)["']?/i);
            if (setMatch) {
                redisStore[setMatch[1]] = setMatch[2];
            }
        });
        
        if (Object.keys(redisStore).length === 0) {
            redisStore["username"] = "ayush";
            redisStore["sessionToken"] = "token_xyz789";
        }
        
        let rows = Object.entries(redisStore).map(([k, v]) => `
            <tr>
                <td style="color:#ef4444; font-weight:bold;">${k}</td>
                <td>String</td>
                <td style="color:#ffffff;">"${v}"</td>
            </tr>
        `).join('');
        
        dbContent.innerHTML = `
            <div style="font-weight:700; margin-bottom:0.5rem; color:#f8fafc;">Key-Value Database Store:</div>
            <table class="db-gui-table">
                <thead>
                    <tr><th>Key</th><th>Type</th><th>Value</th></tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    } else if (codeLower.includes('mongodb') || codeLower.includes('mongoose') || codeLower.includes('db.users') || codeLower.includes('find(') || currentSlideIndex >= 338 && currentSlideIndex <= 348) {
        dbBadge.innerText = "MongoDB Cluster Atlas";
        dbBadge.style.background = "rgba(16, 185, 129, 0.15)";
        dbBadge.style.color = "#10b981";
        
        const mockDocuments = [
            { _id: "65cb1a90f", name: "Ayush", email: "ayush@codewithai.com", role: "Student" },
            { _id: "65cb1a91a", name: "Priya", email: "priya@domain.com", role: "Instructor" }
        ];
        
        const insertMatch = code.match(/insertOne\(\{\s*name:\s*["']([^"']+)["']\s*,\s*email:\s*["']([^"']+)["']/i);
        if (insertMatch) {
            mockDocuments.push({
                _id: Math.random().toString(16).substr(2, 9),
                name: insertMatch[1],
                email: insertMatch[2],
                role: "Student"
            });
        }
        
        let rows = mockDocuments.map(doc => `
            <tr>
                <td style="color:#a1a1aa; font-size:0.7rem;">${doc._id}</td>
                <td style="color:#10b981; font-weight:bold;">${doc.name}</td>
                <td>${doc.email}</td>
                <td><span style="background:rgba(255,255,255,0.05); padding:0.1rem 0.3rem; border-radius:4px;">${doc.role}</span></td>
            </tr>
        `).join('');
        
        dbContent.innerHTML = `
            <div style="font-weight:700; margin-bottom:0.5rem; color:#f8fafc;">Collection: <span style="color:#10b981;">users</span></div>
            <table class="db-gui-table">
                <thead>
                    <tr><th>_id</th><th>name</th><th>email</th><th>role</th></tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    } else {
        dbBadge.innerText = "No Database Active";
        dbBadge.style.background = "rgba(148, 163, 184, 0.15)";
        dbBadge.style.color = "#94a3b8";
        dbContent.innerHTML = `
            <div style="text-align: center; padding: 2rem 0; color:#475569;">
                No active database connection detected inside editor code scripts.<br>
                Type standard MongoDB insert queries or Redis GET/SET values.
            </div>
        `;
    }
}

/* Feature 3: Evaluate Challenge asserts */
function verifyChallengeCode() {
    const challenge = codingChallengesDB[currentSlideIndex];
    if (!challenge) return;
    
    const badge = document.getElementById('challenge-status-badge');
    if (!badge) return;
    
    try {
        const iframeDoc = sandboxPreview.contentDocument || sandboxPreview.contentWindow.document;
        const pass = challenge.assertFn(iframeDoc);
        if (pass) {
            badge.innerText = "✓ Passed successfully!";
            badge.className = "challenge-status passed";
            fireConfetti();
            addStudentXP(100);
            recordActivity(3);
        } else {
            badge.innerText = "Pending Verification";
            badge.className = "challenge-status pending";
        }
    } catch(e) {
        badge.innerText = "Error in code validation";
        badge.className = "challenge-status wrong";
    }
}

/* Feature 1: Instant Search Filter */
window.filterSidebarSlides = function() {
    const searchVal = document.getElementById('sidebar-search').value.toLowerCase().trim();
    
    sidebarLinks.forEach(link => {
        const title = link.innerText.toLowerCase();
        if (!searchVal || title.includes(searchVal)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });

    document.querySelectorAll('.level-group').forEach(group => {
        const visibleLinks = group.querySelectorAll('.slide-link:not([style*="display: none"])');
        if (visibleLinks.length === 0 && searchVal) {
            group.style.display = 'none';
        } else {
            group.style.display = 'block';
        }
    });
};

/* Feature 1: Toggle Slide Completion checkbox handler */
window.toggleSlideCompletion = function() {
    const checkbox = document.getElementById('slide-completed-checkbox');
    completedSlides[currentSlideIndex] = checkbox.checked;
    updateDashboard();
    checkCourseCompletion();
    if (checkbox.checked) {
        addStudentXP(20);
        recordActivity(1);
    }
    saveStudentProgress();
};

/* Update Dashboard metrics and Badge unlock indicators */
function updateDashboard() {
    const total = slidesData.length;
    let completedCount = 0;
    for (let i = 0; i < total; i++) {
        if (completedSlides[i]) completedCount++;
    }
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    const overallText = document.getElementById('overall-percentage');
    if (overallText) overallText.innerText = `${percent}%`;
    const overallBar = document.getElementById('overall-progress-fill');
    if (overallBar) overallBar.style.width = `${percent}%`;

    sidebarLinks.forEach(link => {
        const slideNum = parseInt(link.getAttribute('data-slide'));
        if (completedSlides[slideNum]) {
            link.classList.add('completed');
        } else {
            link.classList.remove('completed');
        }
    });

    updateBadgesGrid();
}

/* Feature 4: Unlocks profile badges on module completions */
function updateBadgesGrid() {
    const badgeChecks = [
        { id: "badge-html", start: 0, end: 25 },
        { id: "badge-css", start: 26, end: 65 },
        { id: "badge-js", start: 66, end: 103 },
        { id: "badge-react", start: 104, end: 120 },
        { id: "badge-backend", start: 121, end: 142 },
        { id: "badge-advbackend", start: 143, end: 266 },
        { id: "badge-vps", start: 267, end: 279 },
        { id: "badge-nextjs", start: 280, end: 368 }
    ];

    badgeChecks.forEach(b => {
        let completed = true;
        for (let i = b.start; i <= b.end; i++) {
            if (!completedSlides[i]) {
                completed = false;
                break;
            }
        }
        const badgeEl = document.getElementById(b.id);
        if (badgeEl) {
            if (completed) {
                badgeEl.classList.remove('locked');
                badgeEl.classList.add('unlocked');
            } else {
                badgeEl.classList.remove('unlocked');
                badgeEl.classList.add('locked');
            }
        }
    });
}

/* Feature 2: Confetti Celebration Particle Canvas script */
function fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    let animationFrame;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });
        
        let active = particles.some(p => p.y < canvas.height);
        if (active) {
            animationFrame = requestAnimationFrame(draw);
        } else {
            canvas.remove();
        }
    }
    draw();
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
    }, 4500);
}

/* Feature 2 (contd): Level quiz functions */
window.startModuleQuiz = function() {
    const currentSlide = slidesData[currentSlideIndex];
    let courseName = "HTML Course";
    
    if (currentSlideIndex >= 26 && currentSlideIndex < 66) courseName = "CSS Course";
    else if (currentSlideIndex >= 66 && currentSlideIndex < 104) courseName = "JavaScript Course";
    else if (currentSlideIndex >= 104 && currentSlideIndex < 121) courseName = "React Course";
    else if (currentSlideIndex >= 121 && currentSlideIndex < 143) courseName = "Backend Course";
    else if (currentSlideIndex >= 143 && currentSlideIndex < 267) courseName = "Advanced Backend & AI";
    else if (currentSlideIndex >= 267 && currentSlideIndex < 280) courseName = "VPS Hosting Guide";
    else if (currentSlideIndex >= 280) courseName = "Next.js Course";
    
    activeQuizCourseName = courseName;
    currentQuizQuestions = quizzesDB[courseName] || [];
    currentQuizIndex = 0;
    currentQuizScore = 0;
    
    if (currentQuizQuestions.length > 0) {
        showQuizQuestion();
        document.getElementById('quiz-modal').classList.add('active');
    } else {
        alert("Quiz not defined for this course module yet.");
    }
};

function showQuizQuestion() {
    const qObj = currentQuizQuestions[currentQuizIndex];
    const container = document.getElementById('quiz-modal-content');
    
    let optionsHTML = qObj.a.map((ans, idx) => `
        <button class="quiz-option-btn" onclick="submitQuizAnswer(${idx})">${idx + 1}. ${ans}</button>
    `).join('');
    
    container.innerHTML = `
        <h3 style="font-family: var(--font-heading); font-size: 0.9rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.5rem;">${activeQuizCourseName} - Question ${currentQuizIndex + 1} of ${currentQuizQuestions.length}</h3>
        <div class="quiz-question">${qObj.q}</div>
        <div class="quiz-options">
            ${optionsHTML}
        </div>
    `;
}

window.submitQuizAnswer = function(answerIdx) {
    const qObj = currentQuizQuestions[currentQuizIndex];
    const optionBtns = document.querySelectorAll('.quiz-option-btn');
    
    optionBtns.forEach(btn => btn.disabled = true);
    
    if (answerIdx === qObj.correct) {
        optionBtns[answerIdx].classList.add('correct');
        currentQuizScore++;
    } else {
        optionBtns[answerIdx].classList.add('wrong');
        optionBtns[qObj.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < currentQuizQuestions.length) {
            showQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1500);
};

function showQuizResults() {
    const container = document.getElementById('quiz-modal-content');
    const percent = Math.round((currentQuizScore / currentQuizQuestions.length) * 100);
    
    let passText = percent >= 80 ? "🎉 Badhiya! Aap pass ho gaye hain!" : "⚠️ Koi baat nahi, fir se koshish karein!";
    
    container.innerHTML = `
        <h3 style="font-family: var(--font-heading); text-align: center; color: var(--accent-blue); margin-bottom: 1rem;">Quiz Results</h3>
        <div style="text-align: center; font-size: 3rem; font-weight: 800; margin-bottom: 1rem; color: var(--accent-pink);">${percent}%</div>
        <p style="text-align: center; font-size: 1.1rem; font-weight: bold; margin-bottom: 1.5rem;">Aapne ${currentQuizQuestions.length} me se ${currentQuizScore} answers sahi diye.</p>
        <p style="text-align: center; color: #94a3b8; margin-bottom: 2rem;">${passText}</p>
        <div style="text-align: center;">
            <button class="modal-btn" onclick="closeQuizModal()">Close Quiz</button>
        </div>
    `;
    
    if (percent >= 80) {
        fireConfetti();
        addStudentXP(150);
        recordActivity(5);
    }
}

window.closeQuizModal = function() {
    document.getElementById('quiz-modal').classList.remove('active');
};

/* Feature 3: Clear Console Drawer Logs */
window.clearConsoleLog = function() {
    const logBox = document.getElementById('console-drawer-log');
    if (logBox) logBox.innerHTML = '';
};

/* Feature 4: Certificate of Completion unlock */
function checkCourseCompletion() {
    const courses = [
        { name: "HTML Course", start: 0, end: 25 },
        { name: "CSS Course", start: 26, end: 65 },
        { name: "JavaScript Course", start: 66, end: 103 },
        { name: "React Course", start: 104, end: 120 },
        { name: "Backend Course", start: 121, end: 142 },
        { name: "Advanced Backend & AI", start: 143, end: 266 },
        { name: "VPS Hosting Guide", start: 267, end: 279 },
        { name: "Next.js Course", start: 280, end: 368 }
    ];
    
    courses.forEach(course => {
        let completed = true;
        for (let i = course.start; i <= course.end; i++) {
            if (!completedSlides[i]) {
                completed = false;
                break;
            }
        }
        const claimKey = `claimed_cert_${course.name}`;
        if (completed && !localStorage.getItem(claimKey)) {
            localStorage.setItem(claimKey, "true");
            showCertificateModal(course.name);
        }
    });
}

function showCertificateModal(courseName) {
    const name = prompt(`Waaah! Aapne "${courseName}" complete kar liya hai! 🎉\n\nCertificate generate karne ke liye apna Full Name likhein:`);
    if (name) {
        document.getElementById('cert-user-name').innerText = name;
        document.getElementById('cert-course-name').innerText = courseName;
        document.getElementById('certificate-modal').classList.add('active');
        fireConfetti();
    }
}

window.closeCertificateModal = function() {
    document.getElementById('certificate-modal').classList.remove('active');
};

window.printCertificate = function() {
    const certHTML = document.getElementById('certificate-container-to-print').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Certificate of Completion</title>
            <style>
                body {
                    font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #0f172a;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .certificate-container {
                    background: #0f172a;
                    border: 12px double #f59e0b;
                    border-radius: 4px;
                    padding: 3rem;
                    text-align: center;
                    color: white;
                    width: 800px;
                    position: relative;
                    box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
                }
                .cert-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #f59e0b;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }
                .cert-subtitle {
                    font-size: 1.1rem;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 2.5rem;
                }
                .cert-name {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 1.5rem;
                    border-bottom: 2px solid rgba(255,255,255,0.2);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                    width: 85%;
                }
                .cert-desc {
                    font-size: 1.2rem;
                    color: #cbd5e1;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }
                .cert-footer {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 2rem;
                }
                .cert-signature {
                    font-family: 'Brush Script MT', cursive, sans-serif;
                    font-size: 1.8rem;
                    color: #e2e8f0;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    padding-bottom: 0.2rem;
                }
                .cert-stamp {
                    width: 60px;
                    height: 60px;
                    background: #f59e0b;
                    color: #0f172a;
                    border-radius: 50%;
                    font-size: 0.75rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-transform: uppercase;
                    box-shadow: 0 0 10px rgba(245,158,11,0.5);
                }
            </style>
        </head>
        <body>
            <div class="certificate-container">
                ${certHTML}
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(() => window.close(), 500);
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
};

/* Feature 5: TTS Speech reader controls */
window.toggleSpeech = function() {
    const speechBtn = document.getElementById('btn-speech');
    if (isSpeaking) {
        synth.cancel();
        isSpeaking = false;
        speechBtn.classList.remove('speaking');
        return;
    }
    
    const activeSlide = slidesData[currentSlideIndex];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = activeSlide.content;
    
    const hingEl = tempDiv.querySelector('.hinglish-explanation');
    const speakText = hingEl ? hingEl.textContent : tempDiv.textContent;
    
    const cleanedText = speakText.replace(/🇮🇳 Hinglish \(आसान भाषा में\)/g, '').replace(/🇬🇧 English Explanation/g, '').trim();
    
    speechUtterance = new SpeechSynthesisUtterance(cleanedText);
    
    const voices = synth.getVoices();
    const indVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('hi'));
    if (indVoice) speechUtterance.voice = indVoice;
    
    speechUtterance.onend = () => {
        isSpeaking = false;
        speechBtn.classList.remove('speaking');
    };
    
    isSpeaking = true;
    speechBtn.classList.add('speaking');
    synth.speak(speechUtterance);
};

/* Admin & Lockscreen dashboard actions */
window.openAdminModal = function() {
    const isAdmin = sessionStorage.getItem('codewith_ai_isAdmin') === 'true';
    if (isAdmin) {
        document.getElementById('admin-dashboard-modal').classList.add('active');
        renderAdminCoursesList();
        if (typeof renderAdminStudentsList === 'function') renderAdminStudentsList();
    } else {
        document.getElementById('admin-login-modal').classList.add('active');
    }
};

window.closeAdminLoginModal = function() {
    document.getElementById('admin-login-modal').classList.remove('active');
    if (window.location.hash === '#admin') {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
};

window.closeAdminDashboardModal = function() {
    document.getElementById('admin-dashboard-modal').classList.remove('active');
    if (window.location.hash === '#admin') {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
};

window.verifyAdminLogin = function() {
    const user = document.getElementById('admin-username').value;
    const pass = document.getElementById('admin-password').value;
    const errorMsg = document.getElementById('login-error-msg');
    
    if (user === 'admin' && pass === 'codewith_ai') {
        sessionStorage.setItem('codewith_ai_isAdmin', 'true');
        errorMsg.style.display = 'none';
        closeAdminLoginModal();
        openAdminModal();
    } else {
        errorMsg.style.display = 'block';
    }
};

window.adminLogout = function() {
    sessionStorage.removeItem('codewith_ai_isAdmin');
    closeAdminDashboardModal();
};

/* Browser-side Client PDF.js Parsing logic */
window.startPDFBrowserParsing = async function() {
    const title = document.getElementById('upload-course-title').value.trim();
    const id = document.getElementById('upload-course-id').value.trim().toLowerCase();
    const fileInput = document.getElementById('upload-pdf-file');
    const statusDiv = document.getElementById('admin-upload-status');
    
    if (!title || !id || !fileInput.files.length) {
        alert("Please fill all fields and select a PDF file.");
        return;
    }
    
    statusDiv.style.display = 'block';
    statusDiv.innerText = "⏳ Loading PDF document...";
    
    const file = fileInput.files[0];
    const fileReader = new FileReader();
    
    fileReader.onload = async function() {
        try {
            const typedarray = new Uint8Array(this.result);
            const pdf = await pdfjsLib.getDocument(typedarray).promise;
            const totalPages = pdf.numPages;
            statusDiv.innerText = `📖 Found ${totalPages} pages. Extracting text content...`;
            
            const courseSlides = [];
            
            for (let i = 1; i <= totalPages; i++) {
                statusDiv.innerText = `⏳ Parsing page ${i} of ${totalPages}...`;
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const textItems = textContent.items.map(item => item.str);
                
                let pageText = textItems.join(' ').replace(/\s+/g, ' ').trim();
                
                let slideTitle = "";
                const lines = textItems.map(t => t.trim()).filter(t => t.length > 2);
                if (lines.length > 0) {
                    for (let line of lines.slice(0, 3)) {
                        if (!line.match(/^\d+$/) && !"virtual".includes(line.toLowerCase())) {
                            slideTitle = line;
                            break;
                        }
                    }
                }
                if (!slideTitle) slideTitle = `Topic Overview - Page ${i}`;
                if (slideTitle.length > 35) slideTitle = slideTitle.substring(0, 32) + "...";
                slideTitle = slideTitle.replace(/VIRTUAL CODE/gi, "codewith_ai");
                
                let listItemsHTML = lines.map(l => {
                    let cleanL = l.replace(/VIRTUAL CODE/gi, "codewith_ai").replace(/`/g, "'").trim();
                    return `<li>${cleanL}</li>`;
                }).join('');
                
                const levelNum = Math.min(5, Math.floor((i - 1) / Math.max(1, totalPages / 5)));
                const levelBadge = `${title} Level ${levelNum}`;
                
                const contentHTML = `
                    <div class="english-explanation">
                        <div class="english-header">🇬🇧 English Explanation</div>
                        <p>Welcome to <b>${title}</b>. This slide outlines key concepts on <b>${slideTitle}</b>.</p>
                    </div>
                    <div class="hinglish-explanation">
                        <div class="hinglish-header">🇮🇳 Hinglish (आसान भाषा में)</div>
                        <ul>${listItemsHTML}</ul>
                    </div>
                `;
                
                courseSlides.push({
                    level: levelBadge,
                    title: slideTitle,
                    content: contentHTML,
                    sandboxCode: pageText.toLowerCase().includes('code') ? `// Practice Sandbox Code\\nconsole.log("Welcome to ${slideTitle}");` : ""
                });
            }
            
            customCourses.push({
                title: title,
                id: id,
                slides: courseSlides
            });
            localStorage.setItem('codewith_ai_custom_courses', JSON.stringify(customCourses));
            
            slidesData.push(...courseSlides);
            
            statusDiv.innerText = `🎉 Success! Compiled ${totalPages} slides. Re-rendering sidebar...`;
            
            renderCustomAccordions();
            renderAdminCoursesList();
            updateDashboard();
            
            alert(`Course "${title}" has been successfully added to your Hub!`);
            
            document.getElementById('upload-course-title').value = '';
            document.getElementById('upload-course-id').value = '';
            fileInput.value = '';
            
        } catch(err) {
            statusDiv.innerText = `❌ Error compiling PDF: ${err.message}`;
        }
    };
    
    fileReader.readAsArrayBuffer(file);
};

/* Admin list layout and custom course delete actions */
window.renderAdminCoursesList = function() {
    const listDiv = document.getElementById('admin-courses-list');
    if (!listDiv) return;
    
    const staticCourses = [
        { title: "HTML Course", slides: 26 },
        { title: "CSS Course", slides: 40 },
        { title: "JavaScript Course", slides: 38 },
        { title: "React Course", slides: 17 },
        { title: "Backend Course", slides: 22 },
        { title: "Advanced Backend & AI", slides: 124 },
        { title: "VPS Hosting Guide", slides: 13 },
        { title: "Next.js Course", slides: 89 }
    ];
    
    let rowsHTML = staticCourses.map(c => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); font-size:0.85rem; color: #ffffff;">
            <span>${c.title} <span style="color:#94a3b8; font-size:0.75rem;">(${c.slides} slides)</span></span>
            <span style="color:#10b981; font-size:0.75rem; background:rgba(16,185,129,0.1); padding:0.15rem 0.4rem; border-radius:4px;">Protected</span>
        </div>
    `).join('');
    
    let customRowsHTML = customCourses.map((c, idx) => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); font-size:0.85rem; color: #ffffff;">
            <span>${c.title} <span style="color:#94a3b8; font-size:0.75rem;">(${c.slides.length} slides)</span></span>
            <button class="console-clear-btn" onclick="deleteCustomCourse(${idx})" style="background:#ef4444; border-color:#ef4444; color:white; padding:0.15rem 0.5rem;">Delete</button>
        </div>
    `).join('');
    
    listDiv.innerHTML = rowsHTML + customRowsHTML;
};

window.deleteCustomCourse = function(index) {
    if (confirm(`Are you sure you want to delete course "${customCourses[index].title}"?`)) {
        const courseSlides = customCourses[index].slides;
        slidesData = slidesData.filter(s => !courseSlides.some(cs => cs.title === s.title && cs.level === s.level));
        
        customCourses.splice(index, 1);
        localStorage.setItem('codewith_ai_custom_courses', JSON.stringify(customCourses));
        
        renderCustomAccordions();
        renderAdminCoursesList();
        updateDashboard();
        showSlide(0);
    }
};

/* Code exporter clipboard copy */
window.copyUpdatedAppJs = function() {
    const serialized = JSON.stringify(slidesData, null, 4);
    const exportCode = `/* Slide Data Base containing Dual Language (English + Hinglish) Explanations */\nlet slidesData = ${serialized};`;
    navigator.clipboard.writeText(exportCode).then(() => {
        alert("Dynamic slidesData array copied to clipboard! You can paste this at the top of app.js to save all custom courses permanently.");
    }).catch(err => {
        alert("Failed to copy: " + err);
    });
};

/* Gamification: XP & Level State Manager */
function addStudentXP(amount) {
    studentXP += amount;
    const nextLevelXP = studentLevel * 500;
    
    if (studentXP >= nextLevelXP) {
        studentXP -= nextLevelXP;
        studentLevel++;
        
        setTimeout(() => {
            alert(`🎉 LEVEL UP! Aap ab Level ${studentLevel} par pahunch gaye hain! Keep coding!`);
            fireConfetti();
        }, 800);
    }
    updateXPBar();
    saveStudentProgress();
}

function updateXPBar() {
    const nextLevelXP = studentLevel * 500;
    const pct = Math.min(100, Math.round((studentXP / nextLevelXP) * 100));
    
    const xpBar = document.getElementById('xp-progress-fill');
    if (xpBar) xpBar.style.width = `${pct}%`;
    
    const levelText = document.getElementById('student-level');
    if (levelText) {
        let rankName = "Novice";
        if (studentLevel >= 10) rankName = "Full-Stack Wizard";
        else if (studentLevel >= 8) rankName = "Ninja";
        else if (studentLevel >= 6) rankName = "Expert";
        else if (studentLevel >= 4) rankName = "Apprentice";
        else if (studentLevel >= 2) rankName = "Scholar";
        
        levelText.innerText = `Lvl ${studentLevel} (${rankName})`;
    }
}

/* Personal Code Snippets Saver & Loader library */
window.saveCodeSnippet = function() {
    const code = sandboxEditor.value;
    if (!code.trim()) {
        alert("Pehle Editor me kuch code likhein!");
        return;
    }
    const name = prompt("Snippet ka ek name enter karein (e.g. Card Style):");
    if (name) {
        savedSnippets.push({ name: name, code: code, date: new Date().toLocaleDateString() });
        localStorage.setItem('codewith_ai_snippets', JSON.stringify(savedSnippets));
        alert(`Snippet "${name}" save ho gaya hai!`);
    }
};

window.toggleSnippetsDrawer = function() {
    const modal = document.getElementById('snippets-library-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        renderSnippetsList();
    }
};

window.closeSnippetsDrawer = function() {
    document.getElementById('snippets-library-modal').classList.remove('active');
};

function renderSnippetsList() {
    const container = document.getElementById('snippets-list-container');
    if (!container) return;
    
    if (savedSnippets.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:#cbd5e1; font-size: 0.85rem;">Abhi tak koi snippet save nahi kiya gaya hai.</div>`;
        return;
    }
    
    container.innerHTML = savedSnippets.map((s, idx) => `
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); padding:0.6rem 0.8rem; border-radius:6px; border:1px solid rgba(255,255,255,0.05); font-size:0.8rem; color: #ffffff; text-align: left;">
            <div>
                <span style="color:#ffffff; font-weight:bold; display:block;">${s.name}</span>
                <span style="color:#94a3b8; font-size:0.7rem;">${s.date}</span>
            </div>
            <div style="display:flex; gap:0.4rem;">
                <button class="console-clear-btn" onclick="loadSnippet(${idx})" style="background:var(--accent-blue); border-color:var(--accent-blue); color:black; padding:0.2rem 0.5rem;">Load</button>
                <button class="console-clear-btn" onclick="deleteSnippet(${idx})" style="background:#ef4444; border-color:#ef4444; color:white; padding:0.2rem 0.5rem;">Delete</button>
            </div>
        </div>
    `).join('');
}

window.loadSnippet = function(idx) {
    if (confirm(`Kya aap snippet "${savedSnippets[idx].name}" load karna chahte hain? Isse aapka current editor code override ho jayega.`)) {
        sandboxEditor.value = savedSnippets[idx].code;
        runSandboxCode();
        closeSnippetsDrawer();
    }
};

window.deleteSnippet = function(idx) {
    if (confirm(`Are you sure you want to delete snippet "${savedSnippets[idx].name}"?`)) {
        savedSnippets.splice(idx, 1);
        localStorage.setItem('codewith_ai_snippets', JSON.stringify(savedSnippets));
        renderSnippetsList();
    }
};

/* Simulated AI Coding Mentor Conversational Interface */
window.openAIMentorModal = function() {
    document.getElementById('ai-mentor-modal').classList.add('active');
    const chatFeed = document.getElementById('ai-chat-feed');
    
    if (chatFeed.children.length === 0) {
        chatFeed.innerHTML = `
            <div style="background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.2); padding:0.75rem; border-radius:8px; align-self:flex-start; max-width:85%; color:#38bdf8; text-align: left;">
                🤖 <b>AI Mentor:</b> Namaste! Main aapka codewith_ai tutor hoon. 
                Aap practice code likhte waqt koi bhi guidance chahein, to niche <b>"Explain My Code"</b> ya <b>"Get Hint"</b> click karein!
            </div>
        `;
    }
};

window.closeAIMentorModal = function() {
    document.getElementById('ai-mentor-modal').classList.remove('active');
};

window.aiGetHint = function() {
    const challenge = codingChallengesDB[currentSlideIndex];
    let hintText = "";
    
    if (challenge) {
        hintText = `Is challenge ka hint ye hai: "${challenge.desc}". Aap editor me correct values likh kar validation checks run karein!`;
    } else {
        hintText = `Aap abhi slide "${slidesData[currentSlideIndex].title}" par hain. Is chapter ko acche se read kijiye, aur editor me guidelines run karke check kijiye.`;
    }
    
    appendChatMessage("Hint Request", hintText, true);
};

window.aiExplainCode = function() {
    const code = sandboxEditor.value;
    let explainText = "";
    
    if (!code.trim()) {
        explainText = "Aapka editor abhi blank hai! Pehle sandbox me koi HTML ya JS practice code likhein.";
    } else {
        explainText = `Aapke code ka overview ye hai: Is practice code me aapne structural elements declarations use kiye hain. Coding pattern sahi lag raha hai, tests verify run kijiye!`;
    }
    
    appendChatMessage("Explain Code", explainText, true);
};

function appendChatMessage(sender, text, isAI) {
    const chatFeed = document.getElementById('ai-chat-feed');
    if (!chatFeed) return;
    
    const bubble = document.createElement('div');
    bubble.style.padding = '0.75rem';
    bubble.style.borderRadius = '8px';
    bubble.style.maxWidth = '85%';
    bubble.style.fontSize = '0.85rem';
    bubble.style.lineHeight = '1.4';
    bubble.style.textAlign = 'left';
    
    if (isAI) {
        bubble.style.background = 'rgba(168,85,247,0.1)';
        bubble.style.border = '1px solid rgba(168,85,247,0.2)';
        bubble.style.color = '#c084fc';
        bubble.style.alignSelf = 'flex-start';
        
        // Typewriter animation effect
        bubble.innerHTML = `🤖 <b>AI Mentor:</b> `;
        chatFeed.appendChild(bubble);
        chatFeed.scrollTop = chatFeed.scrollHeight;
        
        let charIndex = 0;
        function typeChar() {
            if (charIndex < text.length) {
                bubble.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 20);
            }
        }
        typeChar();
    } else {
        bubble.style.background = 'rgba(255,255,255,0.05)';
        bubble.style.border = '1px solid rgba(255,255,255,0.08)';
        bubble.style.color = '#ffffff';
        bubble.style.alignSelf = 'flex-end';
        bubble.innerHTML = `👤 <b>You:</b> ${text}`;
        chatFeed.appendChild(bubble);
        chatFeed.scrollTop = chatFeed.scrollHeight;
    }
}

/* Feature 1: Slide-wise Study Notes Maker */
window.toggleSlideNotes = function() {
    const notesPane = document.getElementById('slide-notes-pane');
    if (notesPane.style.display === 'none' || !notesPane.style.display) {
        notesPane.style.display = 'flex';
        document.getElementById('slide-note-textarea').value = slideNotes[currentSlideIndex] || '';
    } else {
        notesPane.style.display = 'none';
    }
};

window.saveSlideNote = function() {
    const val = document.getElementById('slide-note-textarea').value;
    slideNotes[currentSlideIndex] = val;
    saveStudentProgress();
};

/* Feature 2: GitHub-style Streaks Heatmap Grid calculator */
window.recordActivity = function(points) {
    const today = new Date().toISOString().split('T')[0];
    activityLog[today] = (activityLog[today] || 0) + points;
    renderContributionGrid();
    saveStudentProgress();
};

function renderContributionGrid() {
    const grid = document.getElementById('consistency-heatmap');
    if (!grid) return;
    grid.innerHTML = '';
    
    // Create 28 cells matching the past 4 weeks of activity
    const now = new Date();
    for (let i = 27; i >= 0; i--) {
        const d = new Date();
        d.setDate(now.getDate() - i);
        const dStr = d.toISOString().split('T')[0];
        
        const count = activityLog[dStr] || 0;
        let lvl = 0;
        if (count > 6) lvl = 4;
        else if (count > 4) lvl = 3;
        else if (count > 2) lvl = 2;
        else if (count > 0) lvl = 1;
        
        const cell = document.createElement('div');
        cell.className = `heatmap-cell lvl-${lvl}`;
        cell.title = `${dStr}: ${count} activity points`;
        grid.appendChild(cell);
    }
}

/* Feature 4: Code sandbox local HTML file downloader */
window.downloadSandboxCode = function() {
    const code = sandboxEditor.value;
    if (!code.trim()) {
        alert("Pehle sandbox editor me kuch HTML code likhein!");
        return;
    }
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codewith_ai_practice_${currentSlideIndex + 1}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

/* --- Student PWA Authentication logic --- */
let activeAuthTab = 'signin';

window.switchAuthTab = function(tab) {
    activeAuthTab = tab;
    const btnSignin = document.getElementById('auth-tab-signin');
    const btnSignup = document.getElementById('auth-tab-signup');
    const signupFields = document.getElementById('signup-fields');
    
    if (tab === 'signin') {
        btnSignin.style.background = '#a855f7';
        btnSignin.style.color = 'white';
        btnSignup.style.background = 'transparent';
        btnSignup.style.color = 'rgba(255,255,255,0.6)';
        signupFields.style.display = 'none';
    } else {
        btnSignup.style.background = '#a855f7';
        btnSignup.style.color = 'white';
        btnSignin.style.background = 'transparent';
        btnSignin.style.color = 'rgba(255,255,255,0.6)';
        signupFields.style.display = 'flex';
    }
};

window.handleAuthSubmit = function() {
    const usernameInput = document.getElementById('auth-username');
    const passwordInput = document.getElementById('auth-password');
    const emailInput = document.getElementById('auth-email');
    const fullnameInput = document.getElementById('auth-fullname');
    const mobileInput = document.getElementById('auth-mobile');
    const yearSelect = document.getElementById('auth-year');
    const errorMsg = document.getElementById('auth-error-msg');
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();
    const fullname = fullnameInput ? fullnameInput.value.trim() : '';
    const mobile = mobileInput ? mobileInput.value.trim() : '';
    const year = yearSelect ? yearSelect.value : '';
    
    if (!username || !password || (activeAuthTab === 'signup' && (!email || !fullname || !mobile || !year))) {
        errorMsg.innerText = "Kripya saare fields sahi se bharein!";
        errorMsg.style.display = 'block';
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    
    if (activeAuthTab === 'signup') {
        if (users[username]) {
            errorMsg.innerText = "Username pehle se exists karta hai!";
            errorMsg.style.display = 'block';
            return;
        }
        
        users[username] = {
            username: username,
            password: password,
            email: email,
            fullname: fullname,
            mobile: mobile,
            year: year,
            unlocked: false, // Wait for admin unlock approval
            currentSlideIndex: 0,
            completedSlides: {},
            studentXP: 0,
            studentLevel: 1,
            slideNotes: {},
            activityLog: {}
        };
        localStorage.setItem('codewith_ai_users', JSON.stringify(users));
        activeAuthTab = 'signin';
        switchAuthTab('signin');
        errorMsg.innerText = "Registration safal! Admin approval ke baad access milega. Login karein.";
        errorMsg.style.color = '#10b981';
        errorMsg.style.display = 'block';
        
        // Reset fields
        emailInput.value = '';
        if (fullnameInput) fullnameInput.value = '';
        if (mobileInput) mobileInput.value = '';
    } else {
        // Sign In
        if (!users[username] || users[username].password !== password) {
            errorMsg.innerText = "Galat Username ya Password!";
            errorMsg.style.color = '#ef4444';
            errorMsg.style.display = 'block';
            return;
        }
        
        localStorage.setItem('codewith_ai_currentUser', username);
        errorMsg.style.display = 'none';
        
        // Load User States
        const u = users[username];
        currentSlideIndex = u.currentSlideIndex || 0;
        completedSlides = u.completedSlides || {};
        studentXP = u.studentXP || 0;
        studentLevel = u.studentLevel || 1;
        slideNotes = u.slideNotes || {};
        activityLog = u.activityLog || {};
        
        // Hide gate and show username
        document.getElementById('student-auth-gate').style.display = 'none';
        document.getElementById('session-username').innerText = `👤 ${username}`;
        
        // Refresh UI components
        updateDashboard();
        updateXPBar();
        renderContributionGrid();

        // Check locks and show slides
        loadStudentSession();
        checkStudentAlerts();
    }
};

window.loadStudentSession = function() {
    const currentUser = localStorage.getItem('codewith_ai_currentUser');
    const authGate = document.getElementById('student-auth-gate');
    const sessionUser = document.getElementById('session-username');
    const lockOverlay = document.getElementById('course-lock-overlay');
    const slideCard = document.getElementById('slide-card');
    const sandbox = document.getElementById('sandbox');
    const nav = document.querySelector('.levels-nav');
    
    if (currentUser) {
        let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
        const u = users[currentUser];
        if (u) {
            currentSlideIndex = u.currentSlideIndex || 0;
            completedSlides = u.completedSlides || {};
            studentXP = u.studentXP || 0;
            studentLevel = u.studentLevel || 1;
            slideNotes = u.slideNotes || {};
            activityLog = u.activityLog || {};
            
            if (authGate) authGate.style.display = 'none';
            if (sessionUser) sessionUser.innerText = `👤 ${currentUser}`;
            
            // Handle Admin Course Approval Lock status
            if (u.unlocked === true) {
                if (slideCard) slideCard.style.display = 'block';
                if (lockOverlay) lockOverlay.style.display = 'none';
                if (nav) {
                    nav.style.pointerEvents = 'auto';
                    nav.style.opacity = '1';
                }
                
                showSlide(currentSlideIndex);
            } else {
                if (slideCard) slideCard.style.display = 'none';
                if (sandbox) sandbox.style.display = 'none';
                if (lockOverlay) {
                    lockOverlay.style.display = 'flex';
                    document.getElementById('lock-fullname').innerText = u.fullname || '-';
                    document.getElementById('lock-mobile').innerText = u.mobile || '-';
                    document.getElementById('lock-year').innerText = u.year || '-';
                }
                if (nav) {
                    nav.style.pointerEvents = 'none';
                    nav.style.opacity = '0.4';
                }
            }
            
            return;
        }
    }
    
    // Default locked guest state
    if (authGate) authGate.style.display = 'flex';
    if (sessionUser) sessionUser.innerText = `👤 Guest`;
    if (slideCard) slideCard.style.display = 'block';
    if (lockOverlay) lockOverlay.style.display = 'none';
    if (nav) {
        nav.style.pointerEvents = 'auto';
        nav.style.opacity = '1';
    }
};

window.saveStudentProgress = function() {
    const currentUser = localStorage.getItem('codewith_ai_currentUser');
    if (!currentUser) return;
    
    let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    if (users[currentUser]) {
        users[currentUser].currentSlideIndex = currentSlideIndex;
        users[currentUser].completedSlides = completedSlides;
        users[currentUser].studentXP = studentXP;
        users[currentUser].studentLevel = studentLevel;
        users[currentUser].slideNotes = slideNotes;
        users[currentUser].activityLog = activityLog;
        localStorage.setItem('codewith_ai_users', JSON.stringify(users));
    }
};

window.logoutStudent = function() {
    localStorage.removeItem('codewith_ai_currentUser');
    
    // Reset local states
    currentSlideIndex = 0;
    completedSlides = {};
    studentXP = 0;
    studentLevel = 1;
    slideNotes = {};
    activityLog = {};
    
    // Restore layout UI to unlocked default
    const lockOverlay = document.getElementById('course-lock-overlay');
    const slideCard = document.getElementById('slide-card');
    const nav = document.querySelector('.levels-nav');
    if (slideCard) slideCard.style.display = 'block';
    if (lockOverlay) lockOverlay.style.display = 'none';
    if (nav) {
        nav.style.pointerEvents = 'auto';
        nav.style.opacity = '1';
    }
    
    // Show auth gate
    const authGate = document.getElementById('student-auth-gate');
    if (authGate) authGate.style.display = 'flex';
    
    const sessionUser = document.getElementById('session-username');
    if (sessionUser) sessionUser.innerText = `👤 Guest`;
    
    // Clean fields
    document.getElementById('auth-username').value = '';
    document.getElementById('auth-password').value = '';
    
    showSlide(0);
    updateDashboard();
    updateXPBar();
    renderContributionGrid();
};

/* --- Admin Control Center Tabs & Student Tracking --- */
window.switchAdminTab = function(tab) {
    const btnCourses = document.getElementById('btn-admin-tab-courses');
    const btnStudents = document.getElementById('btn-admin-tab-students');
    const contentCourses = document.getElementById('admin-courses-tab-content');
    const contentStudents = document.getElementById('admin-students-tab-content');
    
    if (tab === 'courses') {
        btnCourses.style.background = 'var(--accent-blue)';
        btnCourses.style.color = 'black';
        btnStudents.style.background = 'transparent';
        btnStudents.style.color = 'white';
        
        contentCourses.style.display = 'grid';
        contentStudents.style.display = 'none';
        renderAdminCoursesList();
    } else {
        btnStudents.style.background = 'var(--accent-blue)';
        btnStudents.style.color = 'black';
        btnCourses.style.background = 'transparent';
        btnCourses.style.color = 'white';
        
        contentCourses.style.display = 'none';
        contentStudents.style.display = 'flex';
        renderAdminStudentsList();
    }
};

window.renderAdminStudentsList = function() {
    const container = document.getElementById('admin-students-list-container');
    const selectTarget = document.getElementById('admin-target-student');
    if (!container || !selectTarget) return;
    
    const users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    const userKeys = Object.keys(users);
    
    // Reset Target Dropdown options
    selectTarget.innerHTML = '<option value="">-- Choose Student --</option>';
    
    if (userKeys.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #94a3b8; font-size: 0.85rem; border: 1px dashed rgba(255,255,255,0.1); border-radius: 6px;">
                Abhi tak koi bhi student register nahi hua hai.
            </div>
        `;
        return;
    }
    
    let tableRows = userKeys.map(username => {
        const u = users[username];
        
        // Calculate completion percentage
        const total = slidesData.length;
        let completedCount = 0;
        if (u.completedSlides) {
            Object.keys(u.completedSlides).forEach(k => {
                if (u.completedSlides[k]) completedCount++;
            });
        }
        const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
        
        // Populate target dropdown option
        const opt = document.createElement('option');
        opt.value = username;
        opt.innerText = username;
        selectTarget.appendChild(opt);
        
        const lockBtnText = u.unlocked ? "🔒 Lock Course" : "🔓 Unlock Course";
        const lockBtnBg = u.unlocked ? "#ef4444" : "#10b981";
        const statusBadge = u.unlocked 
            ? `<span style="color:#10b981; font-weight:bold; font-size:0.75rem; background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px;">🔓 Unlocked</span>` 
            : `<span style="color:#ef4444; font-weight:bold; font-size:0.75rem; background:rgba(239,68,68,0.1); padding:2px 6px; border-radius:4px;">🔒 Locked</span>`;
        
        return `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 0.75rem; border-radius: 6px; display: flex; flex-direction: column; gap: 0.5rem; text-align: left; font-size: 0.8rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.25rem;">
                    <span style="font-weight:bold; color:#ffffff; font-size: 0.9rem;">👤 ${username}</span>
                    ${statusBadge}
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem; color:#cbd5e1; font-size: 0.75rem; background:rgba(0,0,0,0.15); padding:0.5rem; border-radius:4px;">
                    <div><b>Name:</b> ${u.fullname || username}</div>
                    <div><b>Mobile:</b> ${u.mobile || 'N/A'}</div>
                    <div><b>Year:</b> ${u.year || 'N/A'}</div>
                    <div><b>Email:</b> ${u.email || 'N/A'}</div>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.5rem; color:#cbd5e1; font-size: 0.75rem;">
                    <div>Level: <span style="color:#c084fc; font-weight:bold;">${u.studentLevel || 1}</span></div>
                    <div>XP: <span style="color:#a855f7; font-weight:bold;">${u.studentXP || 0}</span></div>
                    <div>Progress: <span style="color:#10b981; font-weight:bold;">${pct}%</span></div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.25rem; font-size: 0.75rem;">
                    <span style="color: #94a3b8;">Active Slide: Slide ${(u.currentSlideIndex || 0) + 1}</span>
                    <button onclick="toggleStudentLock('${username}')" class="console-clear-btn" style="background:${lockBtnBg}; border-color:${lockBtnBg}; color:${u.unlocked ? 'white' : 'black'}; padding:0.25rem 0.5rem; font-size:0.7rem; font-weight:bold;">
                        ${lockBtnText}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = tableRows;
};

window.toggleStudentLock = function(username) {
    let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    if (users[username]) {
        users[username].unlocked = !users[username].unlocked;
        localStorage.setItem('codewith_ai_users', JSON.stringify(users));
        renderAdminStudentsList();
        
        // If the targeted student is currently logged in, refresh view instantly
        if (localStorage.getItem('codewith_ai_currentUser') === username) {
            loadStudentSession();
        }
    }
};

window.sendAdminNotification = function() {
    const student = document.getElementById('admin-target-student').value;
    const alertText = document.getElementById('admin-alert-text').value.trim();
    const taskText = document.getElementById('admin-task-text').value.trim();
    const statusDiv = document.getElementById('admin-notif-status');
    
    if (!student) {
        alert("Pehle target student ko select karein!");
        return;
    }
    
    if (!alertText && !taskText) {
        alert("Kripya koi alert message ya homework task enter karein!");
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    if (users[student]) {
        // Initialize notifications blocks if they don't exist
        if (!users[student].adminAlerts) users[student].adminAlerts = [];
        if (!users[student].assignedTasks) users[student].assignedTasks = [];
        
        if (alertText) {
            users[student].adminAlerts.push({
                text: alertText,
                date: new Date().toLocaleDateString(),
                read: false
            });
        }
        
        if (taskText) {
            users[student].assignedTasks.push({
                text: taskText,
                completed: false,
                date: new Date().toLocaleDateString()
            });
        }
        
        localStorage.setItem('codewith_ai_users', JSON.stringify(users));
        
        // Clear inputs
        document.getElementById('admin-alert-text').value = '';
        document.getElementById('admin-task-text').value = '';
        
        if (statusDiv) {
            statusDiv.innerText = `✓ Successfully sent to ${student}!`;
            statusDiv.style.display = 'block';
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 2500);
        }
        
        // If the admin themselves is currently logged in as that student in another tab, update instantly
        if (localStorage.getItem('codewith_ai_currentUser') === student) {
            loadStudentSession();
        }
    }
};

window.checkStudentAlerts = function(forceShow = false) {
    const currentUser = localStorage.getItem('codewith_ai_currentUser');
    if (!currentUser) return;
    
    const users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    const u = users[currentUser];
    if (!u) return;
    
    const alertsContent = document.getElementById('student-alerts-content');
    const tasksContent = document.getElementById('student-tasks-content');
    const alertsModal = document.getElementById('student-alerts-modal');
    
    // Check for alerts
    const alertsList = u.adminAlerts || [];
    const unreadAlerts = alertsList.filter(a => !a.read);
    const alertsToDisplay = forceShow ? alertsList : unreadAlerts;
    
    // Check for assigned tasks
    const tasksList = u.assignedTasks || [];
    
    if (unreadAlerts.length === 0 && tasksList.length === 0 && !forceShow) return;
    
    if (alertsContent) {
        if (alertsToDisplay.length > 0) {
            alertsContent.parentElement.querySelector('h3').style.display = 'block';
            alertsContent.style.display = 'block';
            alertsContent.innerHTML = alertsToDisplay.map(a => `
                <div style="margin-bottom:0.5rem; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:0.5rem;">
                    <span style="font-size:0.7rem; color:var(--accent-blue); display:block; font-weight:bold;">${a.date}</span>
                    <span>${a.text}</span>
                </div>
            `).join('');
        } else {
            if (forceShow) {
                alertsContent.parentElement.querySelector('h3').style.display = 'block';
                alertsContent.style.display = 'block';
                alertsContent.innerHTML = `<div style="color: #94a3b8; font-size:0.8rem;">No messages from instructor.</div>`;
            } else {
                alertsContent.style.display = 'none';
                alertsContent.parentElement.querySelector('h3').style.display = 'none';
            }
        }
    }
    
    if (tasksContent) {
        if (tasksList.length > 0) {
            tasksContent.parentElement.querySelector('h4').style.display = 'block';
            tasksContent.style.display = 'flex';
            tasksContent.innerHTML = tasksList.map((t, idx) => `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="${t.completed ? 'text-decoration: line-through; color:#94a3b8;' : 'color:#ffffff;'}">${idx + 1}. ${t.text}</span>
                    <button onclick="toggleAssignedTaskCompletion(${idx})" class="console-clear-btn" style="background:${t.completed ? '#10b981' : 'transparent'}; border-color:${t.completed ? '#10b981' : 'rgba(255,255,255,0.2)'}; color:${t.completed ? 'black' : 'white'}; padding:0.15rem 0.4rem; font-size:0.7rem; font-weight:bold;">
                        ${t.completed ? "✓ Done" : "Mark Done"}
                    </button>
                </div>
            `).join('');
        } else {
            if (forceShow) {
                tasksContent.parentElement.querySelector('h4').style.display = 'block';
                tasksContent.style.display = 'flex';
                tasksContent.innerHTML = `<div style="color: #94a3b8; font-size:0.8rem;">No assigned tasks.</div>`;
            } else {
                tasksContent.style.display = 'none';
                tasksContent.parentElement.querySelector('h4').style.display = 'none';
            }
        }
    }
    
    if (alertsModal) alertsModal.classList.add('active');
};

window.toggleAssignedTaskCompletion = function(idx) {
    const currentUser = localStorage.getItem('codewith_ai_currentUser');
    if (!currentUser) return;
    
    let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
    if (users[currentUser] && users[currentUser].assignedTasks) {
        const isCompleted = users[currentUser].assignedTasks[idx].completed;
        users[currentUser].assignedTasks[idx].completed = !isCompleted;
        localStorage.setItem('codewith_ai_users', JSON.stringify(users));
        
        // Refresh Alerts list
        checkStudentAlerts();
    }
};

window.closeStudentAlertsModal = function() {
    const currentUser = localStorage.getItem('codewith_ai_currentUser');
    if (currentUser) {
        let users = JSON.parse(localStorage.getItem('codewith_ai_users') || '{}');
        if (users[currentUser] && users[currentUser].adminAlerts) {
            // Mark all alerts as read so it doesn't pop up again next load
            users[currentUser].adminAlerts.forEach(a => a.read = true);
            localStorage.setItem('codewith_ai_users', JSON.stringify(users));
        }
    }
    document.getElementById('student-alerts-modal').classList.remove('active');
};

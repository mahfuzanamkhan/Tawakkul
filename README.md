<p align="center">
  <img src="assets/2.png" alt="Tawakkul Banner" style="max-width:100%; border-radius:12px;">
</p>
  <h1 style="color:#FFD700; font-weight:800; margin:6px 0; font-size:44px; line-height:1.05;">
    Tawakkul — توكل
  </h1>
  <p style="color:#e9e6e0; font-size:18px; margin:6px 0;">
    <strong>Trust. Plan. Achieve.</strong>
  </p>

  <p style="max-width:900px; color:#d5d2cf; margin:14px auto 30px; font-size:15px;">
    A beautiful, modern Islamic dashboard: <strong>99 Names of Allah</strong>, live Hijri & Gregorian dates,
    Ramadan countdown, contextual du'as, geo-based Qibla direction, and real-time prayer times — all in a polished
    gold-accented glassmorphic UI.
  </p>
</div>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">🌟 Features</h2>
<ul style="color:#e6e3e0; line-height:1.8;">
  <li><strong>🟡 99 Names of Allah (Asma ul Husna):</strong> Arabic, transliteration & meaning in an auto-rotating carousel with controls.</li>
  <li><strong>🗓 Hijri & Gregorian Date:</strong> Uses Aladhan API for accurate Hijri conversion and shows the Gregorian date with weekday.</li>
  <li><strong>🌙 Ramadan Countdown:</strong> Dynamic countdown (days, hours, minutes) to the next Ramadan.</li>
  <li><strong>🤲 Contextual Du'a:</strong> Morning / Evening / General dua chosen automatically by time of day (Arabic + transliteration + meaning).</li>
  <li><strong>🧭 Qibla Direction:</strong> Geo-based Qibla angle (falls back to Dhaka coordinates if location permission denied).</li>
  <li><strong>🕌 Prayer Times:</strong> Fetches local prayer timings (Aladhan API), highlights upcoming prayer and shows a live countdown.</li>
  <li><strong>🎨 Dynamic Themes:</strong> Theme shifts for Fajr, Maghrib, and Isha with smooth transitions.</li>
  <li><strong>📱 Responsive:</strong> Mobile-first grid layout; adapts to smaller screens.</li>
</ul>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">📁 Project Structure</h2>
<pre style="background:#0b0b0b; color:#e8e6e2; padding:14px; border-radius:8px; overflow:auto;">
/ (repo root)
├─ index.html        # Main dashboard page (UI + Arabic text)
├─ styles.css        # Styling, themes, responsive layout
├─ script.js         # Logic: carousel, APIs, countdowns, qibla, prayer times
├─ assets/
│  ├─ banner.png     # README / hero banner (optional)
│  └─ screenshot.png # Example UI screenshot (optional)
└─ README.md         # This file
</pre>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">🔧 Technologies & APIs</h2>
<ul style="color:#e6e3e0; line-height:1.8;">
  <li>HTML5, CSS3 (glassmorphism), JavaScript (ES6+)</li>
  <li>Google Fonts (Poppins, Lateef) — used in the website but not embedded in README</li>
  <li>Font Awesome for icons</li>
  <li>APIs:
    <ul style="margin-top:6px;">
      <li><code>https://api.aladhan.com/v1/gToH/DD-MM-YYYY</code> — Hijri conversion</li>
      <li><code>https://api.aladhan.com/v1/qibla/{lat}/{lng}</code> — Qibla direction</li>
      <li><code>https://api.aladhan.com/v1/timings/DD-MM-YYYY?latitude=...&longitude=...&method=7</code> — Prayer times</li>
    </ul>
  </li>
</ul>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">🚀 Quick Start</h2>
<ol style="color:#e6e3e0; line-height:1.8;">
  <li>Clone the repository:
    <pre style="display:inline-block; background:#111; color:#fff; padding:6px 10px; border-radius:6px; margin:6px 0;">git clone &lt;your-repo-url&gt;</pre>
  </li>
  <li>Open <code>index.html</code> directly in your browser for a quick local preview.</li>
  <li>Recommended: use a local server (VS Code → Live Server) for geolocation & API access to behave reliably.</li>
  <li>Optional: Replace the sample banner and screenshot in <code>assets/</code> with your custom images.</li>
</ol>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">🤝 Contributing</h2>
<p style="color:#e6e3e0; line-height:1.6;">
  Contributions, suggestions, and PRs are welcome! Please open issues for bugs or feature requests. If you'd like to add translations (Arabic, Bengali), theming options, or extra features (tasbeeh counter, notifications),
  create a new branch and send a PR.
</p>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">📜 License</h2>
<p style="color:#e6e3e0; line-height:1.6;">MIT &copy; 2025 <strong>Mahfuz Anam Khan</strong></p>

<hr style="border:none; height:1px; background:rgba(255,215,0,0.12); margin:18px 0 28px;">

<h2 style="color:#FFD700;">📬 Author</h2>
<p style="color:#e6e3e0;">
  <strong>Mahfuz Anam Khan</strong><br>
  Links: <a href="https://instagram.com/mahfuzanamkhann" target="_blank">Instagram</a> • <a href="https://github.com/mahfuzanamkhan" target="_blank">GitHub</a> • <a href="https://linkedin.com/in/mahfuzanamkhan" target="_blank">LinkedIn</a>
</p>

<!-- End of README -->

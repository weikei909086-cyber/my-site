# Pi Integration Add‑on (Drop‑in)

This add-on enables the **Sign in with Pi** button on your GitHub Pages site.

## What this contains
- `pi-auth.js` – initializes the Pi SDK and wires up a **Sign in with Pi** button.
- `snippet.html` – shows exactly what to add to your `index.html` (2 script tags and an example button).
- `HOW_TO_USE.txt` – quick step-by-step instructions.

## Requirements
1) You **must** open the site in **Pi Browser** for login to work.
2) In the Pi Developer Portal, under your app:
   - Go to **Settings → App Domains** and add this domain:
     `https://weikei909086-cyber.github.io`
   - Save.

## Quick steps
1) Upload **both** files to your repo’s root (same folder as your `index.html`):
   - `pi-auth.js`
2) In your `index.html`, right before `</body>`, add these lines:
```html
<!-- Pi SDK -->
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<!-- Add-on -->
<script src="./pi-auth.js"></script>
```
3) Ensure your sign-in button has **id="pi-signin"** (or add the example from `snippet.html`).
4) Commit → wait ~1 minute → open your site in **Pi Browser** and click **Sign in with Pi**.

If you already have a sign-in button, just set `id="pi-signin"` on it and skip adding the example button.

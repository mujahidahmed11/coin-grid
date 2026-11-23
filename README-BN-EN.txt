COIN GRID — V2 AESTHETIC UPDATE
================================

FILES
- index.html
- styles.css
- app.js
- favicon.svg

LOGOS ARE BUILT INTO THE CODE
The COIN GRID emblem, hero coin, game category icons, and bKash/Nagad/Rocket-style payment marks are inline SVG in index.html. The browser tab icon is favicon.svg. No separate logo image upload is required.

PUBLISH ON CLOUDFLARE PAGES (ANDROID)
1. Open your GitHub repository: coin-grid.
2. Open index.html → Edit (pencil) → replace all content with the new index.html → Commit changes.
3. Repeat for styles.css and app.js.
4. Add a new file named favicon.svg and paste its content.
5. Cloudflare Pages should automatically deploy after the GitHub commit. Open your Pages project and tap the latest deployment / Visit site.

IMPORTANT — SET YOUR SUPPORT NUMBER
Open app.js and change:
const SUPPORT_NUMBER = "";
to your WhatsApp number with country code and digits only, for example:
const SUPPORT_NUMBER = "8801XXXXXXXXX";
Use your actual number, not the example.

ORDER FLOW
This is a front-end order request that opens WhatsApp. It does not collect payments, verify transactions, store orders in a database, or provide an admin panel. Do not advertise orders as confirmed until you manually confirm them.

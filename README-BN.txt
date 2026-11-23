COIN GRID Premium v2 — mobile update guide

Files: index.html, styles.css, app.js, README-BN.txt

Update your live GitHub project:
1. Open GitHub > coin-grid repository.
2. Open index.html > pencil/Edit > replace all old code with the new index.html code, then Commit changes.
3. Repeat for styles.css and app.js.
4. Cloudflare Pages should automatically deploy after each commit. Wait for the latest deployment to show Success.

Alternative: delete old files and upload these replacement files from this ZIP, then Commit changes.

Free Fire starter package prices are examples; verify your current prices before taking orders.
WhatsApp support: in app.js replace SUPPORT_NUMBER='' with your business WhatsApp number including country code, digits only.

Important: This is still a front-end demo. Orders are not saved to a database, there is no customer login/admin panel yet, and payments are not processed or verified. Do not collect customer PINs, OTPs, or passwords. Never put Supabase service_role keys in browser code.

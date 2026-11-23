COIN GRID — মোবাইল সেটআপ গাইড
================================

এই ZIP-এ একটি responsive website starter আছে:
- index.html: ওয়েবসাইটের কাঠামো
- styles.css: Black + Gold ডিজাইন
- app.js: Game selection ও demo order summary

গুরুত্বপূর্ণ সীমাবদ্ধতা:
এই সংস্করণটি FRONT-END DEMO। Order আপনার ফোন/ব্রাউজারে summary তৈরি করে; সার্ভারে পাঠায় না।
Login/Register, database-এ order save, admin dashboard, live order tracking এবং payment verification এখনো যুক্ত করা হয়নি।
কোনো payment নেওয়ার আগে backend, নিরাপদ admin authentication এবং যাচাইকৃত merchant payment details যুক্ত করতে হবে।
কখনোই bKash/Nagad PIN, OTP বা password ওয়েবসাইটে চাইবেন না।

মোবাইল দিয়ে প্রকাশ করার সহজ উপায়:
1. ZIP extract করুন (Android-এ Files app / ZArchiver দিয়ে)।
2. GitHub-এ account খুলুন: https://github.com
3. GitHub-এ New repository চাপুন। নাম দিন coin-grid, Public, তারপর Create repository।
4. Add file > Upload files দিয়ে index.html, styles.css, app.js তিনটি ফাইল upload করুন। README চাইলে upload করতে পারেন।
5. Commit changes চাপুন।
6. Cloudflare Pages খুলুন: https://dash.cloudflare.com
7. Workers & Pages > Create > Pages > Connect to Git নির্বাচন করুন।
8. GitHub authorize করে coin-grid repository নির্বাচন করুন।
9. Framework preset: None; Build command ফাঁকা; Build output directory: / (root) দিন।
10. Save and Deploy চাপুন। Cloudflare আপনাকে একটি *.pages.dev লিংক দেবে।

Support WhatsApp:
app.js ফাইলে SUPPORT_NUMBER = "" জায়গায় আপনার WhatsApp নম্বর country code-সহ দিন, যেমন 8801XXXXXXXXX (শুধু উদাহরণ)।

নিজস্ব প্যাকেজ ও দাম:
বর্তমানে কোনো দাম hard-code করা হয়নি। আপনার verified price list এবং delivery terms ঠিক করার পর product catalogue ও database যুক্ত করুন।

নিরাপত্তা:
- Supabase service_role key কখনো browser-side JavaScript-এ রাখবেন না।
- Admin role server/database policy দিয়ে enforce করতে হবে; শুধু লুকানো admin button নিরাপত্তা নয়।
- Customer password বা payment PIN/OTP সংগ্রহ করবেন না।
- Game top-up করার আগে সংশ্লিষ্ট publisher-এর নিয়ম ও authorized reseller requirements যাচাই করুন।

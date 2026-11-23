const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
let latestSummary = "";
$("#year").textContent = new Date().getFullYear();

$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
$$(".game-card").forEach(card => card.addEventListener("click", () => {
  $$(".game-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");
  $("#gameSelect").value = card.dataset.game;
  $("#order").scrollIntoView({behavior:"smooth"});
}));
$("#gameSelect").addEventListener("change", () => {
  $$(".game-card").forEach(c => c.classList.toggle("selected", c.dataset.game === $("#gameSelect").value));
});
$("#orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ref = "CG-" + Date.now().toString().slice(-8);
  const data = {
    reference: ref,
    game: $("#gameSelect").value,
    package: $("#package").value.trim(),
    playerId: $("#playerId").value.trim(),
    server: $("#server").value.trim() || "Not provided",
    customer: $("#customer").value.trim(),
    phone: $("#phone").value.trim(),
    payment: $("#payment").value,
    transactionId: $("#trx").value.trim() || "Not provided"
  };
  latestSummary = Object.entries(data).map(([k,v]) => `${k}: ${v}`).join("\n");
  $("#orderSummary").textContent = latestSummary;
  $("#resultDialog").showModal();
});
$("#closeDialog").addEventListener("click", () => $("#resultDialog").close());
$("#copyOrder").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(latestSummary); $("#copyOrder").textContent = "Copied!"; }
  catch { $("#copyOrder").textContent = "Please copy manually"; }
});
$("#ordersBtn").addEventListener("click", () => alert("Order history will be enabled after connecting the secure database."));
// Replace this number with your official WhatsApp support number, including country code, e.g. 8801XXXXXXXXX.
const SUPPORT_NUMBER = "";
$("#supportLink").href = SUPPORT_NUMBER ? `https://wa.me/${SUPPORT_NUMBER}` : "https://wa.me/";

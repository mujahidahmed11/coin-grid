// COIN GRID front-end order request. Set your WhatsApp number below (Bangladesh: 8801XXXXXXXXX).
const SUPPORT_NUMBER = "8801842270356"; // digits only, e.g. 8801XXXXXXXXX

const gameSelect = document.getElementById("game");
const gameCards = document.querySelectorAll(".game-card");
gameCards.forEach(card => card.addEventListener("click", () => {
  gameCards.forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");
  gameSelect.value = card.dataset.game;
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();
  const order = {
    game: gameSelect.value,
    playerId: document.getElementById("playerId").value.trim(),
    server: document.getElementById("server").value.trim() || "Not provided",
    package: document.getElementById("package").value.trim(),
    payment: document.getElementById("payment").value,
    customer: document.getElementById("customer").value.trim()
  };
  const message = `COIN GRID ORDER REQUEST%0A%0AGame: ${encodeURIComponent(order.game)}%0APlayer ID: ${encodeURIComponent(order.playerId)}%0AServer: ${encodeURIComponent(order.server)}%0APackage: ${encodeURIComponent(order.package)}%0APayment: ${encodeURIComponent(order.payment)}%0ACustomer WhatsApp: ${encodeURIComponent(order.customer)}`;
  if (!SUPPORT_NUMBER) {
    alert("Please set SUPPORT_NUMBER in app.js to your WhatsApp number before accepting orders. Your order details are ready, but no message was sent.");
    return;
  }
  window.open(`https://wa.me/${SUPPORT_NUMBER}?text=${message}`, "_blank", "noopener");
});
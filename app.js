const SUPPORT_NUMBER = "8801842270356";
const gameSelect = document.getElementById("gameSelect");
const packageInput = document.getElementById("packageInput");
const selectedPackage = document.getElementById("selectedPackage");
const selectedPrice = document.getElementById("selectedPrice");

document.querySelectorAll(".game-tile").forEach(tile => tile.addEventListener("click", () => {
  document.querySelectorAll(".game-tile").forEach(t => t.classList.remove("active"));
  tile.classList.add("active");
  gameSelect.value = tile.dataset.game;
  if (tile.dataset.game !== "Free Fire") {
    packageInput.value = "";
    packageInput.placeholder = "Enter requested package / amount";
    document.getElementById("topups").scrollIntoView({behavior:"smooth"});
  } else {
    packageInput.placeholder = "Choose a package above";
    document.getElementById("topups").scrollIntoView({behavior:"smooth"});
  }
}));

document.querySelectorAll(".product-card").forEach(card => card.addEventListener("click", () => {
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");
  const pack = card.dataset.package;
  const price = card.dataset.price;
  packageInput.value = `${pack} — ৳${price}`;
  selectedPackage.textContent = pack;
  selectedPrice.textContent = `৳${price}`;
  document.getElementById("support").scrollIntoView({behavior:"smooth",block:"center"});
}));

document.getElementById("membershipTab").addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById("membershipTab").classList.add("active");
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = card.dataset.package.includes("Membership") ? "flex" : "none";
  });
});
document.querySelector(".tab").addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector(".tab").classList.add("active");
  document.querySelectorAll(".product-card").forEach(card => card.style.display = "flex");
});

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".game-tile").forEach(tile => {
    tile.style.display = tile.innerText.toLowerCase().includes(q) ? "" : "none";
  });
});

document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();
  const val = id => document.getElementById(id).value.trim();
  const lines = [
    "COIN GRID ORDER REQUEST",
    `Game: ${gameSelect.value}`,
    `Player ID / UID: ${val("uid")}`,
    `Server: ${val("server") || "Not provided"}`,
    `Package: ${val("packageInput")}`,
    `Payment: ${val("payment")}`,
    `Customer phone: ${val("phone")}`
  ];
  const url = `https://wa.me/${SUPPORT_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
});
document.getElementById("year").textContent = new Date().getFullYear();
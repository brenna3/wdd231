const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline";
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.style.display = "inline";
  closeBtn.style.display = "none";
});
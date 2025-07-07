// scripts.js

// Sparkle on click
document.addEventListener("click", function (e) {
  let sparkle = document.createElement("div");
  sparkle.innerText = "✨";
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});

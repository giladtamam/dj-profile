// ── יצירת חלקיקים מרחפים ברקע ──
(function spawnParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  const colours = ["#e63946", "#f4c542", "rgba(255,255,255,0.5)"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 1;
    const colour = colours[Math.floor(Math.random() * colours.length)];
    Object.assign(p.style, {
      width: size + "px",
      height: size + "px",
      left: Math.random() * 100 + "%",
      bottom: -size + "px",
      background: colour,
      boxShadow: "0 0 " + size * 2 + "px " + colour,
      animationDuration: Math.random() * 10 + 8 + "s",
      animationDelay: Math.random() * 14 + "s",
    });
    container.appendChild(p);
  }
})();

// ── הטיית התקליט בתנועת העכבר (דסקטופ) ──
const diskWrapper = document.getElementById("diskWrapper");
if (diskWrapper) {
  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;
    const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    diskWrapper.style.transform =
      "perspective(1000px) rotateY(" + dx * 10 + "deg) rotateX(" + -dy * 10 + "deg)";
  });
}

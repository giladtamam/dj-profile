// ===================================================
// DJ EREZ DALAL — interactions
// ===================================================

const root        = document.documentElement;
const loader      = document.getElementById('loader');
const pageWrapper = document.querySelector('.page-wrapper');
const container   = document.querySelector('.turntable-container');
const disk        = document.getElementById('disk');

// ── Reveal the page only after the turntable images are decoded ──
const imageSrcs = ['assets/desktop.png', 'assets/disk.png', 'assets/icon.png'];
Promise.all(imageSrcs.map(src => new Promise(resolve => {
  const img = new Image();
  img.onload = img.onerror = resolve;
  img.src = src;
}))).then(() => {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    pageWrapper.classList.add('visible');
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 750);
  }));
});

// Safety net: never let the loader trap the user
setTimeout(() => {
  if (loader.isConnected) {
    pageWrapper.classList.add('visible');
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 750);
  }
}, 6000);

// ── Scale the turntable overlays to match the 900px base design ──
function updateScale() {
  if (!container) return;
  const width = container.getBoundingClientRect().width;
  root.style.setProperty('--scale-factor', width / 900);
}
window.addEventListener('resize', updateScale);
window.addEventListener('DOMContentLoaded', updateScale);
updateScale();

// ── Click the record to pause / resume the endless spin ──
if (disk) {
  disk.addEventListener('click', () => disk.classList.toggle('paused'));
}

// ── Subtle parallax tilt on desktop ──
if (container && window.matchMedia('(pointer: fine)').matches) {
  const hero = document.querySelector('.turntable-hero');
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    container.style.transform =
      `perspective(1200px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg)`;
  });
  hero.addEventListener('mouseleave', () => {
    container.style.transform = '';
  });
}

// ── Floating embers ──
(function spawnEmbers() {
  const box = document.getElementById('embers');
  if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colours = ['#FF1A2E', '#C9A84C', 'rgba(255,255,255,0.5)'];
  for (let i = 0; i < 36; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    const size = Math.random() * 3.5 + 1;
    const colour = colours[Math.floor(Math.random() * colours.length)];
    Object.assign(e.style, {
      width: size + 'px',
      height: size + 'px',
      left: Math.random() * 100 + '%',
      background: colour,
      boxShadow: `0 0 ${size * 2.5}px ${colour}`,
      animationDuration: (Math.random() * 11 + 9) + 's',
      animationDelay: (Math.random() * 14) + 's',
    });
    box.appendChild(e);
  }
})();

// ── Footer year ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

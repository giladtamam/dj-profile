// שנה נוכחית בפוטר
document.getElementById("year").textContent = new Date().getFullYear();

// רקע ניווט בגלילה
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// תפריט נייד
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// חשיפת סקשנים בגלילה
const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".section").forEach((s) => reveal.observe(s));

// טיפול בטופס יצירת קשר (דמו צד-לקוח)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  if (!name || !phone) {
    status.style.color = "#ff6ba6";
    status.textContent = "נא למלא שם וטלפון.";
    return;
  }
  status.style.color = "";
  status.textContent = `תודה ${name}! ההודעה נקלטה ואחזור אליך בהקדם.`;
  form.reset();
});

/* Lush Engineering - main.js
   - Mobile nav toggle
   - Active nav highlighting
   - Footer year
   - Contact form -> WhatsApp
   - Projects gallery filter + lightbox
*/
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Active nav links (desktop + mobile)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const map = {
    "index.html": ["nav-home", "nav-home-m"],
    "about.html": ["nav-about", "nav-about-m"],
    "services.html": ["nav-services", "nav-services-m"],
    "projects.html": ["nav-projects", "nav-projects-m"],
    "contact.html": ["nav-contact", "nav-contact-m"],
  };
  const ids = map[path] || [];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
  });

  // Contact form -> WhatsApp
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = (document.getElementById("name") || {}).value || "";
      const phone = (document.getElementById("phone") || {}).value || "";
      const email = (document.getElementById("email") || {}).value || "";
      const msg = (document.getElementById("message") || {}).value || "";

      if (!name.trim() || !msg.trim()) {
        if (alertBox) {
          alertBox.textContent = "Please fill in your Name and Message.";
          alertBox.classList.add("show");
        }
        return;
      }
      if (alertBox) alertBox.classList.remove("show");

      const lines = [
        "Lush Engineering Website Enquiry",
        "------------------------------",
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        email ? `Email: ${email}` : null,
        "",
        msg,
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join("\n"));
      const wa = `https://wa.me/26773108995?text=${text}`;
      window.open(wa, "_blank", "noopener");
      form.reset();
    });
  }

  // Gallery lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  function closeLb() {
    if (!lb) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    if (lbImg) lbImg.src = "";
  }
  if (lb && lbImg) {
    document.addEventListener("click", (e) => {
      const a = e.target && e.target.closest ? e.target.closest(".g-item") : null;
      if (!a) return;

      // Only on projects page
      if (!document.getElementById("gallery")) return;

      e.preventDefault();
      const href = a.getAttribute("href");
      if (!href) return;

      lbImg.src = href;
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
    });

    if (lbClose) lbClose.addEventListener("click", closeLb);

    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLb();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLb();
    });
  }

  // Gallery filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".g-item");
  if (filterBtns.length && items.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const f = btn.getAttribute("data-filter");
        items.forEach((it) => {
          const cat = it.getAttribute("data-cat");
          const show = f === "all" || cat === f;
          it.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  // Safety: ensure tel/wa links have correct href when using data attributes
  document.querySelectorAll("[data-call]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("tel:")) a.setAttribute("href", "tel:+26773108995");
  });
  document.querySelectorAll("[data-wa]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("https://wa.me/")) a.setAttribute("href", "https://wa.me/26773108995");
  });
})();

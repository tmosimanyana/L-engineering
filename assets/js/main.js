/* Footer year */
(() => {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

/* Mobile menu */
(() => {
  const btn = document.querySelector("[data-menu-btn]");
  const panel = document.querySelector("[data-menu-panel]");
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const isOpen = !panel.classList.contains("hidden");
    panel.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isOpen));
  });
})();

/* Lazy-load images (img[data-src]) */
(() => {
  const imgs = Array.from(document.querySelectorAll("img[data-src]"));
  if (!imgs.length) return;

  const markLoaded = (img) => {
    img.classList.remove("blur-md", "scale-[1.02]");
  };

  if (!("IntersectionObserver" in window)) {
    imgs.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      img.addEventListener("load", () => markLoaded(img), { once: true });
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const img = entry.target;
        const src = img.dataset.src;
        if (!src) return;

        img.src = src;
        img.removeAttribute("data-src");
        img.addEventListener("load", () => markLoaded(img), { once: true });

        obs.unobserve(img);
      });
    },
    { rootMargin: "200px 0px" }
  );

  imgs.forEach((img) => io.observe(img));
})();

/* Gallery filters */
(() => {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const items = Array.from(document.querySelectorAll(".g-item"));
  if (!buttons.length || !items.length) return;

  const setActive = (btn) => {
    buttons.forEach((b) => {
      b.classList.remove("bg-yellow-400", "text-slate-900");
      b.classList.add("hover:bg-slate-50");
    });
    btn.classList.add("bg-yellow-400", "text-slate-900");
    btn.classList.remove("hover:bg-slate-50");
  };

  const filterItems = (cat) => {
    items.forEach((item) => {
      const itemCat = item.getAttribute("data-cat");
      if (cat === "all" || itemCat === cat) item.classList.remove("hidden");
      else item.classList.add("hidden");
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-filter") || "all";
      setActive(btn);
      filterItems(cat);
    });
  });
})();

/* Lightbox */
(() => {
  const links = Array.from(document.querySelectorAll("[data-lightbox]"));
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const closeBtn = document.getElementById("lbClose");
  if (!links.length || !lightbox || !img || !closeBtn) return;

  const open = (src) => {
    img.src = src;
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox.classList.add("hidden");
    img.src = "";
    document.body.style.overflow = "";
  };

  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const href = a.getAttribute("href");
      if (href) open(href);
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

/* Contact form -> WhatsApp */
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");

  const showAlert = (msg, ok = false) => {
    if (!alertBox) return;
    alertBox.classList.remove("hidden");
    alertBox.textContent = msg;
    alertBox.className = ok
      ? "mt-4 p-3 rounded-xl border text-sm font-semibold bg-green-50 border-green-200 text-green-800"
      : "mt-4 p-3 rounded-xl border text-sm font-semibold bg-red-50 border-red-200 text-red-800";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name")?.value || "").trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    if (!name || !message) {
      showAlert("Please fill in your name and message (required).");
      return;
    }

    const lines = [
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      "",
      message
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/26773108995?text=${text}`;
    showAlert("Opening WhatsApp…", true);
    window.open(url, "_blank", "noopener");
  });
})();


(function () {
  "use strict";

  // Year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Active nav highlighting (supports #nav-xxx and #nav-xxx-m ids)
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var map = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "projects.html": "projects",
    "contact.html": "contact",
  };
  var key = map[path];
  if (key) {
    var a = document.getElementById("nav-" + key);
    var am = document.getElementById("nav-" + key + "-m");
    if (a) a.classList.add("active");
    if (am) am.classList.add("active");
  }

  // Gallery filtering
  var gallery = document.getElementById("gallery");
  var filterBtns = document.querySelectorAll(".filter-btn");
  if (gallery && filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        var f = btn.getAttribute("data-filter");
        var items = gallery.querySelectorAll(".g-item");
        items.forEach(function (item) {
          var cat = item.getAttribute("data-cat") || "";
          var show = (f === "all") || (cat === f);
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  // Lightbox (works for .g-item links)
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbClose = document.getElementById("lbClose");

  function openLb(src, alt) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "Image preview";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLb() {
    if (!lightbox || !lbImg) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  if (gallery && lightbox && lbImg) {
    gallery.addEventListener("click", function (e) {
      var link = e.target.closest("a.g-item");
      if (!link) return;
      e.preventDefault();
      var img = link.querySelector("img");
      openLb(link.getAttribute("href"), img ? img.alt : "");
    });
  }
  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLb();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLb();
  });

  // Contact form -> WhatsApp (no backend)
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("name") || {}).value || "";
      var phone = (document.getElementById("phone") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var msg = (document.getElementById("message") || {}).value || "";

      var alertBox = document.getElementById("formAlert");

      if (!name.trim() || !msg.trim()) {
        if (alertBox) {
          alertBox.textContent = "Please fill in your name and message.";
          alertBox.classList.add("show");
        }
        return;
      }
      if (alertBox) alertBox.classList.remove("show");

      var text =
        "Lush Engineering Website Enquiry%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        (phone ? "Phone: " + encodeURIComponent(phone) + "%0A" : "") +
        (email ? "Email: " + encodeURIComponent(email) + "%0A" : "") +
        "%0A" +
        "Message:%0A" + encodeURIComponent(msg);

      // Default WhatsApp number (update if needed)
      var wa = "26773108995";
      window.open("https://wa.me/" + wa + "?text=" + text, "_blank");
    });
  }
})();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function setExpanded(expanded) {
  hamburger?.setAttribute("aria-expanded", expanded ? "true" : "false");
  if (mobileMenu) mobileMenu.hidden = !expanded;
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });

  mobileMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("mobile-link")) {
      setExpanded(false);
    }
  });
}
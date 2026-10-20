const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
  // The menu icon is not a native button, so open it with Enter/Space too.
  bar.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      nav.classList.add("active");
    }
  });
}

if (close) {
  close.addEventListener("click", (e) => {
    // Stop href="#" from jumping the page back to the top.
    e.preventDefault();
    nav.classList.remove("active");
  });
}

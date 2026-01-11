document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const body = document.body;
  const savedTheme = localStorage.getItem("theme") || "light";

  body.classList.remove("light", "dark");
  body.classList.add(savedTheme);

  toggle.checked = savedTheme === "dark";

  toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "dark" : "light";
    body.classList.remove("light", "dark");
    body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

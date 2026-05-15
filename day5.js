document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleBtn");
  const body = document.body;

  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
});
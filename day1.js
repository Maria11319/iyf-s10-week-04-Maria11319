document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("colorBtn").addEventListener("click", () => {
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(h => {
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
      h.style.color = randomColor;
    });
  });
});
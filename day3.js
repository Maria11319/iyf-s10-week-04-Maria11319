document.addEventListener("DOMContentLoaded", () => {
  let hidden = false;
  const btn = document.getElementById("toggleImgBtn");
  
  btn.addEventListener("click", () => {
    const images = document.querySelectorAll("img");
    hidden = !hidden;
    images.forEach(img => img.classList.toggle("hidden", hidden));
    btn.textContent = hidden ? "Show Images" : "Hide Images";
  });
});
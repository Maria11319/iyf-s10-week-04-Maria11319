document.addEventListener("DOMContentLoaded", () => {
  const source = document.getElementById("source");
  const target = document.getElementById("target");
  const copyBtn = document.getElementById("copyBtn");

  copyBtn.addEventListener("click", () => {
    target.innerHTML = source.innerHTML;
  });

  source.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", source.innerHTML);
  });

  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/html");
    target.innerHTML = data;
  });
});
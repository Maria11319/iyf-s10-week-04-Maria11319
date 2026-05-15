document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const container = document.getElementById("paragraphContainer");
  
  document.getElementById("addParaBtn").addEventListener("click", () => {
    count++;
    
    const div = document.createElement("div");
    div.className = "paragraph-item";
    
    const p = document.createElement("p");
    p.textContent = count + ". This is paragraph number " + count;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => div.remove();
    
    div.appendChild(p);
    div.appendChild(delBtn);
    container.appendChild(div);
  });
});
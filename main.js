const header = document.getElementById("main-header");
console.log("1.Header:", header);

const contentParas = document.querySelectorAll(".content");
console.log("2.Content Paragraphs:", contentParas);

const form = document.getElementById("contact-form");
console.log("3.Form:", form);
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.style.color = "red";
});

const email = document.getElementById("email");
console.log("4.Email Input:", email);

const navItems = document.querySelectorAll(".nav-link");
console.log("navItems:", navItems);
document.querySelector("#main-header").textContent = "DOM Manipulation Works!";
header.style.color = "blue";
contentParas[0].textContent = "I changed this with JavaScript!";
email.placeholder = "Enter your email here";
form.style.backgroundColor = "#f0f0f0";
form.style.padding = "10px";
const newItem = document.createElement("li");
const newLink = document.createElement("a");
newLink.textContent = "Blog";
newLink.href = "#";
newLink.localName = "nav-link";
newLink.style.color = "red";
newItem.appendChild(newLink); // fixed spelling

const target = document.querySelector(".nav-list");
if (target) {
  target.appendChild(newItem); // fixed spelling
} else {
  console.log("Element not found. Check your selector");
}

const contactForm = document.querySelector("#contact-form");
const submitBtn = contactForm.querySelector("button[type='submit']");
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  alert("Form submitted!");
});

const pageheader = document.querySelector("header");
const navInsideHeader = pageheader.querySelector("nav"); // fixed variable name

const firstLink = document.querySelector(".nav-link");

if (firstLink) {
  const firstLink = document.querySelector(".nav-link");
  console.log("Task1:", firstLink);

  if (firstLink) {
    const parentLi = firstLink.parentElement;
    console.log("Task2:", parentLi);
  } else {
    console.log("No .nav-link found in HTML");
  }
}

const footer = document.querySelector("footer");
if (footer) {
    const body = footer.parentElement.parentElement;
    console.log("Task5:", body);
}

console.log("JS is running!");

const h1 = document.querySelector("h1");
if (h1) {
    console.log("Original text content:", h1.textContent);
    console.log("Original innerText:", h1.innerText);
    h1.textContent = "New Title";
}

const article = document.querySelector("article"); // only once
article.style.backgroundColor = "#f0f0f0";
article.style.padding = "30px";
article.style.borderRadius = "8px";

Object.assign(article.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

console.log("Original HTML:", article.innerHTML);

article.innerHTML = `
    <h2>Article Title</h2>
    <p>This is the article content.</p>
`;
const userInput = "<script>alert('hack!');</script>";
article.innerHTML = userInput;

const fIrstNavLink = document.querySelector(".nav-link");
console.log("First Nav Link:", fIrstNavLink);

const lastParagraph = document.querySelectorAll("p");
console.log("Last Paragraph:", lastParagraph[lastParagraph.length - 1]);

const ul = document.querySelector(".nav-list");
if (ul) {
    const childLis = ul.children;
    console.log("Task4:", childLis);
} else {
    console.log("Task4: nav-list not found");
}

const links = document.querySelector(".nav-link");

if (firstLink) {
    // Get attribute
    console.log(firstLink.getAttribute("href"));
    console.log(firstLink.href); // Property access

    // Set attribute
    firstLink.setAttribute("href", "https://example.com");
    firstLink.href = "https://example.com"; // Same result

    // Check attribute
    console.log("firstLink.hasAttribute?", firstLink.hasAttribute("target"));

    // Remove attribute
    firstLink.removeAttribute("target");
} else {
    console.log("firstLink not found");
}

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
if (element) {
    console.log("Data ID:", element.dataset.id);        // "123"
    console.log("Data Category:", element.dataset.category);  // "tech"
    element.dataset.newAttr = "value";      // Creates data-new-attr
} 
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
newParagraph.className = "content highligt";

const articleSection = document.querySelector("article");
articleSection.appendChild(newParagraph);
const pageFooter = document.querySelector("footer");    
 pageFooter.remove();

const navMenu = document.querySelector("nav");
if (navMenu) {
    const lastLink = navMenu.querySelector("li:last-child");
    if (lastLink) {
        lastLink.remove();
    }
}
 function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog","/blog");
addNavItem("Portfolio","/portfolio");
const button = document.querySelector("button");
button.textContent = "Click Me";
document.body.appendChild(button);
button.addEventListener("click", () => {
    console.log("Clicked again!");

});
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
button.addEventListener("Mouseenter", () => {
    console.log("Mouse entered button");
    button.style.backgroundColor = "lightblue";
});
button.addEventListener("Mouseleave", () => {
    console.log("Mouse left button");
    button.style.backgroundColor = "";
});
const nameInput = document.querySelector('input[placeholder="Name"]');
const emailInput = document.querySelector('input[placeholder="Enter your email here"]');
nameInput.addEventListener("input", () => {
    console.log("Name input focused");
});
nameInput.addEventListener("blur", () => {
    console.log("Name input lost focus");
});
nameInput.addEventListener("input", (e) => {
    console.log("Typing:", e.target.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted with Name:", nameInput.value, "Email:", emailInput.value);
});
const counterContainer = document.createElement("div");
counterContainer.style.marginTop = "20px";
counterContainer.style.textAlign = "center";

let count = 0;
const display = document.createElement("h2");
display.textContent = count;
display.style.fontSize = "48px";
display.style.marginBottom = "10px";

const btnMinus = document.createElement("button");
btnMinus.textContent = "-";
btnMinus.style.margin = "5px";
btnMinus.style.padding = "10px, 20px";
const btnPlus = document.createElement("button");
btnPlus.textContent = "+";
btnPlus.style.margin = "5px";
btnPlus.style.padding = "10px, 20px";
const btnReset = document.createElement("button");
btnReset.textContent = "+";
btnReset.style.margin = "5px";
btnReset.style.padding = "10px, 20px";
btnPlus.addEventListener("click", () => {
    if (count > 0) {
        count++;
    }
    display.textContent = count;
});
btnMinus.addEventListener("click", () => {
    if (count > 0) {
        count--;

    display.textContent = count;
    }
});
btnReset.addEventListener("click", () => {
    count = 0;
    display.textContent = count;
});
counterContainer.appendChild(display);
counterContainer.appendChild(btnMinus);
counterContainer.appendChild(btnPlus);
counterContainer.appendChild(btnReset);
document.body.appendChild(counterContainer);
document.addEventListener("click", function(e) {
    console.log("Target:", e.target);
    console.log("Current Target:", e.currentTarget);
    console.log("Type:", e.type);
console.log("Position:", e.clientX, e.clientY);
});
document.addEventListener("keydown", function(e) {
    console.log("Key:", e.key);
    console.log("Code:", e.code);
    console.log("Alt Key:", e.altKey);
    console.log("Ctrl Key:", e.ctrlKey);
    console.log("Shift Key:", e.shiftKey);
});
document.addEventListener("keydown", function(e) {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Enter your email here"]');
    if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        alert("Saved!");
    }
    if (e.key === "Escape"){
        nameInput.value = "";
        emailInput.value = "";  
    }
    if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        if (form) form.requestSubmit();
    }
});
const el = document.querySelector("#TaskList");
console.log(el);
if (el) {
    el.addEventListener("click", (event) => {
        console.log("Element clicked:", event.target);
    });
}
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
    
});
document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");

    
});
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Fix the header h1 error
  const header = document.querySelector("#main-header");
  if (header) {
    header.textContent = "DOM Manipulation Works";
  }

  // 2. Nav items
  const navItems = document.querySelectorAll(".nav-link");
  console.log("Nav Items:", navItems);
  if (navItems.length > 0) {
    navItems[0].textContent = "Home Updated";
  }

  // 3. Task List - this fixes line 32
  const taskList = document.querySelector("#TaskList");
  const taskInput = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");

  if (taskList && taskInput && addBtn) {
    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText!== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  } else {
    console.log("TaskList, taskInput, or addBtn not found");
  }

  // 4. Adding to nav-list - this fixes line 32 if you meant the nav
  const navList = document.querySelector(".nav-list");
  if (navList) {
    const newLi = document.createElement("li");
    newLi.innerHTML = '<a href="#" class="nav-link">Contact</a>';
    navList.appendChild(newLi);
  }

});
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

// ONE event listener on the parent ul
taskList.addEventListener("click", function(event) {

  // If delete button clicked — remove the item
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }

  // If the li itself clicked — toggle completed
  else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }

});

// Add new task
addBtn.addEventListener("click", function() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}); 
function showError(input, message) {
  input.classList.add("error");
  const errorElement = document.createElement("span");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  input.parentElement.appendChild(errorElement);
}
function clearError(input) {
  input.classList.remove("error");
  const errorElement = input.parentElement.querySelector(".error-message");
  if (errorElement) errorElement.remove();
}
function isValid(data) {
  return data && data.trim().length > 0;
}
function showSuccess(message) {
  const successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.textContent = message;
  document.body.appendChild(successElement);
  setTimeout(() => successElement.remove(), 3000);
}
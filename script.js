// script.js

// 1. Change text content dynamically
const dynamicText = document.getElementById("dynamic-text");
dynamicText.textContent = "JavaScript DOM Manipulation";

// 2. Modify CSS styles via JavaScript
const styleDemo = document.getElementById("style-demo");
const styleBtn = document.getElementById("style-btn");

styleBtn.addEventListener("click", function () {
  styleDemo.classList.toggle("highlight");
  this.textContent = styleDemo.classList.contains("highlight")
    ? "Remove Highlight"
    : "Change Style";
});

// 3. Add/remove elements on button click
const toggleArea = document.getElementById("toggle-area");
const toggleBtn = document.getElementById("toggle-btn");
const itemList = document.getElementById("item-list");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

// Toggle visibility
toggleBtn.addEventListener("click", function () {
  toggleArea.classList.toggle("hidden");
  this.textContent = toggleArea.classList.contains("hidden")
    ? "Show Content"
    : "Hide Content";
});

// Add new item
addBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

// Remove last item
removeBtn.addEventListener("click", function () {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
  }
});

// Bonus: Change title color on hover
const title = document.getElementById("main-title");
title.addEventListener("mouseover", function () {
  this.style.color = "#4CAF50";
});
title.addEventListener("mouseout", function () {
  this.style.color = "";
});

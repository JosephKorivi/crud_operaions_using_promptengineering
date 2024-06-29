// DOM Elements
const form = document.getElementById("crudForm");
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");

// Array to hold items
let items = [];

// Function to render items
function renderItems() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
        deleteItem(index);
        });
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}

// Function to add an item
function addItem(item) {
    items.push(item);
    renderItems();
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        addItem(newItem);
        itemInput.value = "";
    }
});

const notesContainer = document.querySelector(".notes-container");
const notesButton = document.querySelector('.notes-button button');

let notes = document.querySelectorAll(".input-box");

function showNotes() {
    // Load notes from localStorage
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

function updateStorage() {
    // Save the current notes to localStorage
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes(); // Display saved notes on page load

// Add new note on button click
notesButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "notes-app-img/images/delete.png";
    img.classList.add("delete-button");

    // Append input box and delete icon
    notesContainer.appendChild(inputBox).appendChild(img);
    
    updateStorage(); // Update storage after adding a note
});

// Delete or edit note
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        // Delete the note if delete icon is clicked
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function() {
    // Update storage on note change
    updateStorage();
});

// Prevent adding new lines on Enter press
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

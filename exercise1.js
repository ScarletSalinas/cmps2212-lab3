const buttons = document.querySelectorAll('.color-btn');

// 1. Define a function called changeColor
// Inside it, use 'this' to change the background to 'yellow'
function changeColor() {
    this.style.backgroundColor = "yellow";
}

// 2. Loop through buttons with forEach
// Attach changeColor as the click handler
// add event listener only if buttons exist
if(buttons.length > 0) {
    buttons.forEach(button => {
        buttons.addEventListener("click", changeColor);
    });
} else {
    console.warn("No .color-btn elements found on page.");
}
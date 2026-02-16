// Select all elements with the class 'swatch'
const swatches = document.querySelectorAll('.swatch');

// Define a function that reads this.dataset.color
function changeToDataColor() {
    // Read the data-color attribute value from the clicked element
    const color = this.dataset.color;
    // Apply it as this.style.backgroundColor
    this.style.backgroundColor = color;
}

// Attach the function to every swatch
swatches.forEach(function(swatch) {
    swatch.addEventListener('click', changeToDataColor);
});
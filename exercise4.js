const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error
this.classList.add('active');
});

// Arrow functions do not have their own this. 
// this refers to global window oject, not the box element, and Window.classList doesn't exist, so the code throws and error.
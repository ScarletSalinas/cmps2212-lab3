
const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
// BUG: this.classList.add('active') throws an error
 this.classList.add('active');
});

// The error occurs because arrow functions do not have their own this binding.
// So, this is referring to the global window object and not the .box element, and since 
// window.classList doesn't exist, calling classLis.add() throws an error.

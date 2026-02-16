const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
    event.currentTarget.classList.add('active');
});

// Arrow functions do not have their own this. 
// this refers to global window oject, not the box element, and Window.classList doesn't exist, so the code throws and error.
//event.currentTarget always refers to the element the listener is attached to, in this case, that's .box

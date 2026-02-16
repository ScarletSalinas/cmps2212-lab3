
const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
 event.currentTarget.classList.add('active');
});

// event.currentTarget always refers to the element the event listener is attached to,
// in this case, that's the .box element.




const display = document.querySelector('#count-display');
const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

const CounterApp = {
    count: 0,
    
    increment: function() {
        // increment this.count
        this.count++;
        // update the display span
        display.textContent = this.count;
    },
    
    decrement: function() {
        // decrement this.count
        this.count--;
        // update the display span
        display.textContent = this.count;
    }
};

// Attach increment to #inc-btn using .bind()
if (incBtn) {
    incBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
}

// Attach decrement to #dec-btn using .bind()
if (decBtn) {
    decBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));
}

// error handling if buttons don't exist
if (!incBtn || !decBtn) {
    console.warn('Counter buttons not found on page.');
}

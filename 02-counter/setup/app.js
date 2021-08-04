// set initial value for counter
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// callback function, check which button the user clicked
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        // accessing event object as property of current target
        const styles = e.currentTarget.classList;

        // determine action based on user selection
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }

        // change color based on value
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        // set value to display in text content
        value.textContent = count;
    })
});
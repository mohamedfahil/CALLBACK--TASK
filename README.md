# Countdown Timer with Button Click Event

This project demonstrates a countdown timer that starts from 10 and ends with "Happy Independence Day!" upon clicking a button. The countdown is implemented using JavaScript with callback functions.

## Files

- `index.html`: The main HTML file containing the structure, styles, and script for the countdown timer.

## Code Explanation

### HTML Structure and Styles

- **HTML Elements**:
  - A `<div>` with the `id` "countdown" to display the countdown numbers.
  - A `<button>` with the `id` "btn" that starts the countdown when clicked.

- **CSS Styles**:
  - The styles center the content on the page and style the button for better visual presentation.

### JavaScript Functionality

- **Event Listener for Button**:
  - `let eventelement=document.getElementById("btn");` selects the button element.
  - `eventelement.addEventListener("click",eventfun);` adds a click event listener to the button, which calls the `eventfun` function when clicked.

- **Countdown Function**:
  - `let eventfun=(event)=>{...}` is an arrow function that starts the countdown.
    - `let countdownElement=document.getElementById("countdown");` selects the `div` element to display the countdown.
    - `const countdownNumbers=[10,9,8,7,6,5,4,3,2,1,"Happy Independence Day!"];` defines an array of countdown numbers and the final message.
    - `let displayCountdown=(index)=>{...}` is an arrow function that takes an index as a parameter and updates the `countdownElement` text to the current countdown value.
      - `if(index<countdownNumbers.length){...}` checks if the current index is within the bounds of the array.
      - `countdownElement.innerText=countdownNumbers[index];` updates the text content of the `countdownElement`.
      - `setTimeout(function(){ displayCountdown(index+1); },1000);` calls `displayCountdown` with the next index after a delay of 1 second.
    - `displayCountdown(0);` starts the countdown from the first element of the `countdownNumbers` array.

## How to Run

1. Open the `index.html` file in a web browser.
2. Click the "Start Countdown" button to initiate the countdown timer.
3. The countdown will display numbers from 10 to 1, with each number appearing after a 1-second interval.
4. After reaching 1, the message "Happy Independence Day!" will be displayed.

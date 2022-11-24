const screen = document.getElementById('screen-text');

// Get numbers
let firstNumber = 0;
let secondNumber = 0;

let operator;
let checker = 0;
let answer = ''; //Keep default answer as string and then change datatype to number, to avoid falsey behaviour of 0.

function checkDecimal(nNumber, number) {
            // Check if decimal is already used, if yes don't allow.
            if (number === '.' && String(nNumber).includes('.')) {
                // Do Nothing
            } else if (number === '.') {
                // If decimal is used as the first digit, make it '0.'
                nNumber = String(nNumber) + String(number);
                screen.textContent = nNumber;
            } else if (Number(nNumber) === 0 && !String(nNumber).includes('.') && number === 0 && String(nNumber) === '0') {
                screen.textContent = nNumber;
            } else {
                nNumber = !nNumber ? String(number) : String(nNumber) + String(number);
                screen.textContent = nNumber;
            }
            return nNumber;
}

function showNumber(number) {
    if (!operator) {
        if (typeof answer === 'number') {
            // If answer exists, then erase first number and reset answer for further calculations.
            firstNumber = 0;
            answer = '';
        }
        firstNumber = checkDecimal(firstNumber, number);
    } else {
        secondNumber = checkDecimal(secondNumber, number);
    }
}


function setOperator(op) {
    operator = op;
    if (typeof answer === 'number') {
        firstNumber = answer;    
    }    
    secondNumber = 0;
    answer = '';
}

function calculate() {
    if (secondNumber) {
        switch (operator) {
            case 'add':
                answer = Number(firstNumber) + Number(secondNumber);
                break;
            case 'subtract':
                answer = Number(firstNumber) - Number(secondNumber);
                break;
            case 'multiply':
                answer = Number(firstNumber) * Number(secondNumber);
                break;
            case 'divide':
                answer =  Number(firstNumber) === 0 && Number(firstNumber) === 0 ? 0 : Number(firstNumber) / Number(secondNumber);
                break;
        }
        // Show screen
        screen.textContent = answer;
        // Reset operator
        operator = null;
    }
}

function reset() {
    // Resets Everything
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    answer = '';
    screen.textContent = 0;
}
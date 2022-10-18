// get elements
let display = document.getElementById('display');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let equal = document.getElementById('equal');
let dot = document.getElementById('dot');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clearBtn = document.getElementById('clear');

// aux variables
let currentDisplay = '';
let storedValue = 0;
let operation = -1;  // -1=blank 0=sum, 1=substract, 2=multiply, 3=divide
let result = 0;

// functiones for storing and displaying typed number
function displayZero() {
    currentDisplay += '0';
    display.value = currentDisplay;
}
function displayOne() {
    currentDisplay += '1';
    display.value = currentDisplay;
}
function displayTwo() {
    currentDisplay += '2';
    display.value = currentDisplay;
}
function displayThree() {
    currentDisplay += '3';
    display.value = currentDisplay;
}
function displayFour() {
    currentDisplay += '4';
    display.value = currentDisplay;
}
function displayFive() {
    currentDisplay += '5';
    display.value = currentDisplay;
}
function displaySix() {
    currentDisplay += '6';
    display.value = currentDisplay;
}
function displaySeven() {
    currentDisplay += '7';
    display.value = currentDisplay;
}
function displayEight() {
    currentDisplay += '8';
    display.value = currentDisplay;
}
function displayNine() {
    currentDisplay += '9';
    display.value = currentDisplay;
}
function displayDot() {
    currentDisplay += '.';
    display.value = currentDisplay;
}
function clearDisplay() {
    currentDisplay = '';
    display.value = currentDisplay;
}
function reset() {
    currentDisplay = '';
    storedValue = 0;
    operation = -1;
    display.value = currentDisplay;
    display.placeholder = currentDisplay;
}


// adding click events to buttons
zero.addEventListener('click', displayZero);
one.addEventListener('click', displayOne);
two.addEventListener('click', displayTwo);
three.addEventListener('click', displayThree);
four.addEventListener('click', displayFour);
five.addEventListener('click', displayFive);
six.addEventListener('click', displaySix);
seven.addEventListener('click', displaySeven);
eight.addEventListener('click', displayEight);
nine.addEventListener('click', displayNine);
dot.addEventListener('click', displayDot);
clearBtn.addEventListener('click', clearDisplay);
plus.addEventListener('click', plusFunc);
minus.addEventListener('click', minusFunc);
multiply.addEventListener('click', multiplyFunc);
divide.addEventListener('click', divideFunc);
equal.addEventListener('click', equalFunc);
clearBtn.addEventListener('click', reset);

// operation functions

// can make generic operationButton(thisOperation + - * /) ? can call arguments in function on event ?
function plusFunc() {
    operate(operation);
    operation = 0;                        // stores operation type TO BE MADE
    display.placeholder = storedValue;    // displays result greyed out
    clearDisplay();                       // clears user input
}
function minusFunc() {
    operate(operation);
    operation = 1;
    display.placeholder = storedValue;
    clearDisplay();
}
function multiplyFunc() {
    operate(operation);
    operation = 2;
    display.placeholder = storedValue;
    clearDisplay();
}
function divideFunc() {
    operate(operation);
    operation = 3;
    display.placeholder = storedValue;
    clearDisplay();
}
function equalFunc() {
    operate(operation);
    clearDisplay();
    display.placeholder = storedValue;        // displays result
}


function operate(op) {                      // operates according to stored operation variable
    if (operation == -1) {                  // 1st operation: stores displayed number. 
        storedValue = parseFloat(currentDisplay);
    } else if (currentDisplay != '') {      // following operations: operates and stores result
        switch (op) {
            case 0:
                storedValue += parseFloat(currentDisplay);
                break;
            case 1:
                storedValue -= parseFloat(currentDisplay);
                break;
            case 2:
                storedValue *= parseFloat(currentDisplay);
                break;
            case 3:
                storedValue /= parseFloat(currentDisplay);
                break;
        }
    }
}

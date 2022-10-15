// get elements
let display = document.getElementById('display');
let zero = document.getElementById('0');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let equal = document.getElementById('=');
let dot = document.getElementById('.');
let clearBtn = document.getElementById('clear');

//let nums = [zero, one, two, three, four, five, six, seven, eight, nine]

// aux variables
let currentDisplay = '';
let storedValues = [];
let operation;  // 0=sum, 1=substract, 2=multiply, 3=divide
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
    //storedValues = [];
    display.value = currentDisplay;
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
// minus.addEventListener('click', minusFunc);
equal.addEventListener('click', equalFunc);

// operation functions
function plusFunc() {
    storedValues.push(parseFloat(currentDisplay));  // store displayed number to nums
    clearDisplay();
    display.placeholder = storedValues[storedValues.length - 1];    // displays last input greyed out
    operation = 0;  // 
}

function equalFunc() {
    switch (operation) {
        case 0:
            storedValues.push(parseFloat(currentDisplay));
            console.log(storedValues);
            for (let x of storedValues) {

                result += x;
            }
            display.value = result;
            break;
    }
}


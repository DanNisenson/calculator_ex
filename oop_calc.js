class Memory {
    constructor() {
        this.currentValue = ''
        this.storedValue = ''
        this.currentOperation = -1
    }
}

class ValueBtn {
    constructor(value) {
        this.value = value
    }

    inputValue() {
        memory.currentValue += this.value;
        display.value = memory.currentValue; // do I have to return?
    }
}

class OperationBtn {
    constructor(operation) {
        this.operation = operation
    }
    operate() {
        if (memory.currentOperation == -1) {
            memory.storedValue = parseFloat(memory.currentValue);
        } else if (memory.currentOperation == 0) {
            memory.storedValue += parseFloat(memory.currentValue);
        } else if (memory.currentOperation == 1) {
            memory.storedValue -= parseFloat(memory.currentValue);
        } else if (memory.currentOperation == 2) {
            memory.storedValue *= parseFloat(memory.currentValue);
        } else if (memory.currentOperation == 3) {
            memory.storedValue /= parseFloat(memory.currentValue);
        }
        memory.currentValue = '';
        display.placeholder = memory.storedValue;
        display.value = '';
        memory.currentOperation = this.operation;
    }
}

class SpecialBtn {
    constructor(func) {
        this.func = func;
    }

    equalTo() {

    }

    clearAll() {
        display.value = '';
        display.placeholder = '';
        memory.currentValue = '';
        memory.storedValue = null;
        memory.currentOperation = -1;
    }
}

// Create buttons and memory objects
let btn0 = new ValueBtn('0');
let btn1 = new ValueBtn('1');
let btn2 = new ValueBtn('2');
let btn3 = new ValueBtn('3');
let btn4 = new ValueBtn('4');
let btn5 = new ValueBtn('5');
let btn6 = new ValueBtn('6');
let btn7 = new ValueBtn('7');
let btn8 = new ValueBtn('8');
let btn9 = new ValueBtn('9');
let btnDot = new ValueBtn('.');
let btnPlus = new OperationBtn(0);
let btnMinus = new OperationBtn(1);
let btnMult = new OperationBtn(2);
let btnDiv = new OperationBtn(3);
let btnEqual = new SpecialBtn('equal');
let btnClear = new SpecialBtn('clear');
let memory = new Memory();

// get HTML elements
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
let dot = document.getElementById('dot');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');
let clearBtn = document.getElementById('clear');

// functinons calling btn methods
let val0 = () => btn0.inputValue();
let val1 = () => btn1.inputValue();
let val2 = () => btn2.inputValue();
let val3 = () => btn3.inputValue();
let val4 = () => btn4.inputValue();
let val5 = () => btn5.inputValue();
let val6 = () => btn6.inputValue();
let val7 = () => btn7.inputValue();
let val8 = () => btn8.inputValue();
let val9 = () => btn9.inputValue();
let valDot = () => btnDot.inputValue();
let funcPlus = () => btnPlus.operate();
let funcMinus = () => btnMinus.operate();
let funcMult = () => btnMult.operate();
let funcDiv = () => btnDiv.operate();
let funcEqual = () => btnEqual.equalTo();
let funcClear = () => btnClear.clearAll();

// can't trigger object method from event ??!!
zero.addEventListener('click', val0);
one.addEventListener('click', val1);
two.addEventListener('click', val2);
three.addEventListener('click', val3);
four.addEventListener('click', val4);
five.addEventListener('click', val5);
six.addEventListener('click', val6);
seven.addEventListener('click', val7);
eight.addEventListener('click', val8);
nine.addEventListener('click', val9);
dot.addEventListener('click', valDot);
plus.addEventListener('click', funcPlus);
minus.addEventListener('click', funcMinus);
multiply.addEventListener('click', funcMult);
divide.addEventListener('click', funcDiv);
equal.addEventListener('click', funcEqual);
clearBtn.addEventListener('click', funcClear);

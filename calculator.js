
const allNumbers = document.querySelectorAll(".numbers");
let showOutput = document.querySelector("#input-output-txt");
const allOperators = document.querySelectorAll(".operators");
const clearBtn = document.querySelector("#clear");
const percentageBtn = document.querySelector("#percentage");
const backSpaceBtn = document.querySelector("#backspace");
const negativeNumbersBtn = document.querySelector("#negativeNumbers");
const pointBtn = document.querySelector("#point");
let finalAwnserBtn = document.querySelector("#equals")
let number1,number2,operator;
let operandPressed = false;
let number;
//Get numbers,change of numbers
for(let i = 0;i<allNumbers.length;i++) {
    allNumbers[i].addEventListener("click",function() {
        if(showOutput.textContent.length >= 16) {
            showOutput.textContent = showOutput.textContent;
        }
        else {
            if(operandPressed==false) {
                showOutput.textContent += allNumbers[i].textContent;
                number1 = Number(showOutput.textContent);
                number = "first";
            }
            if(operandPressed==true) {
                showOutput.textContent =" ";
                showOutput.textContent += allNumbers[i].textContent;
                number2 = Number(showOutput.textContent);
                number = "second";
                operandPressed = false;
            }
        }
    })
}
//Get opetarors,change turn of numbers
for(let i = 0;i<allOperators.length;i++) {
    allOperators[i].addEventListener("click",function() {
        showOutput.textContent = allOperators[i].textContent;
        operator = allOperators[i].textContent;
        operandPressed = true;
    })
}

finalAwnserBtn.addEventListener("click",function result() {
    let result;
    result = operate(operator,number1,number2);
    if(result.toString().length>=16)
        showOutput.textContent = parseFloat(result).toFixed(5);
    else
        showOutput.textContent = result;
    number1 = Number(showOutput.textContent);
    operandPressed = false;
})

clearBtn.addEventListener("click",function() {
    showOutput.textContent = "";
    number1 = 0;
    number2 = 0;
    operandPressed = false;
})

percentageBtn.addEventListener("click",function() {
    if(number == "first") {
        showOutput.textContent = showOutput.textContent/100;
        console.log(typeof showOutput.textContent)
        number1 = Number(showOutput.textContent);
    }
    else if(number == "second") {
        showOutput.textContent = showOutput.textContent/100;
        number2 = Number(showOutput.textContent);
    }
})

backSpaceBtn.addEventListener("click",function() {
    showOutput.textContent = showOutput.textContent.slice(0,-1);
})
//Work with negative numbers
negativeNumbersBtn.addEventListener("click",function() {
    if(number == "first") {
        showOutput.textContent = -1*showOutput.textContent;
        number1 = Number(showOutput.textContent);
    }
    else if(number == "second") {
        showOutput.textContent = -1*showOutput.textContent;
        number2 = Number(showOutput.textContent);
    }
})
//Work with floats
pointBtn.addEventListener("click",function() {
    if(Number.isInteger(Number(showOutput.textContent))) {
        console.log("check")
        showOutput.textContent = showOutput.textContent + ".";
        Number(showOutput.textContent);
    }
})

function add(number1,number2) {
    return number1+number2;
}

function multiply(number1,number2) {
    return number1*number2;
}

function subtract(number1,number2) {
    return number1-number2;
}

function divide(number1,number2) {
    if(number2!=0)
        return number1/number2;
    return "Cannot divide by 0";
}

function operate(operator,number1,number2) {
    if(operator == "+")
        return add(number1,number2);
    else if(operator == "*")
        return multiply(number1,number2);
    else if(operator == "-")
        return subtract(number1,number2);
    else if(operator == "/")
        return divide(number1,number2);
}

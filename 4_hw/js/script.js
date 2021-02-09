let answer;
let firstOperand;
let secondOperand;
let confirmation;
let resultOperation;
let history = [];
let arr = [`sum`, `div`, `diff`, `mult`, `sin`,];

do {

    answer = prompt(`Choose the math operation: ${arr}`,``);
    

    do {
        if (answer !== arr[5]) {
            firstOperand = +prompt(`Enter the first number`,``);
        }
    } while (firstOperand !== firstOperand);

    do {
        if (answer !== arr[5] && answer !== arr[4]) {
            secondOperand = +prompt(`Enter the second number`,``);
        }
    } while (secondOperand !== secondOperand);

    switch (answer) {
        case arr[0] :
            resultOperation = sum(firstOperand, secondOperand);   
            history.push(`${arr[0]} = ${resultOperation}`); 
        break;

        case arr[1] :
            resultOperation = div(firstOperand, secondOperand);  
            history.push(`\n${arr[1]} = ${resultOperation}`);  
        break;

        case arr[2] :
            resultOperation = diff(firstOperand, secondOperand); 
            history.push(`\n${arr[2]} = ${resultOperation}`);  
        break; 

        case arr[3] :
            resultOperation = mult(firstOperand, secondOperand);  
            history.push(`\n${arr[3]} = ${resultOperation}`);  
        break;

        case arr[4] :
            resultOperation = sin(firstOperand);   
            history.push(`\n${arr[4]} = ${resultOperation}`); 
        break;

        case arr[5] :
            alert(history);
        break;
    };

    if (answer !== arr[5]) {
        alert(`Operation "${answer}" finished with result "${resultOperation}"`);
    }

    confirmation = confirm(`Do you want to do any more calculations?`);

    if (confirmation && arr.length < 6) {
        arr.push(`history`);
    }

} while (confirmation);


function sum(a, b) {
    return a + b;
};

function diff(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};

function sin(a) {
    return Math.sin(a);
};
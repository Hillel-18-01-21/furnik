
alert(`Hi, my dear friend! Could you do something for me?`);

const first = +prompt(`Enter the first number (any).`, `0`);
const second = +prompt(`Enter the second number (any).`, `0`);

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


const result = `Calculations are finished!
Sum: ${first} + ${second} = ${sum(first, second)}
Diff: ${first} - ${second} = ${diff(first, second)}
Mult: ${first} * ${second} = ${mult(first, second)}
Div: ${first} / ${second} = ${div(first, second)}`;

console.log(result);

alert(result);
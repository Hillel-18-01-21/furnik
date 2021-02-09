
alert(`Hi, my dear friend! Could you do something for me?`);

const first = +prompt(`Enter the first number (any).`, `0`);
const second = +prompt(`Enter the second number (any).`, `0`);

const add = first + second;
const diff = first - second;
const mult = first * second;
const div = first / second;

const result = `Calculations are finished!\nSum: ${first} + ${second} = ${add} \nDiff: ${first} - ${second} = ${diff} \nMult: ${first} * ${second} = ${mult} \nDiv: ${first} / ${second} = ${div}`;

console.log(result);

alert(result);
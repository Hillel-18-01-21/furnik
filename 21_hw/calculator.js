let result;

const set = (number) => {
  result = number;
};

const add = (number) => {
  result += number;
};

const mult = (number) => {
  result *= number;
};

const div = (number) => {
  result /= number;
};

const sub = (number) => {
  result -= number;
};

const getResult = () => {
  return result;
};

const printResult = () => {
  console.log(getResult());
};

module.exports = {
  set,
  add,
  mult,
  div,
  sub,
  getResult,
  printResult,
};

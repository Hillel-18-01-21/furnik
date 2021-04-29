function factorial(number) {
  let result = number;
  while (number > 1n) {
    number--;
    result *= number;
  }
  return result;
}
console.log(factorial(40n));

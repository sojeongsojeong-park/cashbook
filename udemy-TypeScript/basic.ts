function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let phrase = "The Result is... : ";
phrase = "only store string due to type inference";
add(number1, number2, printResult);

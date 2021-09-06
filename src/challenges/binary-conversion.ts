import Stack from "src/structures/stack";

function decimalToBinary(decimalNumber: number) {
  const remStack = new Stack();

  let number = decimalNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}


console.log(decimalToBinary(10));
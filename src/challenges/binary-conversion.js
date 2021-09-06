const Stack = require('../stack/stack-array');

function decimalToBinary(decimalNumber) {
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
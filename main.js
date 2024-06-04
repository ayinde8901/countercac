let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (firstNumber === '') {
    firstNumber = currentInput;
  } else if (secondNumber === '') {
    secondNumber = currentInput;
  }

  operator = op;
  currentInput = '';
}

function clearDisplay() {
  display.value = '';
  currentInput = '';
  operator = '';
  firstNumber = '';
  secondNumber = '';
}

function calculateResult() {
  if (firstNumber === '' || operator === '' || currentInput === '') return;

  secondNumber = currentInput;

  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      return;
  }

  display.value = result;
  firstNumber = result.toString();
  currentInput = '';
  operator = '';
  secondNumber = '';
}
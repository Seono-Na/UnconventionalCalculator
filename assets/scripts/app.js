const defaultResult = 0;
var currentResult = defaultResult;

function getUserInputNumber() {
  return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, enteredNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calDescription);
}

function resetInput() {
  userInput.value = "";
  userInput.focus();
}

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  resetInput();
}
function subtract() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  resetInput();
}
function multiply() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  resetInput();
}
function divide() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  resetInput();
}

resetInput();

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

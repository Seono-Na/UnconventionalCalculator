const defaultResult = 0;
var currentResult = defaultResult;
var logEntries = [];

function getUserInputNumber() {
  return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, enteredNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  preResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    preResult: preResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
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
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}
function subtract() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  resetInput();
  writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  resetInput();
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  resetInput();
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

resetInput();

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

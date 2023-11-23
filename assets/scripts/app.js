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
  userInput.focus();
  userInput.value = "";
}

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  var matchOperator;
  if (calculationType === "ADD") {
    currentResult = currentResult + enteredNumber;
    matchOperator = "+";
  }
  if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    matchOperator = "-";
  }
  if (calculationType === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    matchOperator = "*";
  }
  if (calculationType === "DIVIDE") {
    if (enteredNumber === 0) {
      return;
    }
    currentResult = currentResult / enteredNumber;
    matchOperator = "/";
  }
  createAndWriteOutput(matchOperator, initialResult, enteredNumber);
  resetInput();
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

resetInput();

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

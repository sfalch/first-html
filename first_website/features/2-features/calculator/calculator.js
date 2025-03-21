//--------------------CALCULATOR------------------------------
//https://www.geeksforgeeks.org/javascript-calculator/

let currentInput = "";
let currentOperation = "";
let previousInput = "";

let display = document.getElementById("calc_display");

function appendNumber(number) {
  currentInput += number; //append number to the input
  display.textContent = `${previousInput} ${currentOperation} ${currentInput}`;

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  //the calculations
  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
  console.log(result);
  console.log(prev);
  console.log(current);

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  display.textContent = currentInput;
}

//adding the operation to the string and setting the variables
function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate(); // Calculate the previous operation before appending a new one
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  display.textContent = `${previousInput} ${currentOperation}`;

  console.log(previousInput);
  console.log(currentOperation);
  console.log(currentInput);
}

//reset the display to 0
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  display.textContent = "0";
}

const firstNumberInput = document.getElementById("number1");
const secondNumberInput = document.getElementById("number2");
const resultElement = document.getElementById("result");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.getElementById("clearButton");

function calculate(operation) {
  const firstValue = firstNumberInput.value.trim();
  const secondValue = secondNumberInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    resultElement.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);
  let answer;

  switch (operation) {
    case "add":
      answer = firstNumber + secondNumber;
      break;
    case "subtract":
      answer = firstNumber - secondNumber;
      break;
    case "multiply":
      answer = firstNumber * secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        resultElement.textContent = "Cannot divide by zero.";
        return;
      }
      answer = firstNumber / secondNumber;
      break;
    default:
      resultElement.textContent = "Please choose a valid operation.";
      return;
  }

  resultElement.textContent = `Answer: ${Number(answer.toFixed(10))}`;
}

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.dataset.operation);
  });
});

clearButton.addEventListener("click", () => {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  resultElement.textContent = "Your answer will appear here.";
});

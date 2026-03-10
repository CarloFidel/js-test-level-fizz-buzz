import { fizzBuzz } from "./src/scripts/fizzBuzz.js";
import { validate } from "./src/scripts/validate.js";

const buttonExecute = document.querySelector("#button-execute");
const buttonClean = document.querySelector("#button-clean");

let numbersArray = [];

function execute() {
  const inputValue = document.querySelector("#number").value;
  const result = document.querySelector("#result-container");
  const intentos = document.querySelector("#intents");
  const validateStatus = validate(inputValue);

  if (validateStatus.status === "fail") {
    result.innerHTML = validateStatus.message;
    return;
  }
  const executeResult = fizzBuzz(inputValue);
  result.innerHTML = executeResult.data.output;

  numbersArray.push(executeResult.data.input);
  intentos.innerHTML = "";
  intentos.innerHTML = numbersArray;

  console.log(numbersArray);
}

buttonExecute.addEventListener("click", () => {
  execute();
});
buttonClean.addEventListener("click", () => {
  const inputValue = document.querySelector("#number");
  const result = document.querySelector("#result-container");
  const intentos = document.querySelector("#intents");

  inputValue.value = "";
  intentos.innerHTML = "";
  numbersArray = [];
  result.innerHTML = "";
});

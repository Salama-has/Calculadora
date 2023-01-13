let firstValue = null;
let operator = null;
let waitingForSecondValue = false;
const claves = document.querySelectorAll(".clave");

claves.forEach((clave) => {
  clave.addEventListener("click", (e) => {
    const keyContent = e.target.textContent;
    console.log(keyContent);
    const displayedNum = NumeroIntroducido.textContent;
    console.log(displayedNum);
    // handle number clave clicks
    if (!isNaN(keyContent)) {
      console.log(keyContent);
      if (waitingForSecondValue) {
        NumeroIntroducido.textContent = keyContent;
        waitingForSecondValue = false;
      } else {
        NumeroIntroducido.textContent =
          displayedNum === "0" ? keyContent : displayedNum + keyContent;
      }
    }
    // handle operator clave clicks
    else if (
      keyContent === "+" ||
      keyContent === "-" ||
      keyContent === "×" ||
      keyContent === "÷"
    ) {
      firstValue = parseFloat(displayedNum);
      operator = keyContent;
      waitingForSecondValue = true;
    }
    else if (keyContent === "=") {
      if (firstValue === null || operator === null) {
        return;
      }

      let result;
      const secondValue = parseFloat(displayedNum);

      switch (operator) {
        case "+":
          result = firstValue + secondValue;
          break;
        case "-":
          result = firstValue - secondValue;
          break;
        case "×":
          result = firstValue * secondValue;
          break;
        case "÷":
          result = firstValue / secondValue;
          break;
        default:
          return;
      }

      NumeroIntroducido.textContent = result;
      firstValue = result;
      operator = null;
      waitingForSecondValue = true;
    }
    else if (keyContent === "C") {
      firstValue = null;
      operator = null;
      waitingForSecondValue = false;
      NumeroIntroducido.textContent = 0;
    }
    else if (keyContent === "CE") {
      NumeroIntroducido.textContent = displayedNum.slice(0, -1) || 0;
    }
    else if (keyContent === ".") {
      if (!displayedNum.includes(".")) {
        NumeroIntroducido.textContent = displayedNum + ".";
      }
    }
  });
});

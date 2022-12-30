const buttons = document.querySelectorAll(".button");
const lineOne = document.querySelector(".line");
const lineTwo = document.querySelector(".line2");
const circles = document.querySelectorAll(".circle");
const numbers = document.querySelectorAll("h3");

let linePower = 0;
let buttonOne = buttons[0];
let buttonTwo = buttons[1];
let circleRank = 1;
console.log(numbers);

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (buttons.textContent == "Next") {
      buttonOne.classList.remove("disabled");
      buttonOne.removeAttribute("disabled");
      linePower = linePower + 33;
      lineTwo.style.width = `${linePower}%`;
      circles[`${circleRank}`].classList.add("turn");
      circleRank++;
      console.log(circleRank);
      if (linePower == 99) {
        buttonTwo.setAttribute("disabled", "disabled");
        buttonTwo.classList.add("disabled");
        numbers[3].classList.add("okey");
        numbers[3].innerText = "✓";
        circleRank--;
        console.log(circleRank);
      }
    } else if (buttons.textContent == "Provious") {
      circles[`${circleRank}`].classList.remove("turn");
      circleRank--;
      linePower = linePower - 33;
      lineTwo.style.width = `${linePower}%`;
      buttonTwo.removeAttribute("disabled");
      buttonTwo.classList.remove("disabled");
      numbers[3].innerText = "4";
      numbers[3].classList.remove("okey");
      if (linePower == 0) {
        buttonOne.setAttribute("disabled", "disabled");
        buttonOne.classList.add("disabled");
        circleRank = 1;
      }
    }
  });
});

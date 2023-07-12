const listButtons = Array.from(document.querySelectorAll("button"));
listButtons.forEach((item) => {
  item.addEventListener("click", calculate);
});

function calculate(event) {
  try {
    const calc = document.getElementById("calc");
    const result = document.getElementById("result");

    if (event.target.id === "equal") { 
      result.innerHTML = eval(calc.innerHTML.replace(",", "."));
      return;
    }

    if (event.target.id === "delete") {
      calc.innerHTML = "";
      result.innerHTML = "";
      return;
    }

    calc.textContent += event.target.innerHTML;
  } catch {
    result.innerHTML = "Operação inválida";
  }
}

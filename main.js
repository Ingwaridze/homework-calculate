const range = document.getElementById("Range");
const number = document.getElementById("Number");
const commissionBlock = document.querySelector(".commission-block");

range.addEventListener("input", updateDiagram);
number.addEventListener("input", updateDiagram);

function updateDiagram() {
  const value = range.value;
  const commission = calculateCommission(value);
  const blockHeight = commission * 8;

  commissionBlock.style.height = blockHeight + "px";
  number.value = value;
}

function calculateCommission(value) {
  if (value < 20) {
    return 2;
  } else if (value < 50) {
    return 4;
  } else if (value < 75) {
    return 6;
  } else {
    return 8;
  }
}

updateDiagram();

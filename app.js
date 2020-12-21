let battCap = 0;
let devCon = 0;
let calcResult = 0;

document.querySelector(".calc").addEventListener("click", function () {
  let battCap = document.querySelector(".battCap").value;
  let devCon = document.querySelector(".devCon").value;
  if (battCap && devCon) {
    calcResult = (battCap / devCon) * 0.7;
    return (document.querySelector(".calcResult").value = calcResult);
  }
});

// // document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

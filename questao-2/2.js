// 2) Escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaFib(num) {
  let inputNum = document.getElementById("inputNum");
  num = parseInt(inputNum.value);

  let firstNum = 0;
  let secondNum = 1;
  let result = secondNum;

  while (num > result) {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }

  if (num === firstNum || num === secondNum) {
    let resultMessage = document.getElementById("resultMessage");
    resultMessage.innerHTML = `<p>${num} faz parte da sequência de Fibonacci!</p>`;
  } else if (result === num) {
    resultMessage.innerHTML = `<p>${num} faz parte da sequência de Fibonacci!</p>`;
  } else if (num < 0) {
    resultMessage.innerHTML = `<p>${num} é um número negativo, então não faz parte da sequência de Fibonacci!</p>`;
  } else {
    resultMessage.innerHTML = `<p>${num} <b>não</b> faz parte da sequência de Fibonacci!</p>`;
  }
}

const symbols = document.querySelectorAll('.symbol');
const numbers = document.querySelectorAll('#symbol');
const evaluate = document.querySelector('.evaluate');
const clear = document.querySelector('.clear');
const input = document.querySelector('input');
const removeLastChar = document.querySelector('.delete');
const operators = ["+", "-", "*", "/", "."];
let deleteResult = false;


symbols.forEach(symbol => {
  symbol.addEventListener('click', () => {
    let lastOperator = input.value.slice(-1);
    if(!operators.includes(lastOperator)){
      input.value += symbol.textContent;
    }
  });
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
      if(deleteResult && !operators.includes(input.value.slice(-1))){
        input.value = number.textContent;
        deleteResult = false;
      }
      else{
          input.value += number.textContent;
          deleteResult = false;
      }
    })
});

evaluate.addEventListener('click', () => {
  try {
    input.value = math.evaluate(input.value);
    deleteResult = true;
  } catch (err) {
    input.value = "Eroare";
  }
});

clear.addEventListener('click', () => {
    input.value = "";
});

removeLastChar.addEventListener('click', () => {
  if(input.value.length > 0){
      input.value = input.value.slice(0, - 1);
  }
});


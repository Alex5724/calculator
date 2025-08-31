const symbols = document.querySelectorAll('.symbol');
const numbers = document.querySelectorAll('#symbol');
const evaluate = document.querySelector('.evaluate');
const clear = document.querySelector('.clear');
const input = document.querySelector('input');


symbols.forEach(symbol => {
  symbol.addEventListener('click', () => {
    input.value += symbol.textContent;
  });
});

numbers.forEach(number => {
    number.addEventListener('click', () => {    
        input.value += number.textContent;
    })
});

evaluate.addEventListener('click', () => {
  try {
    input.value = math.evaluate(input.value);
  } catch (err) {
    input.value = "Eroare";
  }
});

clear.addEventListener('click', () => {
    input.value = "";
})



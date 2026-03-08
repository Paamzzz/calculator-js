const display = document.querySelector('#display');
const btns = document.querySelectorAll('.buttons button');

let currentInput = '';
let firstNumber = null;
let operator = null;

btns.forEach(btn => {
     btn.addEventListener('click', () => {
         const type = btn.dataset.type;
         const value = btn.dataset.value;

          if (type === 'number') {
              currentInput += value;
              display.value = currentInput;

          } else if (type === 'operation') {
               if (currentInput === '') return; 

               else if (firstNumber === null ) {
                    firstNumber = Number(currentInput);
               } else {
                    firstNumber = calculate(firstNumber, Number(currentInput), operator)
                    display.value = firstNumber
               }

               operator = value;
               currentInput = ''

          } else if (type === 'action') {
               if (value === 'c') {
                    currentInput = '';
                    firstNumber = null;
                    operator = null;
                    display.value = '';
               } else if (value === '=') {
                    if (firstNumber !== null && currentInput !== '' && operator !== null) {
                         const result = calculate(firstNumber, Number(currentInput), operator);
                         display.value = result;
                    }
               }
          }
     });
});

function calculate(num1, num2, operator) {
     if (operator === '+') return num1 + num2;
     if (operator === '-') return num1 - num2;
     if (operator === '*') return num1 * num2;
     if (operator === '/') return num1 / num2;
}

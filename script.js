const displayValue = document.querySelector('#display').value;
const btns = document.querySelectorAll('.buttons button');

btns.forEach(btn => {
     btn.addEventListener('click', () => {
         let type = btn.dataset.type;
         let value = btn.dataset.value;

          if (type === 'operation') {

          } else if (type === 'number') {
               
          } else {

          }
     });
});

const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach(acc => {
  acc.addEventListener('click', () => {
   acc.parentElement.classList.toggle('active')
  })
}) ;


const btnModal = document.querySelector('.js-open-modal');
const btncloseModal = document.querySelector('.js-close-modal');
const modal = document.getElementById('js-modal');


function openModal(){
 modal.classList.add('active');
}

function closeModal(){
  modal.classList.remove('active');
}


btnModal.addEventListener('click', openModal);
btncloseModal.addEventListener('click', closeModal);

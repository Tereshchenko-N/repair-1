var button = document.querySelector('#btn');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');



button.addEventListener('click', function() {
  modal.classList.add('modal__active');
});

  close.addEventListener('click', function() {
  modal.classList.remove('modal__active');
});

setTimeout(function () {
  modal.classList.remove('modal__active');
}, 5000);


// setTimeout('self.close()', 3000);

// setTimeout(("modal").hide(), 3000);
// 3000



// Закрытие модального окна через 5 секунд 
// работает один раз
// setTimeout(function () {
//   modal.classList.remove('modal__active');
// }, 5000);
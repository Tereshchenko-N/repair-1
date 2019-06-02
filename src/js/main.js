var button = document.querySelector('#btn');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


button.addEventListener('click', function() {
  modal.classList.add('modal__active');
});

close.addEventListener('click', function() {
 modal.classList.remove('modal__active');
});
//Закрытие модального окна через 5 секунд 
setTimeout(function () {
  document.getElementById('modal').style.display = 'none';
}, 5000);
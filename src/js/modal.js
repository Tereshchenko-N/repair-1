$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    modal.addClass('modal__active');
    console.log('123');
  });

  close.on('click', function() {
    modal.removeClass('modal__active');
  });
});


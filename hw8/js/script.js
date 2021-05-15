
$(document).ready(function () {
  $('.description').hide();
  $('.description-container h2').toggle(
    function () {
      $(this).next('.description').slideDown();
      $(this).addClass('close');
    },
    function () {
      $(this).next('.description').fadeOut();
      $(this).removeClass('close');
    }
  );
});
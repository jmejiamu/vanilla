$(document).ready(function () {
    $('.answer').hide();
    $('.description-container h2').toggle(
        function () {
            $(this).next('.answer').slideDown();
            $(this).addClass('close');
        },
        function () {
            $(this).next('.answer').fadeOut();
            $(this).removeClass('close');
        }
    ); // end toggle
}); // end ready
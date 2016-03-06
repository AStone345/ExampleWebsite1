$( document ).ready(function() {
    $('#coffee-slider').carousel();

    $('.carousel-control.left').click(function(e) {
        e.preventDefault();
        $('#coffee-slider').carousel('prev');
    });

    $('.carousel-control.right').click(function(e) {
        e.preventDefault();
        $('#coffee-slider').carousel('next');
    });
});
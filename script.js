$(function () {
    $("#menu-icon").click(function () {
        $("#menu-icon").hide();
        $("#menu").fadeIn();
    });

    $("#close").click(function () {
        $("#menu").fadeOut();
        $("#menu-icon").fadeIn();
    });

    $('header a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });


                     
});
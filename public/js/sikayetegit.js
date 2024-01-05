$(document).ready(function() {
    $('a[href^="/views/profile.html#sikayetlerim"]').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        var $target = $(target);
        // Sayfanın belirli bir bölümüne yumuşak bir şekilde kaydır
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },1500, 'swing', function() {
            window.location.hash = target;
        });
    });
});


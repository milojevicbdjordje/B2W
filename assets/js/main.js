$(function(){
    var $window = $(window);

    $('section[data-type="background"]').each(function(){

        var $bgobj = $(this); // assigning the object

        $(window).scroll(function(){

            // scroll the background at var speed.
            // the yPos has negative value because we're scrolling it up.

            var yPos = -( $window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';
            
            $bgobj.css({backgroundPosition: coords});
        });
    });
});
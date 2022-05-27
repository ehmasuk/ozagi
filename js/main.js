
// owl carousel
$(document).ready(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            nav:true,
            smartSpeed:1000,
            animateOut:'',
            animateIn:'',

            
            responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                            dots:false,
                        },
                        600:{
                            items:1,
                            nav:false,
                        },
                        1000:{
                            items:1,
                            nav:false,
                        }
                    }
        });
        
        });
});


// magnefic popup
// magnefic popup

    // image ar jonno
    $('.image-gallery-one').magnificPopup({
        type: 'image',
            gallery:{
                enabled:true
            }
        
    });
    // iframe ar jonno
    $('.single-video').magnificPopup({
        type: 'iframe',
            gallery:{
                enabled:true
            }
        
    });


// animate js init
new WOW().init();



// preoader scrips
$(document).ready(function(){
    $(window).on("load", function(){
        $(".preloader-section").fadeOut()
    });
});









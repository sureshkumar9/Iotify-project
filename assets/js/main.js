$('.center').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '10px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '75px',
                slidesToShow: 1
            }
        }
    ]
});
//image slider
$('.card_six').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
});
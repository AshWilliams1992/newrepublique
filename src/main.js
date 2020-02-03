var $slideCont = $("#container .banners");

$(function () {

    console.clear();

    $slideCont.on('init', () => {
        $(".slick-arrow").remove();
        mouseWheel()
    }).slick({
        dots: true,
        vertical: true,
        cssEase: 'ease-out',
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    openMenu();

});

function openMenu() {

    var ow = $(window).innerWidth;

    $("#ham").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $("aside").toggleClass("open");
    });
}

function mouseWheel() {
    $(window).on('wheel', {
        $slideCont: $slideCont
    }, onWheel)
}

function onWheel(event) {

    var $sliderData = event.data.$slideCont;
    var delta = event.originalEvent.deltaY;

    if (delta > 0) {
        $sliderData.slick('slickNext')
    }
    else {
        $sliderData.slick('slickPrev')
    }
}
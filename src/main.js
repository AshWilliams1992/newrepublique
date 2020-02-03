function init() {
    console.clear();

    //AOS.init();

    createSlider();
}

function createSlider() {
    var highSlide = new fullpage('#container .banners', {
        licenseKey: 'YOUR KEY HERE'
    });
}

//-- Window load events
window.onload = init();

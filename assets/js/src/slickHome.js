var $     = require('jquery');
var slick = require('slick-carousel');

module.exports = function () {
    var $slider = $('.hpSlider');

    $slider.slick({
        slidesToShow  : 1,
        slidesToScroll: 1,
        dots          : true,
        infinite      : true,
        speed         : 300
    });
}

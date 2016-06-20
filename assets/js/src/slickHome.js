var $     = require('jquery');
var slick = require('slick-carousel');

module.exports = function () {
    $('.hpSlider').slick({
        slidesToShow  : 1,
        slidesToScroll: 1,
        dots          : true,
        infinite      : true,
        speed         : 300,
        centerMode    : true
    });
}

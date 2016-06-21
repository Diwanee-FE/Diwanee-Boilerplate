var $     = require('jquery');
var slick = require('slick-carousel');

module.exports = function (slideElement, dotsContainer, visibleTag, visibleTitle, slideTag, slideTitle) {
    var $slideElement = $(slideElement);
    var $slideTag     = $(visibleTag);
    var $slideTitle   = $(visibleTitle);

    $slideElement.on('init afterChange', setText);

    $slideElement.slick({
        slidesToShow  : 1,
        slidesToScroll: 1,
        dots          : true,
        dotsClass     : dotsContainer,
        infinite      : true,
        speed         : 300,
        centerMode    : true
    });


    //------------PLACE ACTIVE ITEM TEXT INTO STATIC TEXT WRAPPER
    function setText () {
        var $activeSlide = $slideElement.find('.slick-active');

        var activeTag    = $activeSlide.data('tag');
        var activeTitle  = $activeSlide.data('title');
        var activeHref   = $activeSlide.data('href');

        $slideTag.text(activeTag);
        $slideTitle.text(activeTitle).attr('href', activeHref);
    }
}

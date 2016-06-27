var slickSliderHP = require('./src/slickHome');
var stickySocial  = require('./src/stickySocial');



slickSliderHP('.hpSlider', '.hpSlider__dotsContainer', '.hpSlider__tag', '.hpSlider__title', '.hpSlider__slideTag', '.hpSlider__slideTitle');

stickySocial('.sticky-social', 10); //#1 argument: sticky element; #2 distance from top when scrolling down

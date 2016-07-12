var slickSliderHP = require('./src/slickHome');
var search = require('./src/search');

slickSliderHP('.hpSlider', '.hpSlider__dotsContainer', '.hpSlider__tag', '.hpSlider__title', '.hpSlider__slideTag', '.hpSlider__slideTitle');

search('.search__content', '.search__button', '.open');
//#1 input class; #2 button class; #3 class that opens the input

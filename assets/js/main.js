var slickSliderHP = require('./src/slickHome');
var sticky = require('./src/sticky');

slickSliderHP('.hpSlider', '.hpSlider__dotsContainer', '.hpSlider__tag', '.hpSlider__title', '.hpSlider__slideTag', '.hpSlider__slideTitle');

sticky('.sticky', 20, false);
// #1 sticky element class #2 top when sticky is fixed, #3 true: sticky is on the right || #false sticky is on the left

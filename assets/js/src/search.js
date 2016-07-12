/****************************
***********************SEARCH
****************************/

var $ = require('jquery');

module.exports = function (searchContent, searchButton, openClass) {

    var $searchContent = $(searchContent);
    var $searchButton  = $(searchButton);

    var $searchButtonW = $searchButton.outerWidth();

    var $searchContentRight = $searchContent.css('right', $searchButtonW);

    $searchButton.on('click', function() {
        $searchContent.toggleClass('open');
        console.log('ksdafhjasdfk');
    });
}

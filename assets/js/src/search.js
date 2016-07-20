/****************************
***********************SEARCH
****************************/

var $ = require('jquery');

module.exports = function (searchContent, searchButton, openClass) {

    var $searchContent = $(searchContent);
    var $searchButton  = $(searchButton);

    var searchButtonW = $searchButton.outerWidth() - 2; // overlaping border therefore minus two    

    $searchButton.on('click', function() {
        $searchContent.toggleClass('open');
        $searchContent.css('right', searchButtonW)
    });
}

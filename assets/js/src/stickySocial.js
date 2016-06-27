/****************************
******* STICKY-SOCIAL on left
****************************/

var $ = require('jquery');

module.exports = function (sticky, distance) {
    var $window = $(window);
    var wST;

    var $sticky               = $(sticky);
    var $stickyContainer      = $sticky.parent();
    var stickyH               = $sticky.outerHeight();
    var stickyContainerOffset = $stickyContainer.offset().top;
    var limit                 = stickyContainerOffset + $stickyContainer.outerHeight();

    function scrollItSticky () {
        wST = $window.scrollTop();

        if (wST >= stickyContainerOffset - distance && wST <= limit - stickyH - distance) {
            $sticky.css({
                'position': 'fixed',
                'top'     : distance,
                'bottom'  : 'auto'
            });
        } else if (wST > limit - stickyH - distance) {
            $sticky.css({
                'position': 'absolute',
                'bottom'  : 0,
                'top'     : 'auto'
            });
        } else {
            $sticky.css('position', 'static');
        }
    }

    $window.on('load scroll resize', scrollItSticky);
}

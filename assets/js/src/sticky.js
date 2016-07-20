/****************************
*************** STICKY element
****************************/

var $ = require('jquery');

module.exports = function (sticky, distance, right) {
    right = right || false;

    var $window = $(window);
    var wST;

    var $sticky       = $(sticky);
    var $stickyParent = $('.stickyParent');

    var stickyH;
    var stickyParentOffset;
    var limit;

    // ON LOAD GET OFFSET / HEIGHT
    $window.on('load', function () {
        stickyH            = $sticky.outerHeight();
        stickyParentOffset = $stickyParent.offset().top;
        limit              = stickyParentOffset + $stickyParent.outerHeight();
        stickyWidth        = $sticky.outerWidth();
        leftEdge           = $stickyParent.offset().left;
        leftEdgeParent     = $stickyParent.outerWidth();
        contentLeftEdge    = leftEdge + leftEdgeParent;
    });

    //IF STICKY IS RIGHT THEN LOAD THESE VARIABLES
    if (right) {
        rightLimit      = stickyParentOffset + $stickyParent.height();
    }

    //FN SCROLLITSTICKY()
    function scrollItSticky () {
        wST = $window.scrollTop();

        if (wST >= stickyParentOffset - distance && wST <= limit - stickyH - distance) {
            if (!right) {
               $sticky.css({
                   'position': 'fixed',
                   'top'     : distance,
                   'bottom'  : 'auto',
                   'left'    : leftEdge - stickyWidth
               });
           } else {
               $sticky.css({
                   'position': 'fixed',
                   'top'     : distance,
                   'right'   : 'auto',
                   'bottom'  : 'auto',
                   'left'    : contentLeftEdge
               });
           }
       } else if (wST > limit - stickyH - distance) {
           if (!right) {
               $sticky.css({
                   'position': 'absolute',
                   'bottom'  : 0,
                   'top'     : 'auto',
                   'left'    : -stickyWidth
               });
           } else {
               $sticky.css({
                   'position': 'absolute',
                   'top'     : 'auto',
                   'right'   : 0,
                   'bottom'  : 0,
                   'left'    : leftEdgeParent
               });
           }
       } else {
           if (!right) {
               $sticky.css({
                   'position': 'absolute',
                   'top'     : 0,
                   'left' : '-60px'
               });
           } else {
               $sticky.css({
                   'position': 'absolute',
                   'top'     : 0,
                   'right'   : 0,
                   'left'    : leftEdgeParent
               });
           }
       }
    }

    $window.on('load scroll resize', scrollItSticky);
}

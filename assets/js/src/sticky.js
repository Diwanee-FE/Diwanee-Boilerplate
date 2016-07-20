/****************************
*************** STICKY element
****************************/

var $ = require('jquery');

module.exports = function (sticky, distanceFromTop, right) {
    right = right || false;

    const $window       = $(window);
    const $sticky       = $(sticky);
    const $stickyParent = $('.stickyParent');

    let wST;             // Window Scroll Top

    let stickyHeight;    // Sticky element outer height
    let stickyWidth;     // Sticky element outer width

    let parentWidth;     // Sticky element parent width
    let parentHeight     // Sticky element parent height
    let parentOffsetTop; // Sticky element parent offset Top
    let parentLeftEdge;  // Sticky element parent left edge
    let parentRightEdge; // Sticky element parent right edge

    let bottomLimit;     // Bottom bottomLimit so which the sticky element will go

    /*
    * On Window load, get the dimensions of the $sticky, $parent and offsets
    */
    $window.on('load', function () {
        stickyHeight    = $sticky.outerHeight();
        stickyWidth     = $sticky.outerWidth();

        parentWidth     = $stickyParent.outerWidth();
        parentHeight    = $stickyParent.outerHeight();
        parentOffsetTop = $stickyParent.offset().top;
        parentLeftEdge  = $stickyParent.offset().left;
        parentRightEdge = parentLeftEdge + parentWidth;

        bottomLimit     = parentOffsetTop + parentHeight;
    });

    //FN SCROLLITSTICKY()
    function scrollItSticky () {
        wST = $window.scrollTop();

        if (wST >= parentOffsetTop - distanceFromTop && wST <= bottomLimit - stickyHeight - distanceFromTop) { // Scroll position is within the borders of the sticky parent
            if (!right) {
               $sticky.css({
                   'position': 'fixed',
                   'top'     : distanceFromTop,
                   'bottom'  : 'auto',
                   'left'    : parentLeftEdge - stickyWidth
               });
           } else {
               $sticky.css({
                   'position': 'fixed',
                   'top'     : distanceFromTop,
                   'right'   : 'auto',
                   'bottom'  : 'auto',
                   'left'    : parentRightEdge
               });
           }
       } else if (wST > bottomLimit - stickyHeight - distanceFromTop) { // Scroll position is on the bottom of the sticky parent
           if (!right) {
               $sticky.css({
                   'position': 'absolute',
                   'top'     : 'auto',
                   'bottom'  : 0,
                   'left'    : -stickyWidth
               });
           } else {
               $sticky.css({
                   'position': 'absolute',
                   'top'     : 'auto',
                   'right'   : 0,
                   'bottom'  : 0,
                   'left'    : parentWidth
               });
           }
       } else { // Scroll is on top or above the sticky parent
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
                   'left'    : parentWidth
               });
           }
       }
    }

    $window.on('load scroll resize', scrollItSticky);
}

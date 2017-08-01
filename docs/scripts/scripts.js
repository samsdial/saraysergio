/** Countdown Timer **/

$(document).ready(function() {
    "use strict";
    $("#countdown").countdown({
        date: "17 December 2017 13:00:00", /** Enter new date here **/
        format: "on"
    },
    function() {
        // callback function
    });
    var theForm = document.getElementById( 'theForm' );
    new stepsForm( theForm, {
        onSubmit : function( form ) {
            // hide form
            classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

            /*
            form.submit()
            or
            AJAX request (maybe show loading indicator while we don't have an answer..)
            */

            // let's just simulate something...
            var messageEl = theForm.querySelector( '.final-message' );
            messageEl.innerHTML = 'Has confirmado <br> ¡Gracias! Nos veremos pronto. <div class="col-xs-12 text-center mg_bottom--x20 hidden-xs hidden-sm"><div class="title mg_bottom--x20 cl--blue"><h4 class="txt_upper">Solo nos falta recordarte</h4></div><span class="inblock mg_left--x10 mg_right--x10"><span class="cube circle bgc--blue pd_box_cube--02em"><i class="icon-garp cl--white txt_size--x35"></i></span><p>Traje Formal</p></span><span class="inblock mg_left--x10 mg_right--x10"><span class="cube circle bgc--blue pd_box_cube--02em"><i class="icon-mail cl--white txt_size--x35"></i></span><p>Lluvia de sobres</p></span></div>';
            classie.addClass( messageEl, 'show' );
        }
    });
    new Photostack( document.getElementById( 'photostack-2' ), {
        callback : function( item ) {
            //console.log(item)
        }
    } );
});
(function() {
    var docElem = window.document.documentElement, didScroll, scrollPosition;

    // trick to prevent scrolling when opening/closing button
    function noScrollFn() {
        window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
    }

    function noScroll() {
        window.removeEventListener( 'scroll', scrollHandler );
        window.addEventListener( 'scroll', noScrollFn );
    }

    function scrollFn() {
        window.addEventListener( 'scroll', scrollHandler );
    }

    function canScroll() {
        window.removeEventListener( 'scroll', noScrollFn );
        scrollFn();
    }

    function scrollHandler() {
        if( !didScroll ) {
            didScroll = true;
            setTimeout( function() { scrollPage(); }, 60 );
        }
    };

    function scrollPage() {
        scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
        didScroll = false;
    };

    scrollFn();

    var el = document.querySelector( '.morph-button' );

    new UIMorphingButton( el, {
        closeEl : '.icon-close',
        onBeforeOpen : function() {
            // don't allow to scroll
            noScroll();
        },
        onAfterOpen : function() {
            // can scroll again
            canScroll();
            // add class "noscroll" to body
            classie.addClass( document.body, 'noscroll' );
            // add scroll class to main el
            classie.addClass( el, 'scroll' );
        },
        onBeforeClose : function() {
            // remove class "noscroll" to body
            classie.removeClass( document.body, 'noscroll' );
            // remove scroll class from main el
            classie.removeClass( el, 'scroll' );
            // don't allow to scroll
            noScroll();
        },
        onAfterClose : function() {
            // can scroll again
            canScroll();
        }
    } );
})();


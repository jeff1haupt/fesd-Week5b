$( function() {

    // syntax for calling elements in jQuery
    // console.log($('div'));
    // console.log($('.shadow'))
    // console.log($('#card1'));
    // console.log($( "input[value='Sample']" ));
    // console.log($( 'div.card img'));

    let card1 = $('#card1');
    let card2 = $('#card2');
    let card3 = $("#card3");

    function toggleThis() {
        card1.toggleClass("shadow");
    }

    
    
    $("#buttonChange").hover( function() {
        card1.animate({
            opacity: 0.25,
            left: "+=500",
            height: "toggle"
          }, 5000, function() {
            // Animation complete.
          });
        card2.slideDown("slow");
    });

    $("#buttonChange").on( "mouseout", function() {
        card1.toggleClass("shadow").addClass('card');
    });
       
    

    // if ( card2.hasClass("shadow") ) {
    //     card2.addClass('changeCard');
    // }

})
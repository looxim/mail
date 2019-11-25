
$( document ).ready(function() {

    $('.input-item__cache').mouseover(function(){
        $(this).switchClass( 'input-item__cache_closed', 'input-item__cache_opened', 1000, 'easeInOutQuad' );

    });

    $('.input-item').mouseleave(function(){
        if($(this).children('.input-item__field').val()=="")
        {
            $(this).children('.input-item__cache').switchClass( 'input-item__cache_opened', 'input-item__cache_closed', 1000,'easeInOutQuad' );
        }
    });

    $('.textarea-item__cache').mouseover(function(){
        $(this).switchClass( 'textarea-item__cache_closed', 'textarea-item__cache_opened', 1000, 'easeInOutQuad' );
        $(this).prev('.textarea-item__field').switchClass('textarea-item__field_closed', 'textarea-item__field_opened', 1000, 'easeInOutQuad' );

    });
    $('.textarea-item').mouseleave(function(){
        if($(this).children('.textarea-item__field').val()=="")
        {
           $(this).children('.textarea-item__field').switchClass( 'textarea-item__field_opened', 'textarea-item__field_closed', 1000, 'easeInOutQuad' ); 
           $(this).children('.textarea-item__cache').switchClass( 'textarea-item__cache_opened', 'textarea-item__cache_closed', 1000, 'easeInOutQuad' );
        }
       
    });




    $( function(){
        $(".puzzle_piece4").draggable({ containment: "parent" });
    });

    $( document ).on( "mousemove", function( event ) {
        var posdraggable=$(".puzzle_piece4").position();
        var poscible =$(".puzzle_piecetransparente").position();
        var ciblex=poscible.left;
        var cibley=poscible.top;
        //$( ".piece_puzzle5" ).text( "X: " + posdraggable.left + ", Y: " + posdraggable.top + ", dX: " + poscible.left + ", dY: " + poscible.top );
        if(posdraggable.left>ciblex-3 && posdraggable.left<ciblex+3 && posdraggable.top>cibley-3 && posdraggable.top<cibley+3)
        {
            $(".puzzle_piece4").css("filter","sepia(100%)");
            $(".puzzle_piece4").position({left :ciblex, top:cibley});
            //$(".piece_puzzle5").removeAttr("draggable");
            $( "#form__mail" ).submit();
            
        }
    });

});
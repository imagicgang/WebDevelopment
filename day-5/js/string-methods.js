function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} 

/*
    String
    replace
    substring vs substr
*/

var superheroQuote = "With great power comes great responsibility";
log( superheroQuote.replace ( "responsibility", "elictricity bill" ) );
log( superheroQuote );

superheroQuote = superheroQuote.replace( "responsibility", "elictricity bill" );
log(superheroQuote);

var sub = superheroQuote.substring( 5, 16 );
log(sub);
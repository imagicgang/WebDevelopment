function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

var a = document.getElementById('btn');
a = addEventListener( 'mouseover', function() {
    log( "You have moved the mouse on the button" );
});
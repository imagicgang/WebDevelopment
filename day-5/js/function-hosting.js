function log(message) {
    var messageDiv = document.getElementById( 'message' );
  	messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

function sum() {
    for (var i = 0, result = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }
    return result;
}

log(sum(1, 2, 3, 4)) //10
log(sum(1, 2, 3, 4, 5, 6, 7)) //28
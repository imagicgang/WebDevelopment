function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

function findMax( a, b, c ) {
    return Math.max(a, b, c);
}

log( findMax(4, -5, 9) );
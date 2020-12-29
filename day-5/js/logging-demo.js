function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

log('hello');
log('world');
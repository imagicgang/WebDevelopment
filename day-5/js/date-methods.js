function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} 

var d = new Date(); //represent the current date
log(d);

log( d.getDate() );
log( d.getFullYear() );

var newDate = d.getDate() + 1;
d.setDate(newDate);

log(d)
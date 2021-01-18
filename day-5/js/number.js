function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} 

/*
Number 
toPrecision vs toFixed
parseInt vs parseFloat
*/

var price = 1.2355
log( price.toFixed(2) ); //only after the decimal point

log( price.toPrecision(4) ); // include before and after decimal point
function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} 

/*
Number 
toPrecision vs toFixed
parseInt vs parseFloat
*/

document.getElementById('btnCalc').addEventListener( 'click', function() {
    var qt = document.getElementById( 'quantity' );
    var qtVal = parseFloat( qt.value )
    log(typeof qt.value);
    var price = 22.25;
    var netAmount = price * qtVal;
    document.getElementById('final-amount').innerHTML = netAmount; 
});
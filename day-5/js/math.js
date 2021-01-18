function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} 

/*
    Math
    random, max, min, round, ceil, floor
*/

var result;

result = Math.random(); // generate a random number between 0 and 1
log(result);

function generateRandom( a, b ) {
    return a + (b - a) * Math.random();
}

log( generateRandom(100, 200) );

log( Math.max(3, 8, 10, -6, 8, -10, 8, 18) );
log( Math.min(3, 8, 10, -6, 8, -10, 8, 18) );

var arr = [ 3, 8, 10, -6, 8, -10, 8, 18 ];
log( 'Output of Math.max.apply : ' + Math.max.apply(null , arr) );

log(Math.round(3.4655));
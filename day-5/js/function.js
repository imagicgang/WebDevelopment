function log(message) {
	var messageDiv = document.getElementById( 'message' );
  	messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

function foo() {
log( 'foo was called' );
}

var result = foo(); // foo will return undefined
log(result);

//function declaration syntex
function sum( a, b ) {
	return a + b;
}

result = sum( 1, 2 );
log(result);

// function expression syntex to create functions
var addition = function(a,b) {
return a + b ;
};

log(addition (5,6) );
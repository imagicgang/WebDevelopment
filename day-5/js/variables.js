function log(message) {
    var messageDiv = document.getElementById('message-1');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

/*
    Variables
    Variable scopes- global and function
    Variable hoisting
    Data types
*/

var x = 1; //number
log(x);

x = 1.5678;
log(x);

log(typeof x); // "number"

/* -------------------------------------------------- */

var greeting = "Hello, g\"d morning";
log(greeting);
log(typeof greeting); // "string"
log(greeting.length);

/* -------------------------------------------------- */
var x = 1; // global variable - a variable that is declared outside of all function
log(x);

function foo() {
    var y = 2;
    log ( 'within foo, x is' + x);
    log ( 'within foo, y is' + y);
}

foo();
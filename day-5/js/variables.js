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

function log(message) {
    var messageDiv = document.getElementById('message-2');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

var greeting = "Hello, g\"d morning";
log(greeting);
log(typeof greeting); // "string"
log(greeting.length);

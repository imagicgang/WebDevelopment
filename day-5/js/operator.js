function log(message) {
    var messageDiv = document.getElementById('message-1');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

log(1 + 2);
log(3 / 2);
log(8 % 3);

var x = 1;
log(++x);

// 2 special operator , ===, !==
var a = 10, b = "10";
log(a == b); // true
log(a === b); // false

// >, >=, <, <=
// !, &&, ||
function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

for (var i = 1; i <= 10; i++) {
    log(i);
}

var fruits = ['apple', 'orange', 'banana'];

var str = "<ui>";
for (i = 0; i < fruits.length; i++) {
    str = str + "<li>" + fruits[i] + "</li>";    
}
str = str + "</ui>" ;
log(str);
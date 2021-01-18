function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

document.getElementById('btnCalc').addEventListener( 'click', function() {
    var language = ['c', 'c#', 'c++', 'java', 'python', 'html', 'php'];

    var str = "";
    for (i = 1; i < language.length; i++) {
        str = str + "<li>" + language[i] + "</li>";    
    }
    str = str + "</ui>" ;
    log(str);
});


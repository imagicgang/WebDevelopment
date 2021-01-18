function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
}

var object = {
    "name": "James",
    "no": 999997,
    "age": 25,
    "department": "IT Manager"
};

log( "Here " + object.name + " is name of employee and " + object.department + " is the stored employee's department");
/* function log(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageDiv.innerHTML + message + '<br/>' ;
} */ 

// object literal syntex for creating object

var person = {
    "name": "James",
    "grade": 8,
    "isWorking": false,
    emailId: [ "james@gmail.com", "james@yahoo.com" ],
    address: {
        firstline: "No: 12, 6th Avenue",
        secondline: "Zip: 50100"
    },
    doesPersonWork: function() {
        return this.isWorking;
    }
};

// accessing properties of an object
console.log( person );
console.log( person.name );
console.log( person["grade"]);
 
// modifying property values
person.grade = 9;

console.log( person.grade );
console.log( person );

// calling methods of th person objects
console.log( person.doesPersonWork() );
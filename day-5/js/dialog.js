const { e } = require("mathjs");

alert( 'hello' ); // when we display some infomational message

var result = prompt( 'What\'s your name?' , 'John' );
if (result) {
    console.log(result);
} else {
    console.log( 'user pressed cancle button' );
}

result = confirm( 'Are you sure you want to delete this item permanently? This action cannot be undone!' );
console.log(result);
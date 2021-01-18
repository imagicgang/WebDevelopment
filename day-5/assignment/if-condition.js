alert( 'hello' ); // when we display some infomational message

var result = prompt( 'What\'s your name?' , 'James' );
if (result) {
    console.log('Sorry, youhave not entered any name.');
} else {
    console.log( '"Hello James, welcome".' );
}

console.log(result);
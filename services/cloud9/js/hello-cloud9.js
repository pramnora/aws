/*
 This code is borrowed from: 
 https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial-tour-ide.html
 
 NOTE: At first, the instructions didn't work...;  
       until I checked...and, discovered 2 wrong things...
       1. this is Linux platform...; therefore, files need to be given permission to run: chmod 744 hello-cloud9.js
       2. Unfortunately, my code was copied in wrong...and, contained a bug...where I forgot to close the if block with a corresponding }
       ...however, once, all bugs were fixed; then, the code ran perfectly fine.  
      
 Created: Sat 17 Sep 2022 18:34 PM GMT
 Created: Sat 17 Sep 2022 18:34 PM GMT
*/

var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello Cloud9!");
console.log("i is " + i);

do{

 input = readline.question ("Enter a number (or 'q' to quit): ");
 if (input === 'q') {
	console.log('Ok, exiting.'); 
 }
 else { 
	i += Number(input);
	console.log("i is now " + i);
 }	
} while (input != 'q');

console.log("Goodbye!");

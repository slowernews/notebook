// QUIRKS

'a' < 3			// False. JS tries to convert 'a' into a number but becomes NaN. Anything compared with NaN is false
'Boy' > 'ant'		// False, upper-case letters ASCII value is smaller than on lower-case.
5 + '5'			// '55'. if either is a string, the other is converted and concatenated
null == undefined	// true
Number(null)		// 0



// VARIABLES

// There isn't block-level scope, only function level scope. So variables inside blocks (for, if) are global.

var whatever;		// Sets variable whatever to value "undefined", a JavaScript type.
globalVar = null;	// Deference a global variable I'm not using anymore

var a = 5, b = a; 	// a = 6; b = 5! The b = a assignment copied the primitive 5 into both
a += 1;			// primitive types pass value, not reference.

var a = {}, b = a;	// Both are references to the object that now has a property,
a.name = 'Dog'		// it's only one object, the assignment copied the reference, so b.name = 'dog '
			// but if now say a = null, b is still a reference to the object!

i++			// "prefix" increment, changing the value before continuing evaluation.
++i			// "postfix" increment, changing the value after the containing statement has been evaluated.
			// If alone, no difference. If part of another statement (age++ / 2) big difference!



// LOOPS

do {statement} while (expression)			// it executes at least once
while (expression) {statement}				// it might not execute

if (true) {} else {}	// The Boolean() function is automatically performed, converting the input to either true or false.

/* 
Boolean("hi") is true. Boolean("") is false.
Boolean(9) is true. Boolean(0) is false.
Boolean(anyObject) is true. Boolean(null) is false.
*/

for(var i=0; i < 10; i++) {statement}
for(;;) {statement}										// infinite loop	
for(var propName in jsObject) {document.write("key: " + propName + " value: " + person[prop])}	// loop on an object



switch(animal){
	case 'cow': giveHay(); break;
	case 'rabbit': giveCarrots(); break;
	default: rest(); break;
}



// FUNCTIONS

function sum (x, y) {return x + y}		// Function declarations are executed before any other code.
var sum = function (x, y) {return x + y}	// Function expressions are executed in order, like any variable assignment.

function() {go()}()		// Wrong. Function declarations can't be immediately followed by parens.
(function() {go()})()		// But function expressions can. Surrounding parens turn function declaration into expression.

/*
- You define a function with parameters. You call a function with arguments.
- Closures are functions that have access to variables from another function's scope.
  You do it by creating a function inside a function. */



// ARRAYS

new Array('x')			// New array with x as an element
new Array(3)			// New empty array with length 3

var propName = 'age';
person.age			// What is the main reason to use bracket-notation (person['name']) instead of dot-notation (person.name) for property access?
person[propName]		// ame as person.age. Bracket notation allows variables as property names.



// TRICKS

randomIndex = Math.floor(Math.random() * arr.length)	// Getting a random element from any array.
randomElement = arr[randomIndex]

var x = y || z;  // If y is not null or false, it uses y and never evaluates z. Otherwise it uses z.

function sum() { // Function that sums all arguments provided
 	for(var i=0; i < arguments.length; i++) {total += arguments[i]}
 	return total;
}

setTimeout(function() {alert('Boo!')}, 4000)		// Alert in 4 seconds
clearTimeout()						// Clear a setTimeout

var num = 0;
function alertOrStop() {
	num += 0;
	if (num <= 5) {alert('Alert ' + num); setTimeout(alertOrStop, 2000)} else {alert('OK, done.')}
}
alertOrStop()
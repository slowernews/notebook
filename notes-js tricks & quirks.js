// QUIRKS

'a' < 3			// False. JS tries to convert 'a' into a number but becomes NaN. Anything compared with NaN is false
'Boy' > 'ant'		// False, upper-case letters ASCII value is smaller than on lower-case.
5 + '5'			// '55'. if either is a string, the other is converted and concatenated
null == undefined	// true
Number(null)		// 0

var i = 0x2c		// 44 - starting with '0x' means hex number (2×16 + 12(c) = 44)
var i = 023		// 19 - starting with '0' means octal number (2×8 + 3 = 19)
var i = 5e-6		// 0.000005 - "e-notation"

i++			// "prefix" increment, changing the value before continuing evaluation.
++i			// "postfix" increment, changing the value after the containing statement has been evaluated.
			// If alone, no difference. If part of another statement (age++ / 2) big difference!



// VARIABLES

var whatever;		// Sets variable whatever to value "undefined", a JavaScript type.
globalVar = null;	// Deference a global variable I'm not using anymore

var a = 5, b = a; 	// a = 6; b = 5! The b = a assignment copied the primitive 5 into both
a += 1;			// primitive types pass value, not reference.

var a = {}, b = a;	// Both are references to the object that now has a property,
a.name = 'Dog'		// it's only one object, the assignment copied the reference, so b.name = 'dog '
			// but if now say a = null, b is still a reference to the object!


// There isn't block-level scope, only function level scope. So variables inside blocks (for, if) are global.



// LOOPS

do {statement} while (expression)			// it executes at least once
while (expression) {statement}				// it might not execute

for(var i=0; i < 10; i++) {statement}
for(;;) {statement}					// infinite loop	
for(var propName in window) {document.write(propName)}	// loop on an object

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
/* JS NATIVE METHODS (NOT EXAUSTIVE)
   ================================= */


// ARRAY NATIVE METHODS

// To mutate by...
jsArray.shift()			| .pop()		// removing first|last element. Returns that element
jsArray.splice()		| .length = n		// adding/removing elements
jsArray.copyWithin()					// copying elements to and from specified positions
jsArray.fill()						// filling from a start to an end index with a static value
jsArray.reverse()		| .sort()		// reversing the order|sorting the elements
jsArray.forEach()					// calling a function on each element

// To create a new array...
jsArray.map()						// with the result of calling a function on each element
jsArray.filter()					// with every element that pass a test
jsArray.slice()						// with a selected part
jsArray.concat()					// joining two or more arrays
jsArray.join()						// by joining all elements (can define a separator)

// To get...
jsArray.reduce()		| .reduceRight()	// a single value by reducing (left-right|right-left)

// To inspect if... (return a boolean)
jsArray.includes()					// contains the specified element
jsArray.every()			| .some()		// every|any element pass a test
Array.isArray(jsDatatype)				// it's an array

// To access and return the index of...
jsArray.findIndex()					// the first element that pass a test
jsArray.indexOf()		| .lastIndexOf()	// the first|last match of a specified value

// To access and return the element...
jsArray[index]						// at a specified index
jsArray.find()						// that is the first that passes a test

// To get an array...
Array.from(jsIterableObject)				// from an iterable object




// STRING NATIVE METHODS

// To create a new string...
jsString.concat()					// joining two or more strings
jsString.slice()					// with a selected part
jsString.substr()		| .substring()		// with chars from an index and length|two indexes
jsString.trim()	 | .trimStart()	| .trimEnd()		// removing whitespace from both ends|left|right
jsString.toLowerCase()		| .toUpperCase()	// converted to lowercase|uppercase
jsString.replace()					// with a value or REGEX replacing another value

// To create a new array...
jsString.split()					// with substrings

// To inspect if... (return a boolean).
jsString.includes()					// contains the specified chars
jsString.startsWith()		| .endsWith()		// begins|ends with specified chars

// To access and return the index of...
jsString.search()					// the first substring or REGEX match
jsString.indexOf()		| .lastIndexOf()	// the first|last match of a specified value

// To acess and return...
jsString.match()					// matches against a REGEX
jsString[index]    | .charAt()	| .charCodeAt()		// the char|unicode of the char at a specified index




// OBJECT NATIVE METHODS

delete jsObject.property				// deleting properties of an object 
jsObject.entries()    | .keys()	| .values()		// an iterator with key-value pairs|keys|values for each index
jsObject.isPrototypeOf(anotherJsObject)
jsObject.hasOwnProperty('')
jsObject.propertyIsEnumerable('')			// tell if a property is enumerable (if for-in will work)
jsObject.valueOf();					// return string, number, or boolean representation (usually string)




// DATE NATIVE METHODS

new Date						// returns a date object with actual 'now' time and date
new Date(2011, 9, 22)					// October(!) 22, 2011. January as 0-month! Timezone = LOCAL
new Date('January 12, 2012')
Date.now()			| .parse()		// return millisecs since 01-01-1970 until now|provided date

jsDate.getFullYear()		| .setFullYear()	// get|set year as a four digit number (yyyy)
jsDate.getMonth()		| .setMonth()		// get|set month as a number (0-11)
jsDate.getDate()		| .setDate()		// get|set day as a number (1-31)
jsDate.getHours()		| .setHours()		// get|set hour (0-23)
jsDate.getMinutes()		| .setMinutes()		// get|set minute (0-59)
jsDate.getSeconds()		| .setSeconds()		// get|set second (0-59)
jsDate.getMilliseconds()	| .setMilliseconds()	// get|set millisecond (0-999)
jsDate.getTime()		| .setTime()		// get|set time (milliseconds since January 1, 1970)
jsDate.getDay()						// get weekday as a number (0-6), 0 = Sunday, 6 = Saturday

jsDate.toDateString()					// converting the readable part of a date




// JS REGULAR EXPRESSIONS

// syntax: /pattern/modifiers;
var regex = /w3schools/i;	// e.g. w3schools is a pattern, i is a modifier 

jsRegex.test(string)		// search a string for a pattern and returns true or false
jsRegex.exec(string)		// search a string for a pattern and returns the found text or null

// Patterns to match...
[abc]	[^abc]			// any of the characters between|not between the brackets range
[0-9]	[^0-9]			// any of the digits between|NOT between the brackets range
(x|y)				// any of the alternatives separated with |

.				// a single character, except newline or line terminator
\b	\B			// a match at the beginning/end|not at the beginning/end of a word
\w	\W			// a word|non-word character
\d	\D			// a digit|non-digit character
\s	\S			// a whitespace|non-whitespace character
\t	\v			// a tab|vertical tab character
\n				// a new line character
\0				// a NUL character
\f				// a form feed character
\r				// a carriage return character
\xxx	\xdd			// the character specified by an octal number xxx|hexadecimal number dd
\uxxxx				// the Unicode character specified by a hexadecimal number xxxx

n*	n+	n?		// any string that contains 0+|1+|0 or 1 occurrences of n
n{X}				// any string that contains a sequence of X n's
n{X,Y}				// any string that contains a sequence of X to Y n's
n{X,}				// any string that contains a sequence of at least X n's
^n 	n$			// any string with n at the beginning/end of it
?=n	?!n			// any string that is followed|not followed by a specific string n

// Modifiers to...
i				// case-insensitive matching
g				// global match (all matches rather than stopping after first match)
m				// multiline matching
x				// ignore whitespace




// JS MATH NATIVE METHODS AND PROPERTIES 

// To return...
Math.pow()	| x ** y			// the value of x to the power of y
Math.sqrt()	| .cbrt()			// the square|cubic root of x
Math.random()	| .floor(Math.random() * 27)	// a random number between 0 and 1 | 0 and 27
Math.PI		| .SQRT2			// PI|square root of 2
Math.max()	| .min()			// the number with the max|min value
Math.floor()	| .ceil()	| .round()	// rounds downwards|upwards|to the nearest integer
Math.trunc()	| .abs()			// the integer part|the absolute value of a number

isFinite()
parseFloat('070.53.76')				// 70.53 - leading zero ignored, one decimal point allowed, 2nd one is stop point
parseInt('', radix)				// radix is optional

0x2c						// 44 - starting with '0x' means hex number (2×16 + 12(c) = 44)
023						// 19 - starting with '0' means octal number (2×8 + 3 = 19)
5e-6						// 0.000005 - "e-notation"

jsNumber.toString(8)	| .toString(16)		// Convert to string with octal|hexadecimal number
jsDatatype.toString()				// by convertion and returns the result




// JS PROPERTIES AND OPERATORS

// Properties that...
jsArrayOrString.length				// return the number of elements
jsDatatype.constructor				// return the function that created the datatype object's prototype
jsDatatype.prototype  				// add properties and methods to a datatype
JSON.stringify()	| .parse()		// from an object|object from a JSON string

// Operators that return...
typeof something				// its primitive type ('string', 'number', 'boolean', 'object', 'undefined')
something instanceof anotherthing		// its reference type (RegExp, Array, etc.)




/* JS TRICKS & QUIRKS (NOT EXAUSTIVE)
   ================================= */

'a' < 3			// False. JS tries to convert 'a' into a number but becomes NaN. Anything compared with NaN is false
'Boy' > 'ant'		// False, upper-case letters ASCII value is smaller than on lower-case.
5 + '5'			// '55'. if either is a string, the other is converted and concatenated
null == undefined	// true
Number(null)		// 0




/* VARIABLES

There isn't block-level scope, only function level scope. So variables inside blocks (for, if) are global. */

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




/* LOOPS

The Boolean() function is performed, converting to either true or false.
Boolean(9) is true. Boolean(0) is false.
Boolean("hi") is true. Boolean("") is false.
Boolean(anyObject) is true. Boolean(null) is false. */

if (expression) {statement} else {statement}	

do {statement} while (expression)			// it executes at least once
while (expression) {statement}				// it might not execute

for(var i=0; i < 10; i++) {statement}
for(;;) {statement}										// infinite loop	
for(var propName in jsObject) {document.write("key: " + propName + " value: " + person[prop])}	// loop on an object

switch(animal){
	case 'cow': giveHay(); break;
	case 'rabbit': giveCarrots(); break;
	default: rest(); break;
}




/* FUNCTIONS

- You define a function with parameters. You call a function with arguments.
- Closures are functions that have access to variables from another function's scope.
  You do it by creating a function inside a function. */

function sum (x, y) {return x + y}		// Function declarations are executed before any other code.
var sum = function (x, y) {return x + y}	// Function expressions are executed in order, like any variable assignment.

function() {go()}()		// Wrong. Function declarations can't be immediately followed by parens.
(function() {go()})()		// But function expressions can. Surrounding parens turn function declaration into expression.




// ARRAYS

new Array('x')			// New array with x as an element
new Array(3)			// New empty array with length 3

var propName = 'age';
person[propName]		// Same as person.age. Bracket notation allows variables as property names.
person.age




// PRACTICAL TRICKS

// Getting a random element from any array.
randomIndex = Math.floor(Math.random() * arr.length)
randomElement = arr[randomIndex]

// If y is not null or false, it uses y and never evaluates z. Otherwise it uses z.
var x = y || z;  		

// Function that sums all arguments provided
function sum() {
	for(var i=0; i < arguments.length; i++) {total += arguments[i]};
	return total
}

// Alert in 4 seconds. Then clear a setTimeout
setTimeout(function() {alert('Boo!')}, 4000)		
clearTimeout()

// Alert 5 times then stop
var num = 0;
function alertOrStop() {
	num += 0;
	if (num <= 5) {alert('Alert ' + num); setTimeout(alertOrStop, 2000)}
	else {alert('OK, done.')}
}
alertOrStop()
/* JS native methods (not exaustive)
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

// JS properties to...
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

// REGEX patterns to match...

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

// REGEX modifiers to...

i				// case-insensitive matching
g				// global match (all matches rather than stopping after first match)
m				// multiline matching
x				// ignore whitespace

// JS Math object relevant methods and properties that return...

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


jsArrayOrString.length				// return the number of elements
jsDatatype.constructor				// return the function that created the datatype object's prototype
jsDatatype.prototype  				// add properties and methods to a datatype
JSON.stringify()	| .parse()		// from an object|object from a JSON string

// JS operators to tell...

typeof something				// its primitive type ('string', 'number', 'boolean', 'object', 'undefined')
something instanceof anotherthing		// its reference type (RegExp, Array, etc.)
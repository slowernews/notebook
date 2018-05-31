// Native methods to check if: (Boolean result)

jsArray.isArray()		// An object is an array
jsArray.every()			// Every element in an array pass a test
jsArray.some()			// Any of the elements in an array pass a test
jsArrayOrString.includes()	// It contains the specified element or string/chars
jsString.startsWith()		// A string begins with specified chars
jsString.endsWith()		// A string ends with specified string/chars

// Native methods to return the index of:

jsArray.findIndex()		// First element in an array that pass a test
jsArrayOrString.indexOf()	// First found occurrence of a specified value
jsArrayOrString.lastIndexOf()	// Last found occurrence of a specified value
jsString.search()		// A specified value or REGEX

// Native methods to return values at a specified index:

jsArrayOrString[]		// Char or element
jsString.charAt()		// Char
jsString.charCodeAt()		// Unicode of the char

// Native methods to find and return:

jsArray.find()			// The first element in an array that pass a test
jsString.match()		// Matches against a REGEX

// Native methods to glue and keep the same datatype:

jsArrayOrString.concat()	// Joins two or more strings/arrays and returns a new one

// Native methods to convert datatypes:

jsArray.join()			// Joins all elements into a string (you can define a separator)
jsArray.from()			// Creates an array from an object
allJsDatatypes.toString()	// Converts to a string, and returns the result
jsString.split()		// Splits a string into an array of substrings

// Native methods to transform the array:

jsArray.forEach()		// Calls a function for each array element
jsArray.reduce()		// Reduce the values of an array to a single value (going left-to-right)
jsArray.reduceRight()		// Reduce the values of an array to a single value (going right-to-left)

jsArray.splice()		// Adds/Removes elements from an array
jsArray.pop()			// Removes the last element and returns that element
jsArray.shift()			// Removes the first element and returns that element
jsArray.push()			// Adds new elements to the end of an array and returns the new length
jsArray.unshift()		// Adds new elements to the beginning of an array and returns the new length
jsArray.copyWithin()		// Copies array elements within the array, to and from specified positions

// Native methods to create a new array/string by transforming an existent one:

jsArray.filter()		// With every element in an array that pass a test
jsArray.map()			// With the result of calling a function for each array element
jsArrayOrString.slice()		// With a selected part of an arrayH
jsString.replace()		// With a specified value replacing a specified value or REGEX
jsString.substr()		// Extracts the chars from a specified index and length
jsString.substring()		// Extracts the chars between two specified indices
jsString.trim()			// Removes whitespace from both ends of a string
jsString.toLowerCase()		// With the string converted to lowercase letters
jsString.toUpperCase()		// With the string converted to uppercase letters

// Native methods to reorder the array:

jsArray.reverse()		// Reverses the order of the elements in an array
jsArray.sort()			// Sorts the elements of an array

// JS jsDate methods:

jsDate.getFullYear()		jsDate.setFullYear()		// Get/set year as a four digit number (yyyy)
jsDate.getMonth()		jsDate.setMonth()		// Get/set month as a number (0-11)
jsDate.getDate()		jsDate.setDate()		// Get/set day as a number (1-31)
jsDate.getHours()		jsDate.setHours()		// Get/set hour (0-23)
jsDate.getMinutes()		jsDate.setMinutes()		// Get/set minute (0-59)
jsDate.getSeconds()		jsDate.setSeconds()		// Get/set second (0-59)
jsDate.getMilliseconds()	jsDate.setMilliseconds()	// Get/set millisecond (0-999)
jsDate.getTime()		jsDate.setTime()		// Get/set time (milliseconds since January 1, 1970)
jsDate.getDay()							// Get weekday as a number (0-6)

jsDate.now()			// Returns milliseconds since midnight Jan 1, 1970
jsDate.parse()			// Parses a jsDate string and returns milliseconds since January 1, 1970
jsDate.toDateString()		// Converts the jsDate portion of a Date object into a readable string

// JS regular expressions
// syntax: /pattern/modifiers; 

var regex = /w3schools/i; 	// e.g. w3schools is a pattern, i is a modifier 

jsRegex.test(string)		// search a string for a pattern and returns true or false
jsRegex.exec(string)		// search a string for a pattern and returns the found text or null

// regExp patterns

[abc]				// Find any of the characters between the brackets range
[^abc]				// Find any character NOT between the brackets range
[0-9]				// Find any of the digits between the brackets range
[^0-9]				// Find any character NOT between the brackets (any non-digit)
(x|y)				// Find any of the alternatives separated with |

.				// Find a single character, except newline or line terminator
\w	\W			// Find a word | non-word character
\d	\D			// Find a digit | non-digit character
\s	\S			// Find a whitespace | non-whitespace character
\b	\B			// Find a match at the beginning/end | not at the beginning/end of a word
\0				// Find a NUL character
\n				// Find a new line character
\f				// Find a form feed character
\r				// Find a carriage return character
\t				// Find a tab character
\v				// Find a vertical tab character
\xxx				// Find the character specified by an octal number xxx
\xdd				// Find the character specified by a hexadecimal number dd
\uxxxx				// Find the Unicode character specified by a hexadecimal number xxxx

n*              		// Matches any string that contains zero or more occurrences of n
n+				// Matches any string that contains one or more occurrences of n
n?				// Matches any string that contains zero or one occurrences of n
n{X}				// Matches any string that contains a sequence of X n's
n{X,Y}				// Matches any string that contains a sequence of X to Y n's
n{X,}				// Matches any string that contains a sequence of at least X n's
n$				// Matches any string with n at the end of it
^n				// Matches any string with n at the beginning of it
?=n				// Matches any string that is followed by a specific string n
?!n				// Matches any string that is not followed by a specific string n

// regExp modifiers

i				// case-insensitive matching
g				// global match (find all matches rather than stopping after the first match)
m				// multiline matching
x       			// ignore whitespace

// JS Math object relevant methods and properties

Math.E				// Returns Euler's number (approx. 2.718)
Math.PI				// Returns PI (approx. 3.14)
Math.SQRT2			// Returns the square root of 2 (approx. 1.414)

Math.pow(x,y)	or: x ** y	// Returns the value of x to the power of y
Math.sqrt(x)			// Returns the square root of x
Math.cbrt(x)			// Returns the cubic root of x

Math.floor(x)			// Returns x, rounded downwards to the nearest integer
Math.ceil(x)			// Returns x, rounded upwards to the nearest integer
Math.round(x)			// Rounds x to the nearest integer
Math.trunc(x)			// Returns the integer part of a number x

Math.random()			// Returns a random number between 0 and 1
Math.max(x, y .. n)		// Returns the number with the highest value
Math.min(x, y .. n)		// Returns the number with the lowest value
Math.abs(x)			// Returns the absolute value of x

// JS properties

jsArrayOrString.constructor	// Returns the function that created the datatype object's prototype
jsArrayOrString.length		// Sets or returns the number of elements in a datatype
jsArrayOrString.prototype	// To add properties and methods to a datatype
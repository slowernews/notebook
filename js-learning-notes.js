// JS methods to check if: (Boolean result)

array.isArray()			// An object is an array
array.every()			// Every element in an array pass a test
array.some()			// Any of the elements in an array pass a test
arrayOrString.includes()	// It contains the specified element or string/chars
string.startsWith()		// A string begins with specified chars
string.endsWith()		// A string ends with specified string/chars

// JS methods to return the index of:

array.findIndex()		// First element in an array that pass a test
arrayOrString.indexOf()		// First found occurrence of a specified value
arrayOrString.lastIndexOf()	// Last found occurrence of a specified value
string.search()			// A specified value or REGEX

// JS methods to return values at a specified index:

arrayOrString[]			// Char or element
string.charAt()			// Char
string.charCodeAt()		// Unicode of the char

// JS methods to find values:

array.find()			// The first element in an array that pass a test and returns the value
string.match()			// A match against a regex and returns the matches

// JS methods to glue and keep the datatype:

arrayOrString.concat()		// Joins two or more strings/arrays and returns a new one with the same datatype

// JS methods to convert datatypes:

array.join()			// Joins all elements into a string (you can define a separator)
array.from()			// Creates an array from an object
allDatatypes.toString()		// Converts an array to a string, and returns the result
string.split()			// Splits a string into an array of substrings

// JS methods to transform the array:

array.forEach()			// Calls a function for each array element
array.reduce()			// Reduce the values of an array to a single value (going left-to-right)
array.reduceRight()		// Reduce the values of an array to a single value (going right-to-left)

array.splice()			// Adds/Removes elements from an array
array.pop()			// Removes the last element and returns that element
array.shift()			// Removes the first element and returns that element
array.push()			// Adds new elements to the end of an array and returns the new length
array.unshift()			// Adds new elements to the beginning of an array and returns the new length
array.copyWithin()		// Copies array elements within the array, to and from specified positions

// JS methods to create a new array/string by transforming an existent one:

array.filter()			// With every element in an array that pass a test
array.map()			// With the result of calling a function for each array element
arrayOrString.slice()		// With a selected part of an array
string.replace()		// With a specified value replacing a specified value or REGEX
string.substr()			// Extracts the chars from a specified index and length
string.substring()		// Extracts the chars between two specified indices
string.trim()			// Removes whitespace from both ends of a string
string.toLowerCase()		// With the string converted to lowercase letters
string.toUpperCase()		// With the string converted to uppercase letters

// JS methods to reorder the array:

array.reverse()			// Reverses the order of the elements in an array
array.sort()			// Sorts the elements of an array

// JS date methods:

date.getFullYear()	date.setFullYear()	// Get/set year as a four digit number (yyyy)
date.getMonth()		date.setMonth()		// Get/set month as a number (0-11)
date.getDate()		date.setDate()		// Get/set day as a number (1-31)
date.getHours()		date.setHours()		// Get/set hour (0-23)
date.getMinutes()	date.setMinutes()	// Get/set minute (0-59)
date.getSeconds()	date.setSeconds()	// Get/set second (0-59)
date.getMilliseconds()	date.setMilliseconds()	// Get/set millisecond (0-999)
date.getTime()		date.setTime()		// Get/set time (milliseconds since January 1, 1970)
date.getDay()					// Get weekday as a number (0-6)

date.now()		// Returns milliseconds since midnight Jan 1, 1970
date.parse()		// Parses a date string and returns milliseconds since January 1, 1970
date.toDateString()	// Converts the date portion of a Date object into a readable string

// JS regular expressions
// syntax: /pattern/modifiers; 

var regex = /w3schools/i; // e.g. w3schools is a pattern, i is a modifier 

regex.test(string)		// search a string for a pattern and returns true or false
regex.exec(string)		// search a string for a pattern and returns the found text or null

// regExp patterns

[abc]		// Find any of the characters between the brackets range
[^abc]		// Find any character NOT between the brackets range
[0-9]		// Find any of the digits between the brackets range
[^0-9]		// Find any character NOT between the brackets (any non-digit)
(x|y)		// Find any of the alternatives separated with |

.		// Find a single character, except newline or line terminator
\w	\W	// Find a word | non-word character
\d	\D	// Find a digit | non-digit character
\s	\S	// Find a whitespace | non-whitespace character
\b	\B	// Find a match at the beginning/end | not at the beginning/end of a word
\0		// Find a NUL character
\n		// Find a new line character
\f		// Find a form feed character
\r		// Find a carriage return character
\t		// Find a tab character
\v		// Find a vertical tab character
\xxx		// Find the character specified by an octal number xxx
\xdd		// Find the character specified by a hexadecimal number dd
\uxxxx		// Find the Unicode character specified by a hexadecimal number xxxx

n*              // Matches any string that contains zero or more occurrences of n
n+		// Matches any string that contains one or more occurrences of n
n?		// Matches any string that contains zero or one occurrences of n
n{X}		// Matches any string that contains a sequence of X n's
n{X,Y}		// Matches any string that contains a sequence of X to Y n's
n{X,}		// Matches any string that contains a sequence of at least X n's
n$		// Matches any string with n at the end of it
^n		// Matches any string with n at the beginning of it
?=n		// Matches any string that is followed by a specific string n
?!n		// Matches any string that is not followed by a specific string n

// regExp modifiers

i	// case-insensitive matching
g	// global match (find all matches rather than stopping after the first match)
m	// multiline matching
x       // ignore whitespace

// JS Math object relevant methods and properties

Math.E				// Returns Euler's number (approx. 2.718)
Math.PI				// Returns PI (approx. 3.14)
Math.SQRT2			// Returns the square root of 2 (approx. 1.414)

Math.pow(x, y)			// Returns the value of x to the power of y
Math.sqrt(x)			// Returns the square root of x
Math.cbrt(x)			// Returns the cubic root of x

Math.floor(x)			// Returns x, rounded downwards to the nearest integer
Math.ceil(x)			// Returns x, rounded upwards to the nearest integer
Math.round(x)			// Rounds x to the nearest integer
Math.trunc(x)			// Returns the integer part of a number (x)

Math.random()			// Returns a random number between 0 and 1
Math.max(x, y .. n)		// Returns the number with the highest value
Math.min(x, y .. n)		// Returns the number with the lowest value
Math.abs(x)			// Returns the absolute value of x

// JS properties

arrayOrString.constructor	// Returns the function that created the datatype object's prototype
arrayOrString.length		// Sets or returns the number of elements in a datatype
arrayOrString.prototype		// To add properties and methods to a datatype

// How jquery work..

$('one string! describing the elements you want to select').jqueryMethod().pipingMethodsPossible()

// Return a count of the total number of objects 'o' satisfying o.x == o.y.
// Parameter: an array of objects with integer properties 'x' and 'y'

// solution array.filter
function getCount(objects) {
        return objects.filter(object => object.x == object.y).length; 
}

// solution for .. of
function getCount(objects) {
        let count = 0
        for (let o of objects) {
                if (o.x == o.y) count++
        }   
        return count
}

// solution for .. ín
function getCount(objects) {
        let count = 0;
        for (let o in objects) {
                if (objects[o].x == objects[o].y) count++
        }
        return count
}

// solution array.forEach
function getCount(objects) {
        let count = 0;
        objects.forEach(function (o) {
                if (o.x == o.y) count++
        })
        return count
}
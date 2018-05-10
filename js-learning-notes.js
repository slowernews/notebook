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
string.search()			// A specified value or regex

// JS methods to return, at a specified index, the:

string.charAt()			// Char
string.charCodeAt()		// Unicode of the char

// JS methods to find values:

array.find()			// The first element in an array that pass a test and returns the value
string.match()			// A match against a regex and returns the matches

// JS methods to glue and keep datatype:

arrayOrString.concat()		// Joins two or more strings/arrays and returns a new one

// JS methods to glue/break and convert datatype:

array.from()			// Creates an array from an object
array.join()			// Joins all elements into a string (you can define a separator)
allDatatypes.toString()		// Converts an array to a string, and returns the result
string.split()			// Splits a string into an array of substrings

// JS methods to transform all array elements:

array.forEach()			// Calls a function for each array element
array.reduce()			// Reduce the values of an array to a single value (going left-to-right)
array.reduceRight()		// Reduce the values of an array to a single value (going right-to-left)

// JS methods to transform some array elements:

array.splice()			// Adds/Removes elements from an array
array.pop()			// Removes the last element and returns that element
array.shift()			// Removes the first element and returns that element
array.push()			// Adds new elements to the end of an array and returns the new length
array.unshift()			// Adds new elements to the beginning of an array and returns the new length
array.copyWithin()		// Copies array elements within the array, to and from specified positions

// JS methods to create a new array/string by transforming an existent one:

array.filter()			// With every element in an array that pass a test
array.map()			// With the result of calling a function for each array element
arrayOrString.slice()		// With a selected apart of an array
string.replace()		// Whith specified values replacing the specified value or regex
string.substr()			// Extracts the chars, beginning at a specified start position and through the specified number of chars
string.substring()		// Extracts the chars, between two specified indices
string.trim()			// Removes whitespace from both ends of a string
string.toLowerCase()		// Converts a string to lowercase letters
string.toUpperCase()		// Converts a string to uppercase letters

// JS methods to reorder elements:

array.reverse()			// Reverses the order of the elements in an array
array.sort()			// Sorts the elements of an array

// JS methods to populate:

array.fill()			// Fill the elements in an array with a static value
string.repeat()			// Returns a new string with a specified number of copies of an existing string

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
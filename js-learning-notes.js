// JS Array & String properties
array_string.constructor	// Returns the function that created the Array object's prototype
array_String.length		// Sets or returns the number of elements in an array
array_String.prototype		// Allows you to add properties and methods to an Array object


// JS Array & String methods

array_String.includes()		// Check if it contains the specified element or string/chars
array_String.concat()		// Joins two or more strings/arrays and returns a new one
array_String.indexOf()		// Returns the position of the first found occurrence of a specified value
array_String.lastIndexOf()	// Returns the position of the last found occurrence of a specified value
array_String.valueOf()		// Returns the primitive value

// JS Array methods

array.entries()			// Returns a key/value pair Array Iteration Object
array.fill()			// Fill the elements in an array with a static value
array.filter()			// Creates a new array with every element in an array that pass a test
array.find()			// Returns the value of the first element in an array that pass a test
array.findIndex()		// Returns the index of the first element in an array that pass a test
array.forEach()			// Calls a function for each array element
array.keys()			// Returns a Array Iteration Object, containing the keys of the original array
array.map()			// Creates a new array with the result of calling a function for each array element
array.reduce()			// Reduce the values of an array to a single value (going left-to-right)
array.reduceRight()		// Reduce the values of an array to a single value (going right-to-left)

array.copyWithin()		// Copies array elements within the array, to and from specified positions
array.pop()			// Removes the last element of an array, and returns that element
array.push()			// Adds new elements to the end of an array, and returns the new length
array.shift()			// Removes the first element of an array, and returns that element
array.slice()			// Selects a part of an array, and returns the new array
array.splice()			// Adds/Removes elements from an array
array.unshift()			// Adds new elements to the beginning of an array, and returns the new length

array.some()			// Checks if any of the elements in an array pass a test
array.every()			// Checks if every element in an array pass a test
array.isArray()			// Checks whether an object is an array

array.reverse()			// Reverses the order of the elements in an array
array.sort()			// Sorts the elements of an array

array.toString()		// Converts an array to a string, and returns the result
array.join()			// Joins all elements of an array into a string. You can define a separator.
array.from()			// Creates an array from an object

// JS String methods: all methods return a new value. Original don't change

string.charAt()			// Returns the character at the specified index (position)
string.charCodeAt()		// Returns the Unicode of the character at the specified index
string.match()			// Searches for a match against a regex and returns the matches
string.repeat()			// Returns a new string with a specified number of copies of an existing string
string.replace()		// Searches for a specified value or regex and returns a new string where the specified values are replaced
string.search()			// Searches for a specified value or regex and returns the position of the match

string.localeCompare()		// Compares two strings in the current locale
string.startsWith()		// Checks whether a string begins with specified chars
string.endsWith()		// Checks whether a string ends with specified string/chars

string.slice()			// Extracts a part of a string and returns a new string
string.split()			// Splits a string into an array of substrings
string.substr()			// Extracts the chars, beginning at a specified start position, and through the specified number of chars
string.substring()		// Extracts the chars, between two specified indices
string.trim()			// Removes whitespace from both ends of a string

string.toLocaleLowerCase()	// Converts a string to lowercase letters, according to the host's locale
string.toLocaleUpperCase()	// Converts a string to uppercase letters, according to the host's locale
string.toLowerCase()		// Converts a string to lowercase letters
string.toUpperCase()		// Converts a string to uppercase letters
string.fromCharCode()		// Converts Unicode values to chars

// How jquery work..

$('one string! describing the elements you want to select').jqueryMethod().pipingMethodsPossible()

// JS Math object relevant properties

Math.E				// Returns Euler's number (approx. 2.718)
Math.PI				// Returns PI (approx. 3.14)
Math.SQRT2			// Returns the square root of 2 (approx. 1.414)

// JS Math object relevant methods

Math.floor(x)			// Returns x, rounded downwards to the nearest integer
Math.ceil(x)			// Returns x, rounded upwards to the nearest integer
Math.round(x)			// Rounds x to the nearest integer

Math.cbrt(x)			// Returns the cubic root of x
Math.sqrt(x)			// Returns the square root of x
Math.pow(x, y)			// Returns the value of x to the power of y

Math.random()			// Returns a random number between 0 and 1
Math.max(x, y, n)		// Returns the number with the highest value
Math.min(x, y, n)		// Returns the number with the lowest value
Math.abs(x)			// Returns the absolute value of x
Math.trunc(x)			// Returns the integer part of a number (x)
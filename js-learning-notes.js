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
string.replace()		// With a specified value replacing a specified value or regex
string.substr()			// Extracts the chars from a specified index and length
string.substring()		// Extracts the chars between two specified indices
string.trim()			// Removes whitespace from both ends of a string
string.toLowerCase()		// With the string converted to lowercase letters
string.toUpperCase()		// With the string converted to uppercase letters

// JS methods to reorder the array:

array.reverse()			// Reverses the order of the elements in an array
array.sort()			// Sorts the elements of an array

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
        if (o.x === o.y) count++
    }   
    return count
}
// solution for .. ín
function getCount(objects) {
    let count = 0;
    for (const o in objects) {
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
// Native methods to check if: (Boolean result)

Array.isArray()                                                 // It's an array
jsArray.every()                 jsArray.some()                  // Every|any element in an array pass a test
jsArrayOrString.includes()                                      // Contains the specified element or string/chars
jsString.startsWith()           jsString.endsWith()             // Begins|ends with specified chars

// Native methods to return the index of:

jsArrayOrString.indexOf()       jsArrayOrString.lastIndexOf()   // First|last found occurrence of a specified value
jsArray.findIndex()                                             // First element in an array that pass a test
jsString.search()                                               // A specified value or REGEX

// Native methods to return values at a specified index:

jsArrayOrString[]                                               // Char or element
jsString.charAt()               jsString.charCodeAt()           // Char|Unicode of the char

// Native methods to find and return:

jsArray.find()                                                  // The first element in an array that pass a test
jsString.match()                                                // Matches against a REGEX

// Native methods to glue and keep the same datatype:

jsArrayOrString.concat()                                        // Joins two or more strings/arrays and returns a new one

// Native methods to convert datatypes:

jsArray.join()                                                  // Joins all elements into a string (you can define a separator)
allJsDatatypes.toString()                                       // Converts to a string and returns the result
jsString.split()                                                // Splits a string into an array of substrings
JSON.parse()                    JSON.stringify()                // Parses a JSON string into a JS value or object and vice versa
jsDate.parse()                                                  // Parses a jsDate string and returns millisecs since Jan 1, 1970
jsDate.toDateString()                                           // Converts the jsDate portion of a Date object into a string
Array.from()                                                    // Creates an array from an iterable object

// Native methods to create a new array/string based on an existent one:

jsArray.filter()                                                // With every element in an array that pass a test
jsArray.map()                                                   // With the result of calling a function on each aelement
jsArrayOrString.slice()                                         // With a selected part
jsString.replace()                                              // With a specified value replacing a specified value or REGEX
jsString.substr()               jsString.substring()            // Extracts chars from a specified index and length|two indexes
jsString.toLowerCase()          jsString.toUpperCase()          // With the string converted to lowercase|uppercase letters
jsString.trim()                                                 // Removes whitespace from both ends of a string

// Native methods to transform the array:

jsArray.forEach()                                               // Calls a function for each array element
jsArray.reduce()                jsArray.reduceRight()           // Reduce values to a single value (left-right|right-left)
jsArray.shift()                 jsArray.pop()                   // Removes the first/last element and returns that element
jsArray.unshift()               jsArray.push()                  // Adds new elements to the begin|end and returns new length
jsArray.splice()                                                // Adds/removes elements from an array
jsArray.copyWithin()                                            // Copies elements to and from specified positions

// Native methods to reorder the array:

jsArray.reverse()               // Reverses the order of the elements in an array
jsArray.sort()                  // Sorts the elements of an array

// Native jsDate methods:

jsDate.getFullYear()            jsDate.setFullYear()            // Get|set year as a four digit number (yyyy)
jsDate.getMonth()               jsDate.setMonth()               // Get|set month as a number (0-11)
jsDate.getDate()                jsDate.setDate()                // Get|set day as a number (1-31)
jsDate.getHours()               jsDate.setHours()               // Get|set hour (0-23)
jsDate.getMinutes()             jsDate.setMinutes()             // Get|set minute (0-59)
jsDate.getSeconds()             jsDate.setSeconds()             // Get|set second (0-59)
jsDate.getMilliseconds()        jsDate.setMilliseconds()        // Get|set millisecond (0-999)
jsDate.getTime()                jsDate.setTime()                // Get|set time (milliseconds since January 1, 1970)
jsDate.getDay()                                                 // Get weekday as a number (0-6)

jsDate.now()                                                    // Returns milliseconds since midnight Jan 1, 1970

// JS regular expressions
// syntax: /pattern/modifiers; 

var regex = /w3schools/i;       // e.g. w3schools is a pattern, i is a modifier 

jsRegex.test(string)            // search a string for a pattern and returns true or false
jsRegex.exec(string)            // search a string for a pattern and returns the found text or null

// regExp patterns

[abc]   [^abc]                  // Find any of the characters between|not between the brackets range
[0-9]   [^0-9]                  // Find any of the digits between|NOT between the brackets range
(x|y)                           // Find any of the alternatives separated with |

.                               // Find a single character, except newline or line terminator
\b      \B                      // Find a match at the beginning/end|not at the beginning/end of a word
\w      \W                      // Find a word|non-word character
\d      \D                      // Find a digit|non-digit character
\s      \S                      // Find a whitespace|non-whitespace character
\t      \v                      // Find a tab|vertical tab character
\n                              // Find a new line character
\0                              // Find a NUL character
\f                              // Find a form feed character
\r                              // Find a carriage return character
\xxx    \xdd                    // Find the character specified by an octal number xxx|hexadecimal number dd
\uxxxx                          // Find the Unicode character specified by a hexadecimal number xxxx

n*      n+      n?              // Matches any string that contains 0+|1+|0 or 1 occurrences of n
n{X}                            // Matches any string that contains a sequence of X n's
n{X,Y}                          // Matches any string that contains a sequence of X to Y n's
n{X,}                           // Matches any string that contains a sequence of at least X n's
^n      n$                      // Matches any string with n at the beginning/end of it
?=n     ?!n                     // Matches any string that is followed|not followed by a specific string n

// regExp modifiers

i                               // case-insensitive matching
g                               // global match (find all matches rather than stopping after first match)
m                               // multiline matching
x                               // ignore whitespace

// JS Math object relevant methods and properties

Math.pow()      or: x ** y      // Returns the value of x to the power of y
Math.sqrt()     Math.cbrt()     // Returns the square|cubic root of x

Math.max()      Math.min()      // Returns the number with the max/min value
Math.floor()    Math.ceil()     // Rounds downwards|upwards the nearest integer and returns it
Math.round()                    // Rounds to the nearest integer and returns it
Math.trunc()                    // Returns the integer part of a number
Math.abs()                      // Returns the absolute value

Math.random()                   // Returns a random number between 0 and 1
Math.PI         Math.SQRT2      // Returns PI|square root of 2

// JS properties

jsArrayOrString.constructor     // Returns the function that created the datatype object's prototype
jsArrayOrString.length          // Sets or returns the number of elements in a datatype
jsArrayOrString.prototype       // To add properties and methods to a datatype
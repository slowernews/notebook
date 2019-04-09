// Native methods to check if... 								// boolean result

jsDatatype.isArray()                                            // it's an array
jsArray.every()                 jsArray.some()                  // every|any element in an array pass a test
jsArrayOrString.includes()                                      // contains the specified element or string/chars
jsString.startsWith()           jsString.endsWith()             // begins|ends with specified chars

// Native methods to return the index of...

jsArrayOrString.indexOf()       jsArrayOrString.lastIndexOf()   // first|last found occurrence of a specified value
jsArray.findIndex()                                             // first element in an array that pass a test
jsString.search()                                               // a specified value or REGEX

// Native methods to return...

jsArrayOrString[]                                               // the char or element at a specified index
jsString.charAt()               jsString.charCodeAt()           // the char|unicode of the char at a specified index
jsArray.find()                                                  // the first array element that passes a test
jsString.match()                                                // matches against a REGEX

// Native methods to mutate the array by...

jsArray.shift()                 jsArray.pop()                   // removing the first/last element and returns that element
jsArray.unshift()               jsArray.push()                  // adding new elements to the begin|end and returns new length
jsArray.splice()                                                // adding|removing elements from an array
jsArray.copyWithin()                                            // copying elements to and from specified positions
jsArray.fill()                                                  // filling from a start index to an end index with a static value
jsArray.reverse()               jsArray.sort()                  // reversing the order|sorting the elements

// Native methods to create a new array...

jsArray.filter()                                                // with every element that pass a test
jsArray.map()                                                   // with the result of calling a function on each element
jsArray.reduce()                jsArray.reduceRight()           // reducing values to a single value (left-right|right-left)
jsArray.forEach()                                               // calling a function for each array element
jsIterableObject.from()                                         // from an iterable object

// Native methods to create a new string/array...

jsArrayOrString.concat()                                        // joining two or more strings/arrays
jsArrayOrString.slice()                                         // with a selected part

// Native methods to create a new string...

jsString.replace()                                              // with a specified value replacing a specified value or REGEX
jsString.substr()               jsString.substring()            // extracts chars from a specified index and length|two indexes
jsString.toLowerCase()          jsString.toUpperCase()          // with the string converted to lowercase|uppercase letters
jsString.trim()                                                 // removes whitespace from both ends of a string
jsString.split()                                                // spliting a string into an array of substrings
jsArray.join()                                                  // by joining all elements (you can define a separator)
jsDatatype.toString()                                           // converting to a string and returns the result
jsDate.toDateString()                                           // converting the readable part of a Date object

// Native methods to create an...

JSON.parse()            JSON.stringify()                        // object from a JSON string|JSON string from an object
jsArray.entries()       jsArray.keys()       jsArray.values()   // array iterator with the key-value pairs|keys|values for each index

// Native jsDate methods to...

jsDate.getFullYear()            jsDate.setFullYear()            // get|set year as a four digit number (yyyy)
jsDate.getMonth()               jsDate.setMonth()               // get|set month as a number (0-11)
jsDate.getDate()                jsDate.setDate()                // get|set day as a number (1-31)
jsDate.getHours()               jsDate.setHours()               // get|set hour (0-23)
jsDate.getMinutes()             jsDate.setMinutes()             // get|set minute (0-59)
jsDate.getSeconds()             jsDate.setSeconds()             // get|set second (0-59)
jsDate.getMilliseconds()        jsDate.setMilliseconds()        // get|set millisecond (0-999)
jsDate.getTime()                jsDate.setTime()                // get|set time (milliseconds since January 1, 1970)
jsDate.getDay()                                                 // get weekday as a number (0-6)

jsDate.now()                                                    // returns milliseconds since midnight Jan 1, 1970
jsDate.parse()                                                  // returns milliseconds since midnight Jan 1, 1970 until the date

// JS regular expressions
// syntax: /pattern/modifiers; 

var regex = /w3schools/i;       // e.g. w3schools is a pattern, i is a modifier 

jsRegex.test(string)            // search a string for a pattern and returns true or false
jsRegex.exec(string)            // search a string for a pattern and returns the found text or null

// regExp patterns to match...

[abc]   [^abc]                  // any of the characters between|not between the brackets range
[0-9]   [^0-9]                  // any of the digits between|NOT between the brackets range
(x|y)                           // any of the alternatives separated with |

.                               // a single character, except newline or line terminator
\b      \B                      // a match at the beginning/end|not at the beginning/end of a word
\w      \W                      // a word|non-word character
\d      \D                      // a digit|non-digit character
\s      \S                      // a whitespace|non-whitespace character
\t      \v                      // a tab|vertical tab character
\n                              // a new line character
\0                              // a NUL character
\f                              // a form feed character
\r                              // a carriage return character
\xxx    \xdd                    // the character specified by an octal number xxx|hexadecimal number dd
\uxxxx                          // the Unicode character specified by a hexadecimal number xxxx

n*      n+      n?              // any string that contains 0+|1+|0 or 1 occurrences of n
n{X}                            // any string that contains a sequence of X n's
n{X,Y}                          // any string that contains a sequence of X to Y n's
n{X,}                           // any string that contains a sequence of at least X n's
^n      n$                      // any string with n at the beginning/end of it
?=n     ?!n                     // any string that is followed|not followed by a specific string n

// regExp modifiers to...

i                               // case-insensitive matching
g                               // global match (find all matches rather than stopping after first match)
m                               // multiline matching
x                               // ignore whitespace

// JS Math object relevant methods and properties that return...

Math.pow()      or: x ** y      // the value of x to the power of y
Math.sqrt()     Math.cbrt()     // the square|cubic root of x

Math.max()      Math.min()      // the number with the max/min value
Math.floor()    Math.ceil()     // rounds downwards|upwards the nearest integer
Math.round()                    // rounds to the nearest integer
Math.trunc()                    // the integer part of a number
Math.abs()                      // the absolute value

Math.random()                   // a random number between 0 and 1
Math.PI         Math.SQRT2      // PI|square root of 2

// JS properties

jsArrayOrString.constructor     // returns the function that created the datatype object's prototype
jsArrayOrString.length          // gets or returns the number of elements in a datatype
jsDatatype.prototype            // to add properties and methods to a datatype
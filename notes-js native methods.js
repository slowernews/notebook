// Native methods that return a boolean by checking if...

jsArray.every()                 | .some()               // every|any element pass a test
jsArrayOrString.includes()                              // contains the specified element/chars
// rubyString.include?()
jsString.startsWith()           | .endsWith()           // begins|ends with specified chars
// rubyString.start_with?()     | .end_with?()
Array.isArray(jsDatatype)                               // it's an array

// Native methods to acess and return the index of...

jsArrayOrString.indexOf()       | .lastIndexOf()        // the first|last found occurrence of a specified value
// rubyString.index()           | .rindex()
jsArray.findIndex()                                     // the first element that pass a test
jsString.search()                                       // the first ocurrence of a specified value or REGEX

// Native methods to acess and return...

jsString.match()                                        // matches against a REGEX
jsString.charAt()               | .charCodeAt()         // the char|unicode of the char at a specified index
jsArrayOrString[]                                       // the char or element at a specified index
jsArray.find()                                          // the first element that passes a test

// Native methods to mutate the array by...

jsArray.shift()                 | .pop()                // removing the first/last element. Returns that element
jsArray.unshift()               | .push()               // adding new elements to the begin|end. Returns new length
jsArray.splice()                                        // adding|removing elements
jsArray.copyWithin()                                    // copying elements to and from specified positions
jsArray.fill()                                          // filling from a start index to an end index with a static value
jsArray.reverse()               | .sort()               // reversing the order|sorting the elements
jsArray.forEach()                                       // calling a function on each element

// Native methods to create a new array...

jsArray.filter()                                        // with every element that pass a test
jsArray.map()                                           // with the result of calling a function on each element
jsString.split()                                        // with substrings
Array.from(jsIterableObject)                            // from an iterable object

// Native methods to return...

jsArray.reduce()                | .reduceRight()        // a single value by reducing (left-right|right-left)
jsArray.entries()  | .keys()    | .values()             // an iterator with key-value pairs|keys|values for each index

// Native methods to create a new string/array...

jsArrayOrString.concat()                                // joining two or more strings/arrays
jsArrayOrString.slice()                                 // with a selected part

// Native methods to create a new string...

jsString.trim()  | .trimStart() | .trimEnd()                        	// removing whitespace from both ends|left|right
jsString.replace()                                                  	// with a specified value replacing a specified value or REGEX
jsString.substr()               | .substring()                      	// extracting chars from a specified index and length|two indexes
jsString.toLowerCase()          | .toUpperCase()                    	// converted to lowercase|uppercase
// rubyString.downcase          | .upcase  | .capitalize  | .swapcase
// rubyString.downcase!         | .upcase! | .capitalize! | .swapcase!  ## mutates string
jsArray.join()                                                      	// by joining all elements (you can define a separator)
jsDatatype.toString()                                               	// by convertion and returns the result
jsDate.toDateString()                                               	// converting the readable part of a date
JSON.stringify()                | .parse()                          	// from an object|object from a JSON string

// Native jsDate methods to...

jsDate.getFullYear()            | .setFullYear()        // get|set year as a four digit number (yyyy)
jsDate.getMonth()               | .setMonth()           // get|set month as a number (0-11)
jsDate.getDate()                | .setDate()            // get|set day as a number (1-31)
jsDate.getHours()               | .setHours()           // get|set hour (0-23)
jsDate.getMinutes()             | .setMinutes()         // get|set minute (0-59)
jsDate.getSeconds()             | .setSeconds()         // get|set second (0-59)
jsDate.getMilliseconds()        | .setMilliseconds()    // get|set millisecond (0-999)
jsDate.getTime()                | .setTime()            // get|set time (milliseconds since January 1, 1970)
jsDate.getDay()                                         // get weekday as a number (0-6)
jsDate.now()                    | .parse()              // return millisecs since 01-01-1970 until now|provided date

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
g                               // global match (all matches rather than stopping after first match)
m                               // multiline matching
x                               // ignore whitespace

// JS Math object relevant methods and properties that return...

Math.pow()          | x ** y                  // the value of x to the power of y
Math.sqrt()         | .cbrt()                 // the square|cubic root of x
Math.random()                                 // a random number between 0 and 1
Math.PI             | .SQRT2                  // PI|square root of 2
Math.max()          | .min()                  // the number with the max|min value
Math.floor()        | .ceil()   | round()     // rounds downwards|upwards|to the nearest integer
Math.trunc()        | .abs()                  // the integer part|the absolute value of a number

// JS properties to...

jsArrayOrString.length          // return the number of elements
jsDatatype.constructor          // return the function that created the datatype object's prototype
jsDatatype.prototype            // add properties and methods to a datatype
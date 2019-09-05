// QUIRKS

'a' < 3			// False. JS tries to convert 'a' into a number but becomes NaN. Anything compared with NaN is false
'Boy' > 'ant'		// False, upper-case letters ASCII value is smaller than on lower-case.
5 + '5'			// '55'. if either is a string, the other is converted and concatenated
null == undefined	// true
Number(null)		// 0

var i = 0x2c		// 44 - starting with '0x' means hex number (2×16 + 12(c) = 44)
var i = 023		// 19 - starting with '0' means octal number (2×8 + 3 = 19)
var i = 5e-6		// 0.000005 - "e-notation"



// LOOPS

do {statement} while (expression)	// it executes at least once
while (expression) {statement}		// it might not execute

for(var i=0; i < 10; i++) {statement}
for(;;) {statement}					// infinite loop	
for(var propName in window) {document.write(propName)}	// loop on an object

switch(animal){
	case 'cow': giveHay(); break;
	case 'rabbit': giveCarrots(); break;
	default: rest(); break;
}


// OTHER

// You define a function with parameters. You call a function with arguments.
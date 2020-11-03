# RUBY NATIVE METHODS (NOT EXAUSTIVE)
# ===================================


# ARRAY NATIVE METHODS

# To mutate by...
rubyArray.unshift()		| .push() or <<			# adding element to the start|end of the array
rubyArray.shift			| .shift(n) | .pop | .pop(n)	# removing first|first n|last|last n element(s). Returns them
rubyArray.delete_at()						# removing the element at a given index. Returns that element
rubyArray.insert()						# adding/removing elements
rubyArray.concat()						# joining two or more arrays
rubyArray.fill()						# filling from a start to an end index with a static value
rubyArray.clear 		| .compact!			# clear all |'nil' elem
rubyArray.reverse!		| .sort! | .shuffle!		# reversing the order|sorting|shuffle the elements
rubyArray.reverse_each {}	| .each_index {}		# on reverse order|with the index as the argument 
rubyArray.drop_while {}						# deleting elements while they pass a test and stops when don't
rubyArray.reject! {}		| .select!			# keeping every element that pass a test|fail a test
rubyArray.delete_if {}		| .keep_if {}			# aliases
rubyArray.each {}		| .cycle(n) {}			# calling a function on each element|n times

# To create a new array...
rubyArray.select {}		| .reject {}			# with every element that pass a test|fail a test
rubyArray.map {}						# with the result of calling a function on each element
rubyArray.flatten    | .shuffle | .uniq | .sort | .reversed	# with one dimension|shuffled|unique|sorted|reversed elements
rubyString.chars						# with substrings
rubyArray.slice()						# with a selected part
rubyString.join()						# by joining all elements (can define a separator)

# To inspect if... (return a boolean)
rubyArray.all? {}		| .any? {}			# every|any element pass a test
rubyArray.include?()		| .empty?			# contains the specified element/chars | length = 0

# To access and return the index of...
rubyArray.index()		| .rindex()			# the first|last element that pass a test or specified value

# To access and return...
rubyArray[index|index,length|range]				# the char or element at a specified index
rubyArray.fetch()						# similar but throws error if index out of bounds
rubyArray.first			| .last	| .sample(n)		# first|last element|random n element(s)
rubyArray.take(n)		| .drop(n)			# first n elements | elements but the first n
rubyArray.bsearch {}						# the first element that passes a test




# STRING NATIVE METHODS

# To mutate the string...
rubyString.reverse!						# rubyStrings can mutate also
rubyString.downcase!| .upcase! | .capitalize! | .swapcase!

# To create a new string...
rubyString.slice()						# with a selected part
rubyString.concat()						# joining two or more strings
rubyString.tr()			| .gsub() | .sub()		# with a value|REGEX|first REGEX ocurrence replacing a value              
rubyString.strip 		| .lstrip | .rstrip		# removing whitespace from both ends|left|right
rubyString.downcase   | .upcase | .capitalize | .swapcase	# converted to lowercase|uppercase
rubyString.concat()						# joining two or more strings
rubyDatatype.to_s						# by convertion and returns the result

# To inspect if... (return a boolean)
rubyString.include?()		| .empty?			# contains the specified chars | length = 0
rubyString.start_with?()	| .end_with?()			# begins|ends with specified chars

# To access and return the index of...
rubyString.index()		| .rindex()			# the first|last substring or REGEX match

# To access and return...
rubyString[index|index,length|range]				# the char or element at a specified index
rubyString.match() 		| rubyString[regex]		# matches against a REGEX




# OTHER NATIVE METHODS

# Get a new date
Date.new()
Date.parse('') | Time.parse('')					# convert a string into a date|time
Date.today | Time.now

JSON.stringify() | .parse()					# from an object|object from a JSON string

# Ruby regular expressions
rubyString.scan(regex)						# search for a pattern and returns an array with all matches

# Ruby Math object relevant methods and properties that return...
rubyArray.max | .min						# the number with the max|min value
0x2c								# 44 - starting with '0x' means hex number (2×16 + 12(c) = 44)
023								# 19 - starting with '0' means octal number (2×8 + 3 = 19)
5e-6								# 0.000005 - "e-notation"

# Ruby properties to...
rubyObject.invert						# get a new object with keys as values and viceversa
rubyArrayOrStringorObject.length or .size




# PRACTICAL TRICKS
# ================

load 'file.rb'						# import a file

require 'library'					# import a library
gem 'gemname'
gem 'gemname', '>= 3.0'					# require a gem with specific version

{} | Hash.new	| Hash[k, v, k, v]			# to make a new hash
[] | Array.new	| %w()	| obj.to_a | Array(obj)		# to make a new array

# case statement
case answer
when 'y', 'yes'						# y or yes
  puts 'OK'
when 'no'
  puts 'Oh.'
else
  puts '?'
end

# command line
ruby -e 'puts "ruby to execute"'			# e: "execute"
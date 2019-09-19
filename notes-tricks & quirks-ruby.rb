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
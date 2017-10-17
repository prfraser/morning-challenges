# First Non-repeated
#
# Write a method that will find the first non-repeated
# character in a String. Return false if only repeats
# are found.
#
# *** Whiteboard this first! ***
#
# Pro tip: code quality is a a big deal to potential
# employers. Use smart variable names, keep an eye on
# indentation and be consistent in your decisions
# (e.g. stick to single or double quotes)
#
# Difficulty: ~6/10 (Varies depending on solution. 
# The more optimised the solution, the more difficult
# the algorithm.)
#
# Beast mode: can you return on the first non-repeat,
# without checking every other letter?
#
# Beat mode++: can you maintain linear time?
#
# Example:
# firstNonRepeat('aaaabbbcccdeeefgh') -> 'd'
# firstNonRepeat('wwwhhhggge') -> 'e'
# firstNonRepeat('awwwhhhggge') -> 'a'
# firstNonRepeat('wwwhhhggg') -> false
#
# Check your solution by running the tests:
# ruby tests/13_first_non_repeated_test.rb
#

def firstNonRepeat (string)
  # Your code here
  # Whiteboard first!
  letter_array = string.split('')
  last_letter = letter_array.shift

  if last_letter != letter_array[0]
  	return last_letter
  end

  letter_array.each_with_index do |x, i|
	  	if x != last_letter && x != letter_array[i+1]
	  		return x
	  	end
	  last_letter = x
  	end
	false
end

firstNonRepeat('aaaabbbcccdeeefgh')
firstNonRepeat('wwwhhhggge')
firstNonRepeat('awwwhhhggge')
firstNonRepeat('wwwhhhggg')
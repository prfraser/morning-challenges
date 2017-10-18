# Included Once
#
# Write a method that takes an array and a string. Return
# true if the string is found in the array only once.
# Otherwise return false.
#
# What's the time complexity of your solution? Can it be improved?
#
# *** Whiteboard this first ***
#
# Difficulty: 4/10
#
# Example:
# includedOnce(['hello','hi','hi'], 'hi') -> false
# includedOnce(['hello','hi','hey'], 'hi') -> true
#
# Check your solution by running the tests:
# ruby tests/14_included_once_test.rb
#

def includedOnce (haystack, needle)
  # Your code here
<<<<<<< HEAD
  result = []

  haystack.each do |word|
  	if word == needle
  		result.push(word)
  	end
  end

	if result[0] != nil && result[1] == nil
		true
	else
		false
	end
end

includedOnce(['hello','hi','hi'], 'hi')
includedOnce(['hello','hi','hey'], 'hi')
includedOnce(['hello','hey','hey'], 'hi')
=======
end
>>>>>>> b14b2af2732bbb5058faa79d210d75318c923e9f

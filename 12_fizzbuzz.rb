# FizzBuzz
#
# Don't look this one up until you complete it yourself!
# It's a common interview question and there will be plenty
# of spoilers on the interwebs.
#
# This is a trivial question with many simple solutions.
# Try to write the least amount of code as possible.
# (AKA: Travisify™ your solution).
#
# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”. For
# numbers which are multiples of both three and five
# print “FizzBuzz”.
#
# Difficulty:
# 4/10
#
# Example:
# 1
# 2
# Fizz
# 4
# Buzz
# ...etc
#

# Your code here  
<<<<<<< HEAD
# def fizzbuzz
# 	(1..100).each do |n| 
# 		if n % 15 == 0
# 			puts "FizzBuzz" 
# 		elsif n % 5 == 0 
# 			puts "Buzz"
# 		elsif n % 3 == 0 
# 			puts "Fizz"
# 		else puts n 
# 		end
# 	end
# end

puts (1..100).map{|n| n%15==0 ? 'fizzbuzz' : n%3==0 ? 'fizz' : n%5==0 ? 'buzz' : n}

# fizzbuzz
# (1..100).each do |x|
#   fizz = "Fizz" if (x % 3 == 0)
#   buzz = "Buzz" if (x % 5 == 0)
#   puts (fizz || buzz) ? fizz.to_s + buzz.to_s : x
# end
=======
>>>>>>> 4493d526998bd9254fbdf329a6db4c41b64517bf

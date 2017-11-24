### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val #needs brackets
  if val = 1 #extra = needed
  return true #indent
  else
  return false #indent
  end
end

dif max a b #def brackets comma
  if a > b
      return a #indent
  else
  b #indent missing 'return'
  end
end
end # too many ends

def looper
  for i in 1..10
  puts i  #indent
  end
end #missing a 'return i'

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#missing an end

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 #typo
end


if failures # missing != 0
  puts "Test Failed"
else
  puts "Test Passed"
end

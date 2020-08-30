def positive_sum(arr)
  result = 0
  arr.each do |x|
    result += x if x > 0
  end
  result
end

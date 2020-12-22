function highAndLow(numbers_str){
  numbers = numbers_str.split(' ').map(Number);
  
  var high = numbers[0];
  var low = numbers[0];  
  
  for(var i=0; i<numbers.length; i++){
    if(high < numbers[i]){
      high = numbers[i];
    }
    if(low > numbers[i]){
      low = numbers[i];
    }
  }
  return high.toString() + " " + low.toString();
}

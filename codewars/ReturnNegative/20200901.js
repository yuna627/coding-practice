// My answer
function makeNegative(num) {
  if(num > 0){
  return -num;    
  }
  return num;
}

// or 
function makeNegative(num) {
  return -Math.abs(num);
}
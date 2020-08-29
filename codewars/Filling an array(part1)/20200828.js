// Filling an array (part 1)
// #1
const arr = N => {
  const result= [];
  for(var i=0;i<N;i++){
    result.push(i);
  }  
  return result;
}

// or #2
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}
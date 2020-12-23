function lowercaseCount(str){
  var result = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].match(/^[a-z]+$/)){
      result += 1;
    }
  }
  return result;
}

// function lowercaseCount(str){
//   return (str.match(/[a-z]/g) || []).length
// }

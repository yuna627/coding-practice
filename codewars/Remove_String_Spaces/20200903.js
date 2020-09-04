function noSpace(x){
  var result = "";
  for(var i=0; i<x.length; i++){
    if(x[i] !== " "){
      result += x[i]
    }
  }
  return result;
}

// # /\s/g is a Regular Expression.
// # \s means "any white space character, including space, tab, form feed or line feed"
// # g is a flag meaning "global search"
// # so /\s/g means "look for every white space char."

function noSpace(x){
  return x.replace(/\s/g, '');
}


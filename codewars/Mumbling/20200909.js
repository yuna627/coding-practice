function accum(s) {
  var result = "";
  for(var i=0; i<s.length; i++){
    result += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-';
  }
  return result.slice(0,-1);
}

// or

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
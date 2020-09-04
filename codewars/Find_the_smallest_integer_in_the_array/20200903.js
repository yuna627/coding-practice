class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0]
    for(let i=0; i<args.length; i++){
      if(result > args[i]){
        result = args[i]
      }
    }
    return result;
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
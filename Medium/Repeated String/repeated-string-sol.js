function kuchbi(s,n) {
    var length = s.length;
    var stringReps = Math.floor(n/length);

    return (stringReps?stringReps*([...s.matchAll(/a/g)].length):0)
            +[...s.substring(0,n%length).matchAll(/a/g)].length
};
console.log(kuchbi('aba',10));
  
  
  
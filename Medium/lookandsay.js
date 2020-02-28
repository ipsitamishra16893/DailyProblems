// The “look and say” sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:
// 1
// 11
// 21
// 1211
// 111221
// As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
// Given an integer N, print the Nth term of this sequence.

(function (n) {
    var num = "1";
    var newnum;
    var count="1";
    for (i = 0; i < n; ++i) {
      newnum="";
      for (j = 0; j < num.length; ++j) {
        if (num.charAt(j) !== num.charAt(j + 1)) {
          newnum += count+num.charAt(j);
          count = 1;
        } else {
          count++;
        }  
      }
      num= ""+newnum
      console.log(newnum);
    }
  })(11);
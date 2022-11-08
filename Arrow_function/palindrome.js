// e.Return all the palindromes in an array

var palindromes = ["Poovannan","rotator","repaper","waste","deed","program","peep","php","wow","noon"];

palindromes.forEach(str => {
  var strReverse = str.split("").reverse().join("");
  if(str == strReverse)
  {
      console.log(str)
  }
});
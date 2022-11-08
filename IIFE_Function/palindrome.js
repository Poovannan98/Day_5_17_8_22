// e. Return all the palindromes in an array

(function(str){
    for(i=0;i<str.length;i++){
    var strReverse = str[i].split("").reverse().join(""); 
    if(str[i]==strReverse)
       {
        console.log(str[i])
      }
   }
  
  })(["Poovannan","rotator","repaper","waste","deed","program","peep","php","wow","noon"])
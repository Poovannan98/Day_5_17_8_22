// d. Return all the prime numbers in an array

(function(arr){
    for(var i=0;i<arr.length;i++){
      pn=true;
      for(var j=2;j<=arr[i];j++){
        if(arr[i]%j==0 && j!=arr[i]){
          pn=false;
        }
      }
      if(pn==true){
        console.log(arr[i]);
      }
    }
  })([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,37]);
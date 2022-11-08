// g. Remove duplicates from an array

(function(array){
    const uniqueArray = [...new Set(array)];
  
  console.log(uniqueArray);
  })([1, 1, 2, 3, 5, 5, 1]);
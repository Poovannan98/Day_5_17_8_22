// f. Return median of two sorted arrays of the same size

(function(arr1,arr2){
    var concat=arr1.concat(arr2);
    concat=concat.sort(function(a,b){return a-b});
    console.log(concat);
  if(concat.length%2==0){
    console.log((concat[concat.length/2]+(concat[concat.length/2-1]))/2);
  }})
  ([1,4,7,9,16],[2,5,8,10,37])
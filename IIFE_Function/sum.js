// c. Sum of all numbers in an array

var sum=0;
(function(arr1){
    for(var i=0;i<arr1.length;i++){
    sum=sum+arr1[i];
    }
    console.log(sum);
})([1,2,7,5,10]);
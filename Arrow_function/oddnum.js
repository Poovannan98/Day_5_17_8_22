// a.Print odd numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = [];

arr.forEach(number => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});

console.log(odds);
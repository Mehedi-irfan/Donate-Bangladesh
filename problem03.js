//exercise 1:
const findEvenDigits = (arr) => {
  return arr.filter((num) => num % 2 === 0).length;
};
console.log(findEvenDigits([2, 4, 3, 5, 8, 7, 6, 9, 1]));

//exercise 2:
const countEvenNumber = (array) => {
  return array.filter((arr) => arr % 2 === 0).length;
};

const createAnArrayOfNumbers = (num) => {
  let emptyArr = [];
  for (let i = 1; i <= num; i += 1) {
    emptyArr.push(i);
  }
  return emptyArr;
};

console.log(countEvenNumber(createAnArrayOfNumbers(6)));
console.log(countEvenNumber(createAnArrayOfNumbers(12)));

//exercise 3:
const isAscending = (numbers) => {
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i + 1] < numbers[i]) return false;
  }
  return true;
};
console.log(isAscending([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(isAscending([1, 2, 3, 8, 5, 6, 7, 1, 9]));
console.log(isAscending([6, 7, 8, 9, 1, 2, 3, 4, 5]));

//Exercise 3:
const largestEvenNumber = (arr) =>
  Math.max(...arr.filter((arr) => arr % 2 === 0));
console.log(largestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(largestEvenNumber([91, 72, 35, 4, 50, 6, 87, 89, 90]));
console.log(largestEvenNumber([1, 7, 5, 4, 15, 6, 8, 9, 90]));

//Exercise 4:
const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");
console.log(replaceFirstDigit("abc123de34"));
console.log(replaceFirstDigit("123abcde34"));
console.log(replaceFirstDigit("A2babcde34"));

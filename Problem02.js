const addingString = (str) => {
  if (str.length >= 3) {
    const sliceStr1 = str.slice(0, 3);
    const sliceStr2 = str.slice(-3);
    return sliceStr1 + sliceStr2;
  } else {
    return str;
  }
};
console.log(addingString("abc"));
console.log(addingString("abcdef"));
console.log(addingString("ab"));

//exercise 2:
const addHalfString = (str) => {
  const value = str.slice(0, str.length / 2);
  return value;
};
console.log(addHalfString("temp"));
console.log(addHalfString("temple"));
console.log(addHalfString("temples"));

//exercise 3:
const addTwoStr = (str1, str2) => {
  return str1.slice(1) + str2.slice(1);
};
console.log(addTwoStr("Junior", "Developer"));
console.log(addTwoStr("AI", "Engineer"));

//exercise 3:
const findLargestNumber = (num1, num2) => {
  return 100 - num1 < 100 - num2 ? num1 : num2;
};
console.log(findLargestNumber(95, 97));

//exercise 4:
const countChar = (str, char) => {
  return str.split("").filter((ch) => ch === char).length;
};

const countValue = (str, char) => {
  return countChar(str, char) >= 2 && countChar(str, char) <= 4 ? true : false;
};
console.log(countValue("oh", "o"));
console.log(countValue("ooh", "o"));
console.log(countValue("oooh", "o"));
console.log(countValue("ooooh", "o"));
console.log(countValue("oooooh", "o"));

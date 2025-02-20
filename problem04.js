const isLeapYear = (year) => {
  if (year % 4 === 0) {
    return year;
  }
  return `not a leap year`;
};
console.log(isLeapYear(2028));

//exercise 3
const parseCsv = (str) => {
  return str.split("\n").map((row) => row.split(","));
};
const str = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`;

console.log(parseCsv(str));

//exercise 4:
const getRandomNumber = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

const colorGenerator = () => {
  return "#" + Array.from({ length: 6 }).map(getRandomNumber).join("");
};
console.log(colorGenerator());
console.log(colorGenerator());
console.log(colorGenerator());
console.log(colorGenerator());
console.log(colorGenerator());
console.log(colorGenerator());
console.log(colorGenerator());

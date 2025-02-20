const isEqual100 = (a, b) => {
  if (a == 100 || b == 100) {
    return true;
  } else if (a + b == 100) {
    return true;
  } else {
    return false;
  }
};

const result = isEqual100(30, 70);
console.log(`Result:- ${result}`);
const value = isEqual100(100, 20);
console.log(`Value :- ${value}`);
const total = isEqual100(40, 20);
console.log(`total :- ${total}`);

//exercise :-2
const getFileExtension = (str) => {
  const s = str.slice(str.lastIndexOf("."));
  return s;
};
const getFile = getFileExtension("index.html");
console.log(getFile);

//Exercise :-3

const currentDate = () => {
  const date = new Date();
  // const value = date.toLocaleDateString();
  // return value;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

console.log(currentDate());

const addString = (str) => {
  // if (str.startsWith("New!")) {
  //   return str;
  // } else {
  //   return `New! ${str}`;
  // }

  return str.indexOf("New!") == 0 ? str : `New! ${str}`;
};
console.log(addString("New! Happy Year"));

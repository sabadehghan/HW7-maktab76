// QUESTION 5
// implementation filter-find-slice-splice-some

// filter

function filter(array, func) {
  const newArray = [];
  for (const item of array) {
    if (func(item)) newArray.push(item);
  }
  return newArray;
}
const isOdd = (x) => x % 2 === 1;
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(numbers, isOdd));

// // find

const studentDetails = [
  {
    studentId: 101,
    studentName: "John",
  },
  {
    studentId: 102,
    studentName: "David",
  },
];
function findName(name) {
  let value = true;
  for (let i = 0; i < studentDetails.length; i++) {
    if (studentDetails[i].studentName == name) {
      value = true;
      break;
    } else {
      value = false;
    }
  }
  if (value == true) {
    console.log("The name found=" + name);
  } else {
    console.log("The name not found=" + name);
  }
}
findName("John");

// slice

function newSlice(array, start, end) {
  let newArray = [];

  if (end === undefined || end > array.length) end = array.length;

  for (let i = start; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
let myArray = newSlice([8, 3, 4, 5, 4], 1, 3);
console.log(myArray);

// splice

function splice(array, index) {
  let tempArray = new Array();
  let count = 0;

  for (var i = 0; i < array.length; i++) {
    if (i != index) {
      tempArray[count] = array[i];
      count++;
    }
  }
  return tempArray;
}
console.log(splice([1, 2, 3, 4, 5], 2));

// some

let array = [4, 5, 7, 9, 10, 3];

let lessThanTen = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 10) {
    lessThanTen = true;
    break;
  }
}

console.log(lessThanTen);

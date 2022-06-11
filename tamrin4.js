// QUESTION 4

// create a function that takes an array of strings and returns an array with only the
// strings that have numbers in them. if there are no strings containing numbers, return an
// empty Array 

function ContainsNumber(array) {
let newArray = [];
        for (let item in array) {
          let contain = /\d/.test(array[item]);
         if (contain) {
           newArray.push(array[item]);
         }
        }
        return newArray;
}
console.log(ContainsNumber(["hello", "username23", "1234", "number"]));
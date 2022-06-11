// QUESTION 3

// the length property on an array will return the number of elements in the 
// array. for example, the array below contains 2 elements :
// [1,[2,3]] 2 elements, number 1 and array [2,3] suppose we instead wanted to
// know the total number of non-nested items in the nested array . in the above  case,
// [1,[2,3]] contains 3 non-nested items, 1,2 and 3.

// examples:
// getLength([1,[2,3]]) => 3
// getLength([1,[2,[3,4]]]) => 4
// getLength([1,[2,[3,[4,[5,6]]]]]) => 6



const getLength = (array)=> array.flat(Infinity).length;
console.log(getLength([1,[2,[3,[4,[5,6]]]]]));

// another solution 


// function getLength(array){
//         for(let i = 0; i < array.length; i++){
//                 while(true){
//                         if(Array.isArray(array[i])){
//                                 array.splice(i, 1, ...array[i])
//                         }else{
//                                 break;
//                         }
//                 }
//         }
//         return array.length;
// }
// console.log(getLength([1,[2,[3,[4,[5,6]]]]]));



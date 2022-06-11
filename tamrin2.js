// QUESTION 2

// create a function that identifies the very first item that has recurred in the string
// argument passed. it returns the identified item with the index where it first appeared and the
// very next index where it resurfaced -- entirely as an object; or as an empty object if the
// passed argument is either null, undefined, empty string, or no recurring item exists.

// example
// recurIndex("AREDCBSDERD") => {"D" :[3,7]}
// recurIndex("") => {}
// recurIndex(null) => {}




function recurIndex(string) {
  if (!string) return {};
  let array = string.split("");
  let filtered = array.filter((item, index) => array.indexOf(item) !== index);
  const [item] = filtered;
  if (item===null) return {};
  const firstIndex = string.split(item, 1).join().length;
  const secondIndex = string.split(item, 2).join().length;
  return { [item]: [firstIndex, secondIndex] };
}

console.log(recurIndex("AREDCBSDERD"));
console.log(recurIndex(""));
console.log(recurIndex(null));

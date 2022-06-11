// QUESTION 1

// your task is to create a circle constructure that creates a circle with a radius provided
// by an argument. the circles constructed must have two methods getArea() (PI*r^2)and
// getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).




function CircleConstructor(radius){
  this.getArea = () => Area = Math.PI * radius * radius;
  this.getPerimeter = () => Perimeter = 2 * Math.PI * radius;
}
const circle = new CircleConstructor(3);
console.log(circle.getArea());
console.log(circle.getPerimeter());

// another solution 

// function CircleConstructor(radius) {
//   let Area = Math.PI * radius * radius;
//   let perimeter = 2 * Math.PI * radius;
//   return {
//     getArea: function () {
//       return Area;
//     },
//     getPerimeter: function () {
//       return perimeter;
//     },
//   };
// }
// console.log(CircleConstructor(2).getArea());
// console.log(CircleConstructor(3).getPerimeter());










// Spread Operator
// let oddNumbers = [1,3,5,7,9];
// let evenNumbers = [2,4,6,8]

// let allNumbers = [...evenNumbers, ...oddNumbers];
// console.log(allNumbers.sort())

// Destructuring


let car = {
  color: "Red",
  brand: "TOYOTA",
  model: 20,
  isSold: false
}
const{color, brand, model, isSold} = car;
console.log(brand)
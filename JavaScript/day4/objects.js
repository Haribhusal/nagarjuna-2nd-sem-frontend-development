
// Objects are Variables that can store both values and functions
// Values are stored as KEY:VALUE pairs called properties
// Functions are stored as KEY:FUNCTION() pairs called Methods.

// EXAMPLE:

let car = {
  color: "Red",
  brand: "TOYOTA",
  model: 20,
  isSold: false,
  start: function (){
    console.log("BROOOM, BROOM");
  },
  summarize: function(){
    console.log(`The ${this.color} ${this.brand} car is of ${this.model} model`)
  }
}

// Accessing properties/methods using dot notation
// console.log(car.brand)

// Accessing properties/methods using bracket notation
// console.log(car['color'])

// car.start();
car.summarize();
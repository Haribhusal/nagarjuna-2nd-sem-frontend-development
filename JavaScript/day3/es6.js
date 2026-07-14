// Traditional Function Statement

function addTwoNumbers(a,b) {
  let sum = a+b;
  return sum;
  let k = 9;
  console.log(k)
  // statements after returning value is not executed.
}
let resultStoredToPrint = addTwoNumbers(3,4);
console.log(resultStoredToPrint);
// resultStoredToPrint is a caller

 const addNumbers = (a,b) => a+b
 console.log(addNumbers(5,6));

 const calculateSI = (p,t,r) => {
  let interest = p*t*r/100;
  return interest
 }
 console.log(calculateSI(1000, 2, 2))

 const squareNum = a => a*a;
 console.log(squareNum(8))
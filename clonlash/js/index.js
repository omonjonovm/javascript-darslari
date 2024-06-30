"use strict"

const arr = [17, 47, 19]
const numbers = arr.slice()
numbers[0] = 'debrunye'
console.log(arr);
console.log(numbers);

// spread operatori 
const mancity = ['doku','silva']
const chelsea = ['kante', 'hazard']

const mixPlayer = [...mancity , ...chelsea]
console.log(`APL TOP PLAYERS : ${mixPlayer}`);
// let x = 10
// let y = x

// y = y + 5

// console.log(x);
// console.log(y);

// let isMarried =  false
// let isArray = isMarried
// isArray = true

// console.log(isMarried);
// console.log(isArray);

// const num = {
//   x:10,
//   y:5,
// }

// const newNum = num //

// newNum.x = 15


// function copyObj(obj) {
//  let objCopy  = {}
//  for(let key in obj) {
// objCopy[key] = obj[key]
//  }
//  return  objCopy
// }



// const newNumber = copyObj(number)

// newNumber.x = 15
// newNumber.z.a = 17
// console.log(newNumber);
// console.log(number);

// const number = {
//   x: 10,
//   y: 5,
// }
// const addNumbers = {
//   z: 15,
// }

// const allNumber = Object.assign(number, addNumbers)
// console.log(allNumber);
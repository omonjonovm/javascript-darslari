"use strict"

// const now = new Date()
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMinutes());
// console.log(now.getMonth());
// console.log(now.getTime());
// console.log(now.getSeconds());

// console.log(now.setFullYear(2015));
// console.log(now);



let start = new Date()

for (let i = 0; i < 10000000;i++) {
  let some = i ** 3
}

let end = new Date()

alert(`Loop complete ${end - start} `)
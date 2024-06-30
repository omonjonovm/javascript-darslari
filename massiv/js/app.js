"use strict"

const arr = [17, 9, 47, 19, 20]

arr.sort(compareFn);
console.log(arr);

function compareFn(a, b) {
  return a - b;
}

// arr.forEach(function (item, index, arr) {
//   console.log(`${index} : ${item} into arr ${arr}`);
// })
// arr.pop();
// arr.push(19);

// arr.shift();
// arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
// }

// for(let value of arr) {
//   console.log(value);
// }

// const movies = prompt("what's your movies?","");
// const favouriteMovies = movies.split(",");
// favouriteMovies.sort();
// console.log(favouriteMovies.join("-"));
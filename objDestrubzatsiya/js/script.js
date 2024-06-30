"use strict"

const queen = {
  jacket: "grey",
  height: "1.6",
  colors: {
    hair: "yellow",
    isDead: "yes",
  },
  howAchived:function() {
    console.log("because of the death of his father, he quickly ascended the throne");
  }
};
queen.howAchived();

const {hair,isDead} = queen.colors


console.log(hair);
console.log(isDead);

// console.log(queen.jacket);

// delete queen.height

// console.log(queen);

// console.log(queen["colors"]["hair"]);

// let count = 1;


//  for (let key in queen) {
//   count++
   
//   if (typeof queen[key] === "object") {
//     for (let i in queen[key]) {
//       console.log(`Property ${i} has value ${queen[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} has value ${queen[key]}`);

//   }
// }
// console.log(count);
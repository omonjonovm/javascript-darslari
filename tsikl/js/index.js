"use strict"

let startNumber = 10;

//birinchi usul
// while(startNumber <= 40) {
//   console.log(startNumber); // iteratsiya 
//   startNumber++;
// }

// ikkinchi usul
// do{
//   console.log(startNumber); 
//   startNumber++;
// } while(startNumber <= 40);

// uchinchi usul 
// for(let i = 1; i <= 8 ; i++){
//   console.log(startNumber);
//   startNumber++
// }

for (let i = 1; i <= 10; i++) {
 if(i === 8) {
  // break;
  continue;
 }
 console.log(i);
}
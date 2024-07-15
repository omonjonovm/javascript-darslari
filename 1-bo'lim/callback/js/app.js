"use strict"

function first(cl) {
  setTimeout(() => {
    console.log(1);
    cl();
  }, 1000)
};
function second() {
  console.log(2);
}
first(second);


// function edu(subject,callback){
//   console.log(`I wanna learning ${subject}`);
//   callback();
// };


// edu("JS" , function() {
//   console.log("It's successfull");
// })
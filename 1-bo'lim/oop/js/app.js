"use strict"

const car = {
  motor:"X",
  color:"red",
  isairbag:true,
  isSpeed:function() {
    console.log(220);
  }
}
const gm = {
  isairbag :false
}
// gm.__proto__ = car
// console.log(gm.color);
// gm.isSpeed()

// Object.setPrototypeOf(gm,car) 
const bmw = Object.create(car)
console.log(bmw);
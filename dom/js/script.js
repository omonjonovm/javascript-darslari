"use strict"

const box = document.getElementById('box')
// console.log(box );

const buttons = document.getElementsByTagName('button')[0]
// console.log(buttons);

const circles = document.getElementsByClassName('circle')
// console.log(circles);

const wrapper = document.querySelector('.wrapper')
console.log(wrapper);

const hearts = wrapper.querySelectorAll('.heart')
// console.log(hearts);

hearts.forEach(item => {
  console.log(item);
})
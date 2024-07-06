"use strict"

const box = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const circle = document.querySelector('.circle')
const hearts = document.querySelectorAll('.heart')
const circleWrapper = document.querySelector('.circle__wrapper')


// box.style.backgroundColor = "red"
// box.style.height = "100px"
// box.style.width = "100px"

box.style.cssText = "backgroundColor:red; widht: 100px; height:100px"

buttons[0].style.width = "100px"
circles[1].style.backgroundColor = "green"
circle.style.backgroundColor = "blue"

// for (let i = 0; i < hearts.length; i++) {
// hearts[i].style.backgroundColor= "orange"
// }


// hearts.forEach(item => {
//   item.style.backgroundColor = "grey"
// })

const btn = document.createElement('button')
// const tex =  document.createTextNode('this is text')
document.body.append(btn)

const myCircle =  document.createElement('div')
myCircle.classList.add('circle')
// circleWrapper.append(myCircle)
// circleWrapper.before(myCircle)
// circleWrapper.after(myCircle)
// circles[0].after(myCircle)
// circles[1].remove(myCircle)
// circles[1].replaceWith(myCircle)
// circleWrapper.append(myCircle)
// myCircle.innerHTML = '<pre>17</pre>'
// myCircle.textContent= 'V'

circleWrapper.insertAdjacentHTML("beforeend","<pre>E</pre>")
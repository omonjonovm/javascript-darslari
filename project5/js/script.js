"use strict"
const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list')

const seriesDB = {
  series: [
    'Omar',
    'Ertugrul',
    'Bozkir Arslani',
    'Mgnifisent Century',
    'The Great Saljuks Guardians',
  ],
}

adv.forEach((item =>
  item.remove()
))

genre.textContent = 'History'

wrapper.style.backgroundImage = 'url("img/91.jpg")'

seriesList.innerHTML = ''

seriesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `
    <li class="promo__interactive-item">
    ${index +1}  ${item}
     <div class="delete"></div>
    </li>
   `
})
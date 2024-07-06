"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll('.promo__adv img'),
    wrapper = document.querySelector('.promo__bg'),
    genre = wrapper.querySelector('.promo__genre'),
    seriesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    inputVal = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector("[type='checkbox']")

  const seriesDB = {
    series: [
      'OMAR',
      'The Final Legacy',
      'ERTUGRUL',
      'Mgnifisent Century',
      'The Great Saljuks Guardians',
    ],
  }

  addForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let newSeries = inputVal.value
    const favo = checkbox.checked

    if (newSeries) {
      if (newSeries.length > 18) {
        newSeries = `${newSeries.substring(0, 18)}...`
      }

      if (favo) {
        console.log("Sevimli serial qo'shildi ✅ ");
      }
      seriesDB.series.push(newSeries)
      sortArr(seriesDB.series)

      createSeriesList(seriesDB.series, seriesList)
    }
    event.target.reset()
  })

  const deleteAdv = (arr) => {
    adv.forEach((item =>
      item.remove()
    ))
  }

  const changes = () => {
    genre.textContent = 'History'

    wrapper.style.backgroundImage = 'url("img/91.jpg")'
  }

  const sortArr = (arr) => {
    arr.sort()
  }

  const createSeriesList = (series, parent) => {
    parent.innerHTML = ''
    sortArr(series)

    series.forEach((item, index) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">
      ${index + 1}  ${item}
       <div class="delete"></div>
      </li>
     `
    })
    document.querySelectorAll('.delete').forEach((trash, index) => {
      trash.addEventListener('click', () => {
        trash.parentElement.remove()
        seriesDB.series.splice(index, 1)
        createSeriesList(series, parent)

      })
    })
  }
  sortArr(seriesDB.series)
  deleteAdv(adv)
  changes()
  createSeriesList(seriesDB.series, seriesList)
})
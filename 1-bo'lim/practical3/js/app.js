'use strict'
let numberOfSeries;

function startFunc() {
  numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

  while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')
  }
}
startFunc();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

function favouriteSeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?"),
      b = prompt('Nechi baxo berasiz?')

    if (a != null && b != null && a != '' && b != '') {
      seriesDB.series[a] = b
      console.log('done')
    } else {
      console.log('error')
      i--
    }
  }
}
// favouriteSeries();

function detectLevelSeries() {
  if (seriesDB.count < 5) {
    console.log('Kam serial ko’ripsiz')
  } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log('Siz classik tamoshabin ekansiz')
  } else if (seriesDB.count >= 10) {
    console.log('Siz serialchi zvezda ekansiz')
  } else {
    console.log('Error')
  }
}
detectLevelSeries();
function showDb(hidden) {
  if (!hidden) {
    console.log(seriesDB)
  }
}
showDb(seriesDB.private);

function writeGenres() {
  for (let i = 0; i <= 2 ; i++) {
    const  genre = prompt(`Yaxshi korgan janrigiz ${i + 1}`)
    seriesDB.genres[i]  = genre
  }
}
writeGenres();
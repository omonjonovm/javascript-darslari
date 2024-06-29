"use strict"
const numberOfSeries = +prompt("Nechta film ko'rdingiz?", '')

const filmsDB = {
  count : numberOfSeries,
  films:{},
  actors:{},
  generes:[],
  private:false
}

const a = prompt("Oxirgi ko'rgan filmingiz?","");
const b = prompt("Necha baxo berasiz?", "");
const s = prompt("Oxirgi ko'rgan filmingiz?","");
const d = prompt("Necha baxo berasiz?", "");

filmsDB.films[a] = b
filmsDB.films[s] = d

console.log(filmsDB);
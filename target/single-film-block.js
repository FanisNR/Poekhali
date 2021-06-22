"use strict";

var filmDataSF = [{
  countries: [{
    country: "США"
  }]
}];
var tableBodySF = document.getElementById("sf-table");
tableBodySF.innerHTML = "";

for (var index = 0; index < filmDataSF.length; index++) {
  var filmSF = new FilmSF(filmDataSF[index]);

  if (filmSF.isNotForAdult()) {
    tableBodySF.innerHTML += filmSF.renderFilmTableItemSF();
  }
}
//# sourceMappingURL=single-film-block.js.map
"use strict";

var filmData = [{
  id: 11,
  title: "XXX",
  adult: true,
  genres: []
}, {
  id: 22,
  title: "Человек-паук",
  adult: false,
  genres: [{
    name: "Фантастика"
  }, {
    name: "боевик"
  }, {
    name: "приключения"
  }]
}, {
  id: 33,
  title: "Собачья жизнь 2",
  genres: [{
    name: "Фэнтэзи"
  }, {
    name: "драма"
  }, {
    name: "комедия"
  }]
}, {
  id: 44,
  title: "История игрушек 4",
  genres: [{
    name: "Мультфильм"
  }, {
    name: "фэнтэзи"
  }, {
    name: "комедия"
  }]
}, {
  id: 55,
  title: "Люди в чёрном: Интэрнэшнл",
  genres: [{
    name: "Фантастика"
  }, {
    name: "боевик"
  }, {
    name: "комедия"
  }]
}];
var tableBody = document.getElementById("schedule_table_body");
tableBody.innerHTML = "";

for (var index = 0; index < filmData.length; index++) {
  var film = new Film(filmData[index]);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItem();
  }
}
//# sourceMappingURL=films-table.js.map
"use strict";

function toHour(num) {
  return "".concat(num).padStart(2, "0");
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var kinopoiskapiunofficialRequest = function kinopoiskapiunofficialRequest(url) {
  return fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': '1eb612fe-4b9a-4151-94c8-1e24e42c687b'
    },
    cors: 'no-cors'
  });
};

var topFilmsRequest = function topFilmsRequest() {
  return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
};

var filmsDetailsRequest = function filmsDetailsRequest(id) {
  return kinopoiskapiunofficialRequest("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(id));
};
//# sourceMappingURL=utils.js.map
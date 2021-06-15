"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blockFilmsWrapper = document.getElementById('film-1__films__wrapper');
blockFilmsWrapper.innerHTML = '';
var apiHeaders = {
  'accept': 'application/json',
  'X-API-KEY': '1eb612fe-4b9a-4151-94c8-1e24e42c687b'
};
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
  headers: _objectSpread({}, apiHeaders),
  cors: 'no-cors'
}).then(function (data) {
  return data.json();
}).then(function (data) {
  data.films.forEach(function (film) {
    var id = "blocks-films-desk-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n            <a class=\"film-1\" style=\"background-image:url(".concat(film.posterUrlPreview, "); background-size: 100% 100%;\" href=\"\" onclick=\"return false;\" id=\"film-1__films__wrapper\" target=\"_blank\">\n                <div class=\"playbill__gray\">\n                    <div class=\"playbill__green\">\n                        <span class=\"playbill__title\">").concat(film.nameRu, "<br></span>\n                        <span id=\"").concat(id, "\" class=\"playbill__subtitle\"> ...\u0416\u0434\u0438\u0442\u0435</span> \n                    </div>\n                </div>    \n            </a>\n            ");
    fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(film.filmId), {
      headers: _objectSpread({}, apiHeaders),
      cors: 'no-cors'
    }).then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var description = _ref.data.description;
      var desc = document.getElementById(id);
      desc.innerHTML = description;

      if (!description) {
        var root = desc.parentNode.parentNode.parentNode;
        blockFilmsWrapper.removeChild(root);
      }
    });
  });
});
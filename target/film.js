"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
function FilmProto(filmData) {
    this.data = filmData;
    this.start = `${toHour(getRandomToMax(14) +9)}:${toMinutes(getRandomToMax(6))}`;
    this.start = `${toHour(getRandomToMax(14) +9)}:${toMinutes(Math.floor(Math.random() * 6))}`;
    this.start = `${toHour(getRandomToMax(14) +9)}:${Math.floor(Math.random() * 6) + "0"}`;
}

FilmProto.prototype.isNotForAdult = function() {
    return !this.data.adult;
}

FilmProto.prototype.getId = function() {
    return this.data.id || this.data.title.replaceALL(" ", "-");
}

FilmProto.prototype.getStart = function() {
    return this.start;
}

FilmProto.prototype.getTitle = function() {
    return this.data.title;
}

FilmProto.prototype.getGenres = function() {
    return this.data.genres 
            .map(g => g.name)
            .join(", ");
}

FilmProto.prototype.renderFilmTableItem = function() {
    return `
    <tr>
        <td>
            <label class="schedule__checkbox">
                <input id="${this.getId()}" type="checkbox" class="schedule__input">
                <span class="schedule__fake-checkbox"></span>
            </label>
        </td>
        <td>${this.getStart()}</td>
        <td>${this.getTitle()}</td>
        <td>${this.getGenres()}</td>
    </tr>
    `
}
*/
var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(Math.floor(Math.random() * 6) + "0");
    /*this.id = filmData.id || filmData.title.replaceALL(" ", "-");*/

    this.id = filmData.id || filmData.data.title.replaceALL(" ", "-");
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.data.id;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "getGenres",
    value: function getGenres() {
      return this.data.genres.map(function (g) {
        return g.name;
      }).join(", ");
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr>\n            <td>\n                <label class=\"schedule__checkbox\">\n                    <input id=\"".concat(this.getId(), "\" type=\"checkbox\" class=\"schedule__input\">\n                    <span class=\"schedule__fake-checkbox\"></span>\n                </label>\n            </td>\n            <td>").concat(this.getStart(), "</td>\n            <td>").concat(this.getTitle(), "</td>\n            <td>").concat(this.getGenres(), "</td>\n        </tr>\n        ");
    }
  }]);

  return Film;
}();
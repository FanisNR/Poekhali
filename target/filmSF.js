"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _getCountry = /*#__PURE__*/new WeakSet();

var FilmSF = /*#__PURE__*/function () {
  function FilmSF(filmDataSF) {
    _classCallCheck(this, FilmSF);

    _getCountry.add(this);

    this.data = filmDataSF;
  }

  _createClass(FilmSF, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return this.data.adult;
    }
  }, {
    key: "renderFilmTableItemSF",
    value: function renderFilmTableItemSF() {
      return "\n        <tr>\n            <td class=\"head_info\">\u0421\u0442\u0440\u0430\u043D\u0430</td>\n            <td class=\"head_desc \" id=\"sf-country\">".concat(_classPrivateMethodGet(this, _getCountry, _getCountry2).call(this), "</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440</td>\n            <td class=\"head_desc\">\u041C\u0438\u0445\u0430\u044D\u043B\u044C \u041D\u043E\u0435\u0440</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439</td>\n            <td class=\"head_desc\">\u0414\u0436\u0435\u0441\u043F\u0435\u0440 \u0424\u0438\u043D\u043A, \u041C\u0438\u0445\u0430\u044D\u043B\u044C \u041D\u043E\u0435\u0440</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u041F\u0440\u043E\u0434\u044E\u0441\u0435\u0440</td>\n            <td class=\"head_desc\">\u041C\u0430\u0442\u0438\u043B\u044C\u0434\u0430 \u0410\u043F\u043F\u0435\u043B\u0438\u043D, \u0420\u0435\u043D\u0435 \u042D\u0437\u0440\u0430, \u0422\u043E\u043C\u0430\u0441 \u0420\u0430\u0434\u0443\u0440, ...</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440</td>\n            <td class=\"head_desc\">\u0421\u0442\u0443\u0440\u043B\u0430 \u0411\u0440\u0430\u043D\u0434\u0442 \u0413\u0440\u0451\u0432\u043B\u0435\u043D</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440</td>\n            <td class=\"head_desc\">\u0420\u0443\u043D\u0435 \u0422\u043E\u043D\u0441\u0433\u043E\u0440 \u0421\u0451\u0440\u0435\u043D\u0441\u0435\u043D</td>\n        </tr>\n        <tr>\n            <td class=\"head_info\">\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A</td>\n            <td class=\"head_desc\">\u0421\u043E\u0440\u0435\u043D \u0428\u0432\u0430\u0440\u0446\u0431\u0435\u0440\u0433, \u041B\u0443\u0438\u0437 \u041D\u0438\u0441\u0441\u0435\u043D</td>\n        </tr>\n        <tr class=\"head_desc__bold_block\">\n            <td class=\"head_info\">\u0412\u0440\u0435\u043C\u044F</td>\n            <td class=\"head_info head_desc__bold\"> 104 \u043C\u0438\u043D. / 01:44</td>\n        </tr>\n        ");
    }
  }]);

  return FilmSF;
}();

function _getCountry2() {
  return this.data.countries.map(function (g) {
    return g.name;
  }).join(", ");
}
//# sourceMappingURL=filmSF.js.map
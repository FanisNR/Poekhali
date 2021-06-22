"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var blockFilmsWrapperOther = document.getElementById('other__films__wrapperOther');
blockFilmsWrapperOther.innerHTML = '';

function renderFilmblock(posterUrl, nameRu, id, year, distributors) {
  var wrapperOther = document.createElement('div');
  wrapperOther.classList.add('film_block_carousel');
  var wrap_block_carousel__img = document.createElement('div');
  wrap_block_carousel__img.classList.add('wrap_block_carousel__img');
  var imgTag = document.createElement('img');
  imgTag.src = posterUrl;
  var film_block_wrap_other_films = document.createElement('div');
  film_block_wrap_other_films.classList.add('film_block_wrap_other_films');
  var name_block_film = document.createElement('span');
  name_block_film.classList.add('name_block_film');
  var author_year_block_film = document.createElement('span');
  author_year_block_film.classList.add('author_year_block_film');
  name_block_film.textContent = nameRu;
  author_year_block_film.textContent = year, distributors;
  wrapperOther.href = "/single/?id=".concat(id);
  wrapperOther.append(wrap_block_carousel__img);
  wrapperOther.append(film_block_wrap_other_films);
  wrap_block_carousel__img.append(imgTag);
  film_block_wrap_other_films.append(name_block_film);
  film_block_wrap_other_films.append(author_year_block_film);
  return [wrapperOther, film_block_wrap_other_films];
}

var fetchBlockFilmsSF = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var resultSF, data, requestSF, filmblocksMapSF, elements;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return topFilmsRequest();

          case 2:
            resultSF = _context3.sent;
            _context3.next = 5;
            return resultSF.json();

          case 5:
            data = _context3.sent;
            requestSF = [];
            filmblocksMapSF = new Map();
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(film) {
                var _renderFilmblock, _renderFilmblock2, filmblock, playbillSubtitle;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _renderFilmblock = renderFilmblock("url(".concat(film.posterUrlPreview, ")"), film.nameRu, film.filmId), _renderFilmblock2 = _slicedToArray(_renderFilmblock, 2), filmblock = _renderFilmblock2[0], playbillSubtitle = _renderFilmblock2[1];
                        filmblocksMapSF.set(film.filmId, filmblock);
                        requestSF.push(new Promise( /*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                            var detailResult, detailsData, description;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return filmsDetailsRequest(film.filmId);

                                  case 2:
                                    detailResult = _context.sent;
                                    _context.next = 5;
                                    return detailResult.json();

                                  case 5:
                                    detailsData = _context.sent;
                                    description = detailsData.data.description;

                                    if (!description) {
                                      filmblocksMapSF["delete"](film.filmId);
                                    } else {
                                      playbillSubtitle.textContent = description;
                                    }

                                    resolve();

                                  case 9:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x2, _x3) {
                            return _ref3.apply(this, arguments);
                          };
                        }()));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 11;
            return Promise.all(requestSF);

          case 11:
            elements = _toConsumableArray(filmblocksMapSF.values()).slice(0, 9);
            blockFilmsWrapperOther.append.apply(blockFilmsWrapperOther, _toConsumableArray(elements));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchBlockFilmsSF() {
    return _ref.apply(this, arguments);
  };
}();

fetchBlockFilmsSF();
//# sourceMappingURL=other__films.js.map
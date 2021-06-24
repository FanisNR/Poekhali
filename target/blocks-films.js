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

var blockFilmsWrapper = document.getElementById('film-1__films__wrapper');

function renderFilmblock(posterUrl, title, id) {
  var wrapper = document.createElement('a');
  wrapper.classList.add('film-1');
  wrapper.style.backgroundImage = posterUrl;
  wrapper.style.backgroundSize = "100% auto";
  var playbillGray = document.createElement('div');
  playbillGray.classList.add('playbill__gray');
  var playbillGreen = document.createElement('div');
  playbillGreen.classList.add('playbill__green');
  var playbillTitle = document.createElement('span');
  playbillTitle.classList.add('playbill__title');
  playbillTitle.textContent = title;
  var playbillSubtitle = document.createElement('span');
  playbillSubtitle.classList.add('playbill__subtitle'); //playbillSubtitle.textContent = '...Ждите';

  wrapper.href = "/single/?id=".concat(id);
  wrapper.append(playbillGray);
  playbillGray.append(playbillGreen);
  playbillGreen.append(playbillTitle, playbillSubtitle);
  return [wrapper, playbillSubtitle];
}

var fetchBlockFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var result, data, request, filmblocksMap, elements;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return topFilmsRequest();

          case 2:
            result = _context3.sent;
            _context3.next = 5;
            return result.json();

          case 5:
            data = _context3.sent;
            request = [];
            filmblocksMap = new Map();
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(film) {
                var _renderFilmblock, _renderFilmblock2, filmblock, playbillSubtitle;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _renderFilmblock = renderFilmblock("url(".concat(film.posterUrlPreview, ")"), film.nameRu, film.filmId), _renderFilmblock2 = _slicedToArray(_renderFilmblock, 2), filmblock = _renderFilmblock2[0], playbillSubtitle = _renderFilmblock2[1];
                        filmblocksMap.set(film.filmId, filmblock);
                        request.push(new Promise( /*#__PURE__*/function () {
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
                                      filmblocksMap["delete"](film.filmId);
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
            return Promise.all(request);

          case 11:
            blockFilmsWrapper.innerHTML = '';
            elements = _toConsumableArray(filmblocksMap.values()).slice(0, 9);
            blockFilmsWrapper.append.apply(blockFilmsWrapper, _toConsumableArray(elements));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchBlockFilms() {
    return _ref.apply(this, arguments);
  };
}();

fetchBlockFilms();
//# sourceMappingURL=blocks-films.js.map
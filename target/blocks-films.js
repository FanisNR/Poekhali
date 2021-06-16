"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var blockFilmsWrapper = document.getElementById('film-1__films__wrapper');
blockFilmsWrapper.innerHTML = '';

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

var fetchBlockFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return topFilmsRequest();

          case 2:
            result = _context2.sent;
            _context2.next = 5;
            return result.json();

          case 5:
            data = _context2.sent;
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(film) {
                var id, wrapper, playbillGray, playbillGreen, playbillTitle, playbillSubtitle, detailResult, detailsData, description;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        id = "blocks-films-desk-".concat(film.filmId);
                        wrapper = document.createElement('a');
                        wrapper.classList.add('film-1');
                        wrapper.style.backgroundImage = "url(".concat(film.posterUrlPreview, ")");
                        wrapper.style.backgroundSize = "100% auto";
                        playbillGray = document.createElement('div');
                        playbillGray.classList.add('playbill__gray');
                        playbillGreen = document.createElement('div');
                        playbillGreen.classList.add('playbill__green');
                        playbillTitle = document.createElement('span');
                        playbillTitle.classList.add('playbill__title');
                        playbillTitle.textContent = film.nameRu;
                        playbillSubtitle = document.createElement('span');
                        playbillSubtitle.classList.add('playbill__subtitle'); //playbillSubtitle.textContent = '...Ждите';

                        blockFilmsWrapper.append(wrapper);
                        wrapper.append(playbillGray);
                        playbillGray.append(playbillGreen);
                        playbillGreen.append(playbillTitle, playbillSubtitle);
                        _context.next = 20;
                        return filmsDetailsRequest(film.filmId);

                      case 20:
                        detailResult = _context.sent;
                        _context.next = 23;
                        return detailResult.json();

                      case 23:
                        detailsData = _context.sent;
                        description = detailsData.data.description;
                        playbillSubtitle.textContent = description;

                        if (!description) {
                          wrapper.remove();
                        }
                        /*blockFilmsWrapper.innerHTML += `
                            <a class="film-1" style="background-image:url(${film.posterUrlPreview}); background-size: 100% auto;" href="" onclick="return false;"  target="_blank">
                                <div class="playbill__gray">
                                    <div class="playbill__green">
                                        <span class="playbill__title">${film.nameRu}<br></span>
                                        <span id="${id}" class="playbill__subtitle"> ...Ждите</span> 
                                    </div>
                                </div>    
                            </a>
                        `
                        */


                      case 27:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchBlockFilms() {
    return _ref.apply(this, arguments);
  };
}();

fetchBlockFilms();
/*
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
        headers: {
            ...apiHeaders
        },
        cors: 'no-cors'
    })
    .then(data => data.json())
    .then(data => {data.films.forEach((film) => {
            const id = `blocks-films-desk-${film.filmId}`
            blockFilmsWrapper.innerHTML += `
            <a class="film-1" style="background-image:url(${film.posterUrlPreview}); background-size: 100% auto;" href="" onclick="return false;"  target="_blank">
                <div class="playbill__gray">
                    <div class="playbill__green">
                        <span class="playbill__title">${film.nameRu}<br></span>
                        <span id="${id}" class="playbill__subtitle"> ...Ждите</span> 
                    </div>
                </div>    
            </a>
            `

            fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
                    headers: {
                        ...apiHeaders
                    },
                    cors: 'no-cors'
            })
            .then(data => data.json())
            .then(({data: {description}}) => {
                const desc = document.getElementById(id);
                desc.innerHTML = description;
                if (!description) {
                    const root = desc.parentNode.parentNode.parentNode;
                    blockFilmsWrapper.removeChild(root);
                }
            })
        })
    })
*/
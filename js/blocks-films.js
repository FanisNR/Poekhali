
const blockFilmsWrapper = document.getElementById('film-1__films__wrapper');
blockFilmsWrapper.innerHTML = '';

const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '1eb612fe-4b9a-4151-94c8-1e24e42c687b',
        },
        cors: 'no-cors'
    });
}

const topFilmsRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1')
}
const filmsDetailsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
}

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest()
    //.then(data => data.json())
    const data = await result.json();

    data.films.forEach(async (film) => {
        const id = `blocks-films-desk-${film.filmId}`;
        const wrapper = document.createElement('a');
        wrapper.classList.add('film-1');
        wrapper.style.backgroundImage = `url(${film.posterUrlPreview})`;
        wrapper.style.backgroundSize = "100% auto";
        const playbillGray = document.createElement('div');
        playbillGray.classList.add('playbill__gray');
        const playbillGreen = document.createElement('div');
        playbillGreen.classList.add('playbill__green');
        const playbillTitle = document.createElement('span');
        playbillTitle.classList.add('playbill__title');
        playbillTitle.textContent = film.nameRu;
        const playbillSubtitle = document.createElement('span');
        playbillSubtitle.classList.add('playbill__subtitle');
        //playbillSubtitle.textContent = '...Ждите';
                
        blockFilmsWrapper.append(wrapper);
        wrapper.append(playbillGray);
        playbillGray.append(playbillGreen);
        playbillGreen.append(playbillTitle, playbillSubtitle);

        const detailResult = await filmsDetailsRequest(film.filmId);
        const detailsData = await detailResult.json();

        const description = detailsData.data.description;
        playbillSubtitle.textContent = description;

        if(!description) {
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
    })
}

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
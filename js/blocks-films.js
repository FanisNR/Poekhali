
const blockFilmsWrapper = document.getElementById('film-1__films__wrapper');
blockFilmsWrapper.innerHTML = '';

const apiHeaders = {
    'accept': 'application/json',
    'X-API-KEY': '1eb612fe-4b9a-4151-94c8-1e24e42c687b',
}

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
            <a class="film-1" style="background-image:url(${film.posterUrlPreview}); background-size: 100% 100%;" href="" onclick="return false;" id="film-1__films__wrapper" target="_blank">
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
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

function renderFilmblock(posterUrl, title) {
    const wrapper = document.createElement('a');
    wrapper.classList.add('film-1');
    wrapper.style.backgroundImage = posterUrl;
    wrapper.style.backgroundSize = "100% auto";
    const playbillGray = document.createElement('div');
    playbillGray.classList.add('playbill__gray');
    const playbillGreen = document.createElement('div');
    playbillGreen.classList.add('playbill__green');
    const playbillTitle = document.createElement('span');
    playbillTitle.classList.add('playbill__title');
    playbillTitle.textContent = title;
    const playbillSubtitle = document.createElement('span');
    playbillSubtitle.classList.add('playbill__subtitle');
    //playbillSubtitle.textContent = '...Ждите';
    wrapper.href = `/single/`;
    wrapper.append(playbillGray);
    playbillGray.append(playbillGreen);
    playbillGreen.append(playbillTitle, playbillSubtitle);  
    


    return [wrapper, playbillSubtitle];  
}

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest()
    //.then(data => data.json())
    const data = await result.json();

    const request = [];
    const filmblocksMap = new Map();

    data.films.forEach(async (film) => {
        const [filmblock, playbillSubtitle] = renderFilmblock(`url(${film.posterUrlPreview})`, film.nameRu)
        
        filmblocksMap.set(film.filmId, filmblock)

        request.push(new Promise(async(resolve, reject) => {
            const detailResult = await filmsDetailsRequest(film.filmId);
            const detailsData = await detailResult.json();

            const description = detailsData.data.description;
            
         
            if(!description) {
                filmblocksMap.delete(film.filmId);
            } else {
                playbillSubtitle.textContent = description;
            }
            resolve();
        })); 
        
    })
    await Promise.all(request);
    //blockFilmsWrapper.append(filmblock);
    /*let i = 0;
    for (const [id, element] of filmblocksMap) {
        blockFilmsWrapper.append(element)
        i++;

        if (i >= 9){
            break;
        }
    }*/
    const elements = [...filmblocksMap.values()].slice(0, 9);

    blockFilmsWrapper.append(...elements);
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
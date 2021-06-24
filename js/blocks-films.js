const blockFilmsWrapper = document.getElementById('film-1__films__wrapper');


function renderFilmblock(posterUrl, title, id) {
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
    wrapper.href = `/single/?id=${id}`;
    wrapper.append(playbillGray);
    playbillGray.append(playbillGreen);
    playbillGreen.append(playbillTitle, playbillSubtitle);  
    


    return [wrapper, playbillSubtitle];  
}

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest()

    const data = await result.json();

    const request = [];
    const filmblocksMap = new Map();

    data.films.forEach(async (film) => {
        const [filmblock, playbillSubtitle] = renderFilmblock(`url(${film.posterUrlPreview})`, film.nameRu, film.filmId)
        
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
    blockFilmsWrapper.innerHTML = '';
    const elements = [...filmblocksMap.values()].slice(0, 9);

    blockFilmsWrapper.append(...elements);
}

fetchBlockFilms();

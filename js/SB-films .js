/*

const blockFilmsWrapperSB = document.getElementById('block__films_genre');
blockFilmsWrapperSB.innerHTML = '';


function renderFilmblock(posterUrl, nameRu, id, year) {
    const wrapperSF = document.createElement('div');
    wrapperSF.classList.add('film_block_carousel');
    const imgTag = document.createElement('img');
    imgTag.src = posterUrl;
    const wrap_block_carousel__img = document.createElement('div');
    wrap_block_carousel__img.classList.add('wrap_block_carousel__img');
    const film_block_wrap_other_films = document.createElement('div');
    film_block_wrap_other_films.classList.add('film_block_wrap_other_films');
    const name_block_film = document.createElement('span');
    name_block_film.classList.add('name_block_film');
    const author_year_block_film = document.createElement('span');
    author_year_block_film.classList.add('author_year_block_film');
    name_block_film.textContent = nameRu;

    //playbillSubtitle.textContent = '...Ждите';
    wrapperSF.href = `/single/?id=${id}`;
    wrapperSF.append(wrap_block_carousel__img);
    wrapperSF.append(film_block_wrap_other_films);
    wrap_block_carousel__img.append(imgTag);
    film_block_wrap_other_films.append(name_block_film, author_year_block_film);  
    


    return [wrapperSF];  
}

const fetchBlockFilmsSB = async () => {
    const resultSB = await topFilmsRequest()

    const dataSB = await resultSB.json();

    const requestSB = [];
    const filmblocksMap = new Map();

    dataSB.films.forEach(async (film) => {
        const [filmblock, playbillSubtitle] = renderFilmblock(`url(${film.posterUrlPreview})`, film.nameRu, film.filmId)
        
        filmblocksMap.set(film.filmId, filmblock)

        requestSB.push(new Promise(async(resolve, reject) => {
            const detailResultSB = await filmsDetailsRequest(film.filmId);
            const detailsDataS = await detailResultSB.json();

            const description = detailsDataSB.data.description;
            
         
            if(!description) {
                filmblocksMap.delete(film.filmId);
            } else {
                playbillSubtitle.textContent = description;
            }
            resolve();
        })); 
        
    })
    await Promise.all(request);
    
    const elements = [...filmblocksMap.values()].slice(0, 9);

    blockFilmsWrapperSB.append(...elements);
}

fetchBlockFilmsSB();


*/
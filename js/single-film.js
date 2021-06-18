const likes = document.getElementById('sf-likes');
const SearchParams = new URLSearchParams(location.search);
const stars = document.querySelectorAll('.rt-star');

const filmId = SearchParams.get('id');

const FilmKinopoickData = async () => {
    const answer = await filmsDetailsRequest(filmId);
    const { data: FilmData } = await answer.json();
    console.log(FilmData)
    const header = document.getElementById('sf-header');
    const posterImage = document.querySelector('#sf-poster');
    const description = document.querySelector('#sf-desc');
    const premiere = document.getElementById('sf-premiere');

    header.textContent = FilmData.nameRu;
    description.textContent = FilmData.description;
    posterImage.src = FilmData.posterUrl;
    premiere.textContent = FilmData.premiereRu;
        
}

const fetchfilmMeta = async () => { 
    const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`);
    const { body } = await answer.json();

    const views = document.getElementById('sf-views');
    
    const ratingNumber = document.getElementById('sf-rating-number');
    
    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} likes`;
    const rating = body.ratings.reduce((a, b) => a + b, 0) / body.ratings.length;
    const intRating = Math.round(rating);
    ratingNumber.textContent = Math.floor(rating * 10) / 10 ;
    
    for (let i = 0; i < stars.length; i++) {
        if (i >= intRating) break;
        const star = stars[i];
        star.classList.add('star-selected')

        
    }
}

const likeIcon = document.getElementById('like-icon');
likeIcon.addEventListener('click', () => {
    if(!likeIcon.classList.contains('like-icon--liked')) {
        const likeCount = parseInt(likes.textContent, 10) + 1;

        likes.innerText = `${likeCount} Likes`;
        likeIcon.classList.add('like-icon--liked');
        likes.classList.add('like-icon--liked');

        fetch(
            `http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application'
                },
            }
        );
    }    
})

for (const star of stars) {
    star.addEventListener('click', () => {
        console.log(star.dataset.value);

        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: +star.dataset.value })
        });

    })
}
FilmKinopoickData();
fetchfilmMeta();

    
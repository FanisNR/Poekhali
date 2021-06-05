const films = [
    {
        id: 1,
        start: "01:00",
        title: "XXX",
        adult: true,
        genres: []
    },{
        id: 2,
        start: "10:00",
        title: "Человек-паук",
        adult: false,
        genres: [
            {
                name: "Фантастика",
            },
            {
                name: "боевик",
            },
            { 
                name: "приключения",
            },
        ]
    },{
        id: 3,
        start: "12:00",
        title: "Собачья жизнь 2",
        genres: [
            {
                name: "Фэнтэзи",
            },
            {
                name: "драма",
            },
            { 
                name: "комедия",
            },
        ]
    },{
        id: 4,
        start: "14:00",
        title: "История игрушек 4",
        genres: [
            {
                name: "Мультфильм",
            },
            {
                name: "фэнтэзи",
            },
            { 
                name: "комедия",
            },
        ]
    },{
        id: 5,
        start: "16:00",
        title: "Люди в чёрном: Интэрнэшнл",
        genres: [
            {
                name: "Фантастика",
            },
            {
                name: "боевик",
            },
            { 
                name: "комедия",
            },
        ]
    }
] ;
function renderFilmTableItem(film) {
    return `
    <tr>
        <td>
            <label class="schedule__checkbox">
                <input id="${film.id}" type="checkbox" class="schedule__input">
                <span class="schedule__fake-checkbox"></span>
            </label>
        </td>
        <td>${film.start}</td>
        <td>${film.title}</td>
        <td>${film.genres.map(g => g.name)}</td>
    </tr>
`
}

const tableBody = document.getElementById("schedule_table_body");
tableBody.innerHTML = "";

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
        tableBody.innerHTML += renderFilmTableItem(films[index]);
}
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

const filmHelper = {
    getId() {
        return this.id || this.title.replaceALL(" ", "-");
    },
    getTitle() {
        return this.title;
    },
    getStart() {
        return this.start;
    },
    getGenres() {
        return this.genres 
            .map(g => g.name)
            .join(", ");
    },
}

function renderFilmTableItem(film) {
    return `
    <tr>
        <td>
            <label class="schedule__checkbox">
                <input id="${filmHelper.getId.apply(film)}" type="checkbox" class="schedule__input">
                <span class="schedule__fake-checkbox"></span>
            </label>
        </td>
        <td>${filmHelper.getStart.apply(film)}</td>
        <td>${filmHelper.getTitle.apply(film)}</td>
        <td>${filmHelper.getGenres.apply(film)}</td>
    </tr>
`
}

const tableBody = document.getElementById("schedule_table_body");
tableBody.innerHTML = "";

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
        tableBody.innerHTML += renderFilmTableItem(films[index]);
    }
}
const films = [
    {
        start: "10:00",
        title: "Человек-паук",
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
 const tableBody = document.getElementById("schedule_table_body");
 tableBody.innerHTML = "";

 for (let index = 0; index < films.length; index++) {
    tableBody.innerHTML += `

 <tr>
    <td>
        <label class="schedule__checkbox">
            <input type="checkbox" class="schedule__input">
            <span class="schedule__fake-checkbox"></span>
        </label>
    </td>
    <td>${films[index].start}</td>
    <td>${films[index].title}</td>
    <td>${films[index].genres.map(g => g.name)}</td>
</tr>
`;
}


/*
function FilmProto(filmData) {
    this.data = filmData;
    this.start = `${toHour(getRandomToMax(14) +8)}:${toMinutes(getRandomToMax(6))}`;
    this.start = `${toHour(getRandomToMax(14) +8)}:${toMinutes(Math.floor(Math.random() * 6))}`;
    this.start = `${toHour(getRandomToMax(14) +8)}:${Math.floor(Math.random() * 6) + "0"}`;
}

FilmProto.prototype.isNotForAdult = function() {
    return !this.data.adult;
}

FilmProto.prototype.getId = function() {
    return this.data.id || this.data.title.replaceALL(" ", "-");
}

FilmProto.prototype.getStart = function() {
    return this.start;
}

FilmProto.prototype.getTitle = function() {
    return this.data.title;
}

FilmProto.prototype.getGenres = function() {
    return this.data.genres 
            .map(g => g.name)
            .join(", ");
}

FilmProto.prototype.renderFilmTableItem = function() {
    return `
    <tr>
        <td>
            <label class="schedule__checkbox">
                <input id="${this.getId()}" type="checkbox" class="schedule__input">
                <span class="schedule__fake-checkbox"></span>
            </label>
        </td>
        <td>${this.getStart()}</td>
        <td>${this.getTitle()}</td>
        <td>${this.getGenres()}</td>
    </tr>
    `
}
*/


class Film {
    constructor(filmData) {
        this.data = filmData;
        this.start = `${toHour(randomInteger(9, 22))}:${Math.floor(Math.random() * 6) + "0"}`;
        /*this.id = filmData.id || filmData.title.replaceALL(" ", "-");*/
        this.id = filmData.id || filmData.data.title.replaceALL(" ", "-");
    }

    isNotForAdult() {
        return !this.data.adult;
    }
    #getId() {
        return this.data.id;
    }

    #getStart() {
        return this.start;
    }

    #getTitle() {
        return this.data.title;
    }

    #getGenres() {
        return this.data.genres 
                .map(g => g.name)
                .join(", ");
    }

    renderFilmTableItem() {
        return `
        <tr>
            <td>
                <label class="schedule__checkbox">
                    <input id="${this.#getId()}" type="checkbox" class="schedule__input">
                    <span class="schedule__fake-checkbox"></span>
                </label>
            </td>
            <td>${this.#getStart()}</td>
            <td>${this.#getTitle()}</td>
            <td>${this.#getGenres()}</td>
        </tr>
        `
    }
}


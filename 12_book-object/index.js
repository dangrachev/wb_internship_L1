class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        this._year = year;
    }
}

const book = new Book('Эгоистичный ген', 'Ричард Докинз', 1976);

console.log(`${book.author} - ${book.title}, ${book.year} г.`);

book.author = 'Карл Саган';
book.title = 'Космос';
book.year = '1980';

console.log(`${book.author} - ${book.title}, ${book.year} г.`);

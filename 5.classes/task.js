class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }

    fix() {
        this.state = this._state * 1.5;
    }

    set state(state) {
        if (state >= 100) {
            this._state = 100;
        } else if (state <= 0) {
            this._state = 0
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
        super(name, releaseDate, pagesCount, state, type);
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'book') {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'novel') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'fantastic') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'detective') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class Library {
    constructor(name = '', books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = null;
        const findIndex = this.books.findIndex(book => book[type] === value);
        if (findIndex > -1) {
            book = this.books[findIndex];
        }
        return book;
    }

    giveBookByName(bookName) {
        let book = null;
        const findIndex = this.books.findIndex(book => book.name === bookName);
        if (findIndex > -1) {
          book = this.books[findIndex];
          this.books.splice(findIndex, 1);
        }
        return book;
    }
}

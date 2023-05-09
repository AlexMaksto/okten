/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
- знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
 */

const books = [
    {title: 'Book 1', pages: 100, authors: ['Author 1'], genres: ['Genre 1', 'Genre 2']},
    {title: 'Book 2', pages: 200, authors: ['Author 2', 'Author 3'], genres: ['Genre 3']},
    {title: 'Book 3', pages: 150, authors: ['Author 4'], genres: ['Genre 4', 'Genre 5']},
    {title: 'Book 4', pages: 250, authors: ['Author 5'], genres: ['Genre 2', 'Genre 6']},
    {title: 'Book 5', pages: 300, authors: ['Author 6', 'Author 7'], genres: ['Genre 7']},
    {title: 'Book 6', pages: 180, authors: ['Author 8'], genres: ['Genre 1', 'Genre 5']},
    {title: 'Book 7', pages: 150, authors: ['Author 9'], genres: ['Genre 2']},
    {title: 'Book 8', pages: 220, authors: ['Author 10', 'Author 11'], genres: ['Genre 3', 'Genre 7']},
    {title: 'Book 9', pages: 120, authors: ['Author 12'], genres: ['Genre 4']},
    {title: 'Book 10', pages: 190, authors: ['Author 13'], genres: ['Genre 5', 'Genre 6']}
];

/* знайти наібльшу книжку. */
{
    console.log('знайти наібльшу книжку.')
    let tempBook = '';
    for (const book of books) {
        if (tempBook == null) {
            tempBook = book;
        }
        if (book.pages > tempBook.pages) {
            tempBook = book;
        }
    }
    console.log(tempBook);
}

/* знайти книжку/ки з найбільшою кількістю жанрів */
{
    console.log('знайти книжку/ки з найбільшою кількістю жанрів')
    let tempBooks = [];
    let countGenre = 0;
    for (const book of books) {
        if (book.genres.length > countGenre) {
            countGenre = book.genres.length;
        }
    }

    for (const book of books) {
        if (book.genres.length === countGenre) {
            tempBooks[tempBooks.length] = book;
        }
    }
    console.log(tempBooks);
}

/* знайти книжку/ки з найдовшою назвою */
{
    console.log('знайти книжку/ки з найдовшою назвою')
    let tempBooks = [];
    let countLetter = 0;
    for (const book of books) {
        if (book.title.length > countLetter) {
            countLetter = book.title.length;
        }
    }

    for (const book of books) {
        if (book.title.length === countLetter) {
            tempBooks[tempBooks.length] = book;
        }
    }
    console.log(tempBooks);
}

/* знайти книжку/ки які писали 2 автори */
{
    console.log('знайти книжку/ки які писали 2 автори')
    let tempBooks = [];
    for (const book of books) {
        if (book.authors.length === 2) {
            tempBooks[tempBooks.length] = book;
        }
    }
    console.log(tempBooks);
}

/* знайти книжку/ки які писав 1 автор */
{
    console.log('знайти книжку/ки які писали 2 автори')
    let tempBooks = [];
    for (const book of books) {
        if (book.authors.length === 1) {
            tempBooks[tempBooks.length] = book;
        }
    }
    console.log(tempBooks);
}
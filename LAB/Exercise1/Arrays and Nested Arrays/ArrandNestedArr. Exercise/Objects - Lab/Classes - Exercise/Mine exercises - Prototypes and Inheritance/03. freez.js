let book = {title: 'Dune', pages: 400};

Object.freeze(book);

book.pages = 500;

book.author = 'Herbert';

console.log(book.author);

console.log(book.pages);
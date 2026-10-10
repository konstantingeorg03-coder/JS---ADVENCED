class Library {
    constructor(){
        this.books = {};
    }

    addBook(title, genre){
        if(!(genre in this.books)){
            this.books[genre] = [];;
        }

        this.books[genre].push(title);

        return `Added ${title} to ${genre}`;
    }

    countBooks(genres){
        if(!this.books[genres]){
            return 0;
        }

        return this.books[genres].length;
    }
}

const lib = new Library();
console.log(lib.addBook('Dune', 'sci-fi'));   // Added Dune to sci-fi
lib.addBook('Foundation', 'sci-fi');
lib.addBook('It', 'horror');
console.log(lib.countBooks('sci-fi'));        // 2
console.log(lib.countBooks('romance'));       // 0
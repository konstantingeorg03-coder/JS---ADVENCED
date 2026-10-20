class LibraryCollection {
    constructor(capacity){
        this.capacity = Number(capacity);

        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length >= this.capacity){
            throw new Error ('Not enough space in the collection.');
        }

        this.books.push({bookName, bookAuthor, payed: false});

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName){
        let bookFind = this.books.find(b => b.bookName === bookName);

        if(!bookFind){
            throw new Error (`${bookName} is not in the collection.`);
        }

        if(bookFind.payed === true){
            throw new Error (`${bookName} has already been paid.`);
        }

        bookFind.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        let bookFind = this.books.find(b => b.bookName === bookName);

        if(!bookFind){
            throw new Error ("The book, you're looking for, is not found.");
        }

        if(bookFind.payed === false){
            throw new Error (`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(bookFind);

        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){
        let result = [];

        if(bookAuthor === undefined){
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            let emptySlots = this.capacity - this.books.length;

            result.push(`The book collection has ${emptySlots} empty spots left.`);

             for(let book of this.books){
                let status;

                if(book.payed === false){
                    status = 'Not Paid';
                }else if(book.payed === true){
                    status = 'Has Paid';
                }

                result.push(`${book.bookName} == ${book.bookAuthor} - ${status}.`);
            }

            return result.join('\n');
        }else{
            let bookFind = this.books.find(a => a.bookAuthor === bookAuthor);

            if(!bookFind){
                throw new Error (`${bookAuthor} is not in the collection.`);
            }

            let status;

            if(bookFind.payed === false){
                status = 'Not Paid.';
            }else if(bookFind.payed === true){
                status = 'Has Paid.'
            }

            return `${bookFind.bookName} == ${bookFind.bookAuthor} - ${status}`;
        }
    }
}
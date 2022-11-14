import { Book } from "./Book";
export class BookManager {
    books: Book[] = [];
    constructor() {}
    add(book: Book): void {
        this.books.push(book)
    }
    getList():Book[] {
        return this.books
    }
    delete(id: string): void {
        let indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete,1)
        } else {
            throw new Error("delete error");
        }
    }
    update (id: string, name: string): void {
        let indexBookUpdate = this.findBook(id);
        if(indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name)
        } else {
            throw new Error("update error"); 
        }
    }
    findBook (id: string): number {
        let index = -1;
        this.books.forEach((book,i) => {
            if(book.id == id) {
                index = i;
            }
        })
        return index;
    }
}
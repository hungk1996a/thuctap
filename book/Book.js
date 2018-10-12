class Book {
    constructor(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    getId(){
        return this.id;
    }
    /**
     *
     * @param {string} author
     */
    setAuthor(author) {
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    setPublisher(publisher) {
        this.publisher = publisher;
    }

    getPublisher() {
        return this.publisher;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}
module.export = Book;
class BookFactory {

    makeFromRequest(data) {
        let book = new Book(data.title);
        book.setAuthor(data.author);
    }
}
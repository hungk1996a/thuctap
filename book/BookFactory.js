class BookFactory {

    makeFromRequest(data2) {
        let book = new Book(data2.title);
        book.setAuthor(data2.author);
    }
}
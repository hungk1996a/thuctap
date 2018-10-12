class BookFactory {

    makeFromRequest(data1) {
        let book = new Book(data1.title);
        book.setAuthor(data1.author);
    }
}
package com.library;

public class BookService {
    private BookRepository bookRepository;
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public void displayBooks() {
        System.out.println("Book List from BookService:");
        for (String book : bookRepository.getBooks()) {
            System.out.println("# " + book);
        }
    }
}

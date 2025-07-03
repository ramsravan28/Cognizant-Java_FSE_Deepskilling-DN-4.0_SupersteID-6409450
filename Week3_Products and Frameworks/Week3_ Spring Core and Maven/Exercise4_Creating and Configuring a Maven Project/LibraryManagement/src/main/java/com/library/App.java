package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	private static ApplicationContext context;
    public static void main(String[] args) {
        System.out.println("Starting Spring ApplicationContext...");
        context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Core is working: Beans loaded successfully from XML.");
        BookService bookService = context.getBean("bookService", BookService.class);
        System.out.println("Calling BookService.displayBooks().");
        bookService.displayBooks();
        System.out.println("Spring WebMVC is integrated (dependency available via Maven).");
    }
}

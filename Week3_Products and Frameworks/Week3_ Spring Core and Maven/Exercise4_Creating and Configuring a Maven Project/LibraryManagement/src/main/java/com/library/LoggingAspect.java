package com.library;

public class LoggingAspect {
    public void logBefore() {
        System.out.println("Spring AOP is working: LoggingAspect triggered before BookService.displayBooks()");
    }
}

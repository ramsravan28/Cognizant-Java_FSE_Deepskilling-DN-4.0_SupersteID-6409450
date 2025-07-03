package com.library;

import java.util.Arrays;
import java.util.List;

public class BookRepository {
    public List<String> getBooks() {
        return Arrays.asList("Maven", "Spring", "Spring Boot", "Gradle");
    }
}

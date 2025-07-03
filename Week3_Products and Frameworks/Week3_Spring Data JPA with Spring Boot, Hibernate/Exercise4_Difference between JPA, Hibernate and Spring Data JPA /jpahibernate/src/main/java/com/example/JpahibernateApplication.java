package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.hibernate.HibernateTest;
import com.example.service.EmployeeService;

@SpringBootApplication
public class JpahibernateApplication implements CommandLineRunner {
    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(JpahibernateApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        new HibernateTest().saveEmployee();         // Hibernate
        employeeService.saveEmployee();             // Spring Data JPA
    }
}

package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.entity.Employee;
import com.example.repository.EmployeeRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Transactional
    public void saveEmployee() {
        Employee emp = new Employee(2, "Spring JPA User", 60000.0);
        repository.save(emp);
    }
}

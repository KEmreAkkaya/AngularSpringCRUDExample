package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.example.demo.model.Employee;

public interface EmployeeRepository extends Repository<Employee, Long> {
    List<Employee> findAll();
    //Employee findOne(int id);
    Employee save(Employee employee);
    Employee delete (Employee employee);
	Employee findById(Long id);
}

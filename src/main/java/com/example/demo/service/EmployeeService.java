package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Employee;

public interface EmployeeService {

	List<Employee> list();
	Employee listId(Long id);
	Employee add(Employee employee);
	Employee delete(Long id);
	Employee edit(Employee employee);
}

package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@Override
	public List<Employee> list() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee listId(Long id) {
		
		return employeeRepository.findById(id);
	}

	@Override
	public Employee add(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public Employee delete(Long id) {
		Employee employee = employeeRepository.findById(id);
		return employeeRepository.delete(employee);
	}

	@Override
	public Employee edit(Employee employee) {
		return employeeRepository.save(employee);
	}
  
}

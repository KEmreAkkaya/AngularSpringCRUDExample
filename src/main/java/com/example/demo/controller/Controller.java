package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;




//@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge=3600)
@RestController
@RequestMapping({"/employee"})
public class Controller {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public List<Employee> list ()
	{
		return employeeService.list();
	}
	
	@PostMapping
	public Employee add (@RequestBody Employee employee)
	{
		return employeeService.add(employee);
	}
	
	@GetMapping(path= {"/{id}"})
	public Employee listId(@PathVariable("id") Long id)
	{
		return employeeService.listId(id);
	}
		
	@PutMapping(path = {"/{id}"})
	public Employee edit(@RequestBody Employee employee, @PathVariable("id") Long id) 
	{
		employee.setId(id);
		return employeeService.edit(employee);
		
	}
	
	@DeleteMapping(path = {"/{id}"})
	public Employee delete(@PathVariable("id") Long id) 
	{
		
		return employeeService.delete(id);
		
	}
	
	
	
}

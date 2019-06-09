package com.example.LOEC;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Controller("/employee")
@CrossOrigin(origins="http://localhost:4200")
public class EmployeeController {
	
	
	List<Employee> employees;
	
	public EmployeeController() {
		employees = new ArrayList<Employee>();
	}
	
	
	@GetMapping() // localhost:8080
	public List<Employee> getEmployees(){
		return employees;
	}
	
	@PostMapping()
	public Employee addEmployee(@RequestBody Employee employee) {
		employees.add(employee);
		return employee;
	}

}

class Employee {
	
	private String employeeName;
	private String employeeEmail;
	private String employeePhone;
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String name) {
		this.employeeName = name;
	}
	public String getEmployeeEmail() {
		return employeeEmail;
	}
	public void setEmployeeEmail(String email) {
		this.employeeEmail = email;
	}
	public String getEmployeePhone() {
		return employeePhone;
	}
	public void setEmployeePhone(String phone) {
		this.employeePhone = phone;
	}
	
}
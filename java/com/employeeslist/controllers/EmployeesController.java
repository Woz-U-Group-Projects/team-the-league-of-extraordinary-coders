package com.employeeslist.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.employeeslist.models.Employee;

@Controller
@RequestMapping({"/", "/employees"})
public class EmployeesController {
	
	@GetMapping()
    public String getAllEmployees(Model model) {
        List<Employee> employees = new ArrayList<Employee>();

        //Code to query the database and
        //add employees to the List will go here
        Connection con;
        try {
            con = DriverManager.getConnection("jdbc:sqlite:./chinook.db", "", "");

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Employees");

            
            while (rs.next()) {
                // create a new Employee object
            	Employee newEmployee = new Employee();
                // get the values from each column of the current row and add them to the new Employee
                newEmployee.setemployeeId(rs.getInt("employeeId"));
                newEmployee.setEmployeeTitle(rs.getString("Title"));
                newEmployee.setemployeeEmployeesId(rs.getInt("EmployeesId"));
                // add the new employee to the employees list
                employees.add(newEmployee);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        model.addAttribute("employees", employees);

        return "employees";
    }

}

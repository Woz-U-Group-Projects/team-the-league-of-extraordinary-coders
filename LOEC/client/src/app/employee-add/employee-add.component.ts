import { Component, OnInit } from '@angular/core';
import { Employees } from '../employee-list/employeeModel';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  newEmployee: Employees = new Employees();

  addEmployee() {
    this.employeeData.addEmployee(this.newEmployee).subscribe(
      e =>
        this.router.navigate(["employeeList"]));
  }

  constructor(private employeeData: EmployeeDataService, private router: Router) { }

  ngOnInit() {
  }

}

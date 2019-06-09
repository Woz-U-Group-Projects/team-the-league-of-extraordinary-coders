import { Component, OnInit } from '@angular/core';
import { Employees } from '../employee-list/employeeModel';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editEmployee: Employees = new Employees();

  saveEmployee() {
    this.employeeData.editEmployee(this.editEmployee).subscribe(e =>
      this.router.navigate(["employeeList"]));
  }

  constructor(private employeeData: EmployeeDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.employeeData
        .getEmployee(+param["id"])
        .subscribe(e => (this.editEmployee = e));
    });
  }
}
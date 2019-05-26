import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Employees } from './employeeModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employees[];

  getEmployees(): void {
    this.employeeData.getEmployees().subscribe(
      e => (this.employeeList = e)
    );
  }

  deleteEmployee(id: number): void {
    this.employeeData.deleteEmployee(id).subscribe(
      e => this.getEmployees());
  }

  constructor(private employeeData: EmployeeDataService, private router: Router, private route: ActivatedRoute) {
    this.employeeData.getEmployees().subscribe(e => (this.employeeList = e));
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Employees } from '../employee-list/employeeModel';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeDetails: Employees;
  id: number;

  constructor(
    private employeeData: EmployeeDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.employeeData.getEmployee(this.id).subscribe(e => (this.employeeDetails = e));
    });
  }
}

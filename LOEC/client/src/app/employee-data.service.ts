import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Employees } from './employee-list/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  employeesUrl = "http://localhost:8080";

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.employeesUrl);
  }

  getEmployee = (id: number): Observable<Employees> => {
    return this.http.get<Employees>(this.employeesUrl + "/" + id)
  }

  addEmployee(employees: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.employeesUrl, employees)
  }

  deleteEmployee(id: number): Observable<Employees> {
    return this.http.delete<Employees>(this.employeesUrl + "/" + id)
  }

  editEmployee(employees: Employees): Observable<Employees> {
    return this.http.put<Employees>(this.employeesUrl + "/" + employees.id, employees)
  }

  constructor(private http: HttpClient) { }
}

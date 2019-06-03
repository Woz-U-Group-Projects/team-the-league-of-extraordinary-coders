import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "employeeList",
    pathMatch: "full"
  },
  {
    path: "employeeList",
    component: EmployeeListComponent
  },
  {
    path: "employeeAdd",
    component: EmployeeAddComponent
  },
  {
    path: "employeeEdit/:id",
    component: EmployeeEditComponent
  },
  {
    path: "employeeDetails/:id",
    component: EmployeeDetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return "employeeList";
}


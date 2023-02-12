import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee/employee-add/employee-add.component';
import { EditEmployeeComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ViewEmployeeComponent } from './components/employee/employee-view/employee-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'Home', component: EmployeeListComponent },
  { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent } 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
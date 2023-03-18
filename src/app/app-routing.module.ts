import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee/employee-add/employee-add.component';
import { EditEmployeeComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ViewEmployeeComponent } from './components/employee/employee-view/employee-view.component';

import { AddPaisComponent } from './components/pais/pais-add/pais-add.component';
import { EditPaisComponent } from './components/pais/pais-edit/pais-edit.component';
import { PaisListComponent } from './components/pais/pais-list/pais-list.component';
import { ViewPaisComponent } from './components/pais/pais-view/pais-view.component';

import { AddEquipeComponent } from './components/equipe/equipe-add/equipe-add.component';
import { EditEquipeComponent } from './components/equipe/equipe-edit/equipe-edit.component';
import { EquipeListComponent } from './components/equipe/equipe-list/equipe-list.component';
import { ViewEquipeComponent } from './components/equipe/equipe-view/equipe-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent },
  
  { path: 'PaisList', component: PaisListComponent },
  { path: 'ViewPais/:paisId', component: ViewPaisComponent },
  { path: 'AddPais', component: AddPaisComponent },
  { path: 'EditPais/:paisId', component: EditPaisComponent } ,
  
  { path: 'EquipeList', component: EquipeListComponent },
  { path: 'ViewEquipe/:equipeId', component: ViewEquipeComponent },
  { path: 'AddEquipe', component: AddEquipeComponent },
  { path: 'EditEquipe/:equipeId', component: EditEquipeComponent } 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
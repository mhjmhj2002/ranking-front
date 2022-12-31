import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { PaisDetailsComponent } from './components/pais-details/pais-details.component';
import { AddPaisComponent } from './components/add-pais/add-pais.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'paises', pathMatch: 'full' },
  { path: 'paises', component: PaisesListComponent },
  { path: 'paises/:id', component: PaisDetailsComponent },
  { path: 'add', component: AddPaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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

import { AddFaseComponent } from './components/fase/fase-add/fase-add.component';
import { EditFaseComponent } from './components/fase/fase-edit/fase-edit.component';
import { FaseListComponent } from './components/fase/fase-list/fase-list.component';
import { ViewFaseComponent } from './components/fase/fase-view/fase-view.component';

import { AddClassificacaoComponent } from './components/classificacao/classificacao-add/classificacao-add.component';
import { EditClassificacaoComponent } from './components/classificacao/classificacao-edit/classificacao-edit.component';
import { ClassificacaoListComponent } from './components/classificacao/classificacao-list/classificacao-list.component';
import { ViewClassificacaoComponent } from './components/classificacao/classificacao-view/classificacao-view.component';

import { AddGrupoComponent } from './components/grupo/grupo-add/grupo-add.component';
import { EditGrupoComponent } from './components/grupo/grupo-edit/grupo-edit.component';
import { GrupoListComponent } from './components/grupo/grupo-list/grupo-list.component';
import { ViewGrupoComponent } from './components/grupo/grupo-view/grupo-view.component';

import { AddJogoComponent } from './components/jogo/jogo-add/jogo-add.component';
import { EditJogoComponent } from './components/jogo/jogo-edit/jogo-edit.component';
import { JogoListComponent } from './components/jogo/jogo-list/jogo-list.component';
import { ViewJogoComponent } from './components/jogo/jogo-view/jogo-view.component';

import { AddPenaltiComponent } from './components/penalti/penalti-add/penalti-add.component';
import { EditPenaltiComponent } from './components/penalti/penalti-edit/penalti-edit.component';
import { PenaltiListComponent } from './components/penalti/penalti-list/penalti-list.component';
import { ViewPenaltiComponent } from './components/penalti/penalti-view/penalti-view.component';

import { AddPlacarComponent } from './components/placar/placar-add/placar-add.component';
import { EditPlacarComponent } from './components/placar/placar-edit/placar-edit.component';
import { PlacarListComponent } from './components/placar/placar-list/placar-list.component';
import { ViewPlacarComponent } from './components/placar/placar-view/placar-view.component';

import { AddProrrogacaoComponent } from './components/prorrogacao/prorrogacao-add/prorrogacao-add.component';
import { EditProrrogacaoComponent } from './components/prorrogacao/prorrogacao-edit/prorrogacao-edit.component';
import { ProrrogacaoListComponent } from './components/prorrogacao/prorrogacao-list/prorrogacao-list.component';
import { ViewProrrogacaoComponent } from './components/prorrogacao/prorrogacao-view/prorrogacao-view.component';

import { AddTemporadaComponent } from './components/temporada/temporada-add/temporada-add.component';
import { EditTemporadaComponent } from './components/temporada/temporada-edit/temporada-edit.component';
import { TemporadaListComponent } from './components/temporada/temporada-list/temporada-list.component';
import { ViewTemporadaComponent } from './components/temporada/temporada-view/temporada-view.component';

import { AddTorneioComponent } from './components/torneio/torneio-add/torneio-add.component';
import { EditTorneioComponent } from './components/torneio/torneio-edit/torneio-edit.component';
import { TorneioListComponent } from './components/torneio/torneio-list/torneio-list.component';
import { ViewTorneioComponent } from './components/torneio/torneio-view/torneio-view.component';

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
  { path: 'EditEquipe/:equipeId', component: EditEquipeComponent },
  
  { path: 'FaseList', component: FaseListComponent },
  { path: 'ViewFase/:faseId', component: ViewFaseComponent },
  { path: 'AddFase', component: AddFaseComponent },
  { path: 'EditFase/:faseId', component: EditFaseComponent },
  
  { path: 'ClassificacaoList', component: ClassificacaoListComponent },
  { path: 'ViewClassificacao/:classificacaoId', component: ViewClassificacaoComponent },
  { path: 'AddClassificacao', component: AddClassificacaoComponent },
  { path: 'EditClassificacao/:classificacaoId', component: EditClassificacaoComponent } ,
  
  { path: 'GrupoList', component: GrupoListComponent },
  { path: 'ViewGrupo/:grupoId', component: ViewGrupoComponent },
  { path: 'AddGrupo', component: AddGrupoComponent },
  { path: 'EditGrupo/:grupoId', component: EditGrupoComponent } ,
  
  { path: 'JogoList', component: JogoListComponent },
  { path: 'ViewJogo/:jogoId', component: ViewJogoComponent },
  { path: 'AddJogo', component: AddJogoComponent },
  { path: 'EditJogo/:jogoId', component: EditJogoComponent } ,
  
  { path: 'PenaltiList', component: PenaltiListComponent },
  { path: 'ViewPenalti/:penaltiId', component: ViewPenaltiComponent },
  { path: 'AddPenalti', component: AddPenaltiComponent },
  { path: 'EditPenalti/:penaltiId', component: EditPenaltiComponent } ,
  
  { path: 'PlacarList', component: PlacarListComponent },
  { path: 'ViewPlacar/:placarId', component: ViewPlacarComponent },
  { path: 'AddPlacar', component: AddPlacarComponent },
  { path: 'EditPlacar/:placarId', component: EditPlacarComponent } ,
  
  { path: 'ProrrogacaoList', component: ProrrogacaoListComponent },
  { path: 'ViewProrrogacao/:prorrogacaoId', component: ViewProrrogacaoComponent },
  { path: 'AddProrrogacao', component: AddProrrogacaoComponent },
  { path: 'EditProrrogacao/:prorrogacaoId', component: EditProrrogacaoComponent } ,
  
  { path: 'TemporadaList', component: TemporadaListComponent },
  { path: 'ViewTemporada/:temporadaId', component: ViewTemporadaComponent },
  { path: 'AddTemporada', component: AddTemporadaComponent },
  { path: 'EditTemporada/:temporadaId', component: EditTemporadaComponent } ,
  
  { path: 'TorneioList', component: TorneioListComponent },
  { path: 'ViewTorneio/:torneioId', component: ViewTorneioComponent },
  { path: 'AddTorneio', component: AddTorneioComponent },
  { path: 'EditTorneio/:torneioId', component: EditTorneioComponent }  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
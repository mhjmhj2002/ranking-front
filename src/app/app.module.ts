import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ViewEmployeeComponent } from './components/employee/employee-view/employee-view.component';
import { AddEmployeeComponent } from './components/employee/employee-add/employee-add.component';
import { EditEmployeeComponent } from './components/employee/employee-edit/employee-edit.component';

import { PaisListComponent } from './components/pais/pais-list/pais-list.component';
import { ViewPaisComponent } from './components/pais/pais-view/pais-view.component';
import { AddPaisComponent } from './components/pais/pais-add/pais-add.component';
import { EditPaisComponent } from './components/pais/pais-edit/pais-edit.component';

import { EquipeListComponent } from './components/equipe/equipe-list/equipe-list.component';
import { ViewEquipeComponent } from './components/equipe/equipe-view/equipe-view.component';
import { AddEquipeComponent } from './components/equipe/equipe-add/equipe-add.component';
import { EditEquipeComponent } from './components/equipe/equipe-edit/equipe-edit.component';

import { FaseListComponent } from './components/fase/fase-list/fase-list.component';
import { ViewFaseComponent } from './components/fase/fase-view/fase-view.component';
import { AddFaseComponent } from './components/fase/fase-add/fase-add.component';
import { EditFaseComponent } from './components/fase/fase-edit/fase-edit.component';

import { ClassificacaoListComponent } from './components/classificacao/classificacao-list/classificacao-list.component';
import { ViewClassificacaoComponent } from './components/classificacao/classificacao-view/classificacao-view.component';
import { AddClassificacaoComponent } from './components/classificacao/classificacao-add/classificacao-add.component';
import { EditClassificacaoComponent } from './components/classificacao/classificacao-edit/classificacao-edit.component';

import { GrupoListComponent } from './components/grupo/grupo-list/grupo-list.component';
import { ViewGrupoComponent } from './components/grupo/grupo-view/grupo-view.component';
import { AddGrupoComponent } from './components/grupo/grupo-add/grupo-add.component';
import { EditGrupoComponent } from './components/grupo/grupo-edit/grupo-edit.component';

import { JogoListComponent } from './components/jogo/jogo-list/jogo-list.component';
import { ViewJogoComponent } from './components/jogo/jogo-view/jogo-view.component';
import { AddJogoComponent } from './components/jogo/jogo-add/jogo-add.component';
import { EditJogoComponent } from './components/jogo/jogo-edit/jogo-edit.component';

import { PenaltiListComponent } from './components/penalti/penalti-list/penalti-list.component';
import { ViewPenaltiComponent } from './components/penalti/penalti-view/penalti-view.component';
import { AddPenaltiComponent } from './components/penalti/penalti-add/penalti-add.component';
import { EditPenaltiComponent } from './components/penalti/penalti-edit/penalti-edit.component';

import { PlacarListComponent } from './components/placar/placar-list/placar-list.component';
import { ViewPlacarComponent } from './components/placar/placar-view/placar-view.component';
import { AddPlacarComponent } from './components/placar/placar-add/placar-add.component';
import { EditPlacarComponent } from './components/placar/placar-edit/placar-edit.component';

import { ProrrogacaoListComponent } from './components/prorrogacao/prorrogacao-list/prorrogacao-list.component';
import { ViewProrrogacaoComponent } from './components/prorrogacao/prorrogacao-view/prorrogacao-view.component';
import { AddProrrogacaoComponent } from './components/prorrogacao/prorrogacao-add/prorrogacao-add.component';
import { EditProrrogacaoComponent } from './components/prorrogacao/prorrogacao-edit/prorrogacao-edit.component';

import { TemporadaListComponent } from './components/temporada/temporada-list/temporada-list.component';
import { ViewTemporadaComponent } from './components/temporada/temporada-view/temporada-view.component';
import { AddTemporadaComponent } from './components/temporada/temporada-add/temporada-add.component';
import { EditTemporadaComponent } from './components/temporada/temporada-edit/temporada-edit.component';

import { TorneioListComponent } from './components/torneio/torneio-list/torneio-list.component';
import { ViewTorneioComponent } from './components/torneio/torneio-view/torneio-view.component';
import { AddTorneioComponent } from './components/torneio/torneio-add/torneio-add.component';
import { EditTorneioComponent } from './components/torneio/torneio-edit/torneio-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    
    PaisListComponent,
    ViewPaisComponent,
    AddPaisComponent,
    EditPaisComponent,
    
    EquipeListComponent,
    ViewEquipeComponent,
    AddEquipeComponent,
    EditEquipeComponent,
    
    FaseListComponent,
    ViewFaseComponent,
    AddFaseComponent,
    EditFaseComponent,
    
    ClassificacaoListComponent,
    ViewClassificacaoComponent,
    AddClassificacaoComponent,
    EditClassificacaoComponent,
    
    GrupoListComponent,
    ViewGrupoComponent,
    AddGrupoComponent,
    EditGrupoComponent,
    
    JogoListComponent,
    ViewJogoComponent,
    AddJogoComponent,
    EditJogoComponent,
    
    PenaltiListComponent,
    ViewPenaltiComponent,
    AddPenaltiComponent,
    EditPenaltiComponent,
    
    PlacarListComponent,
    ViewPlacarComponent,
    AddPlacarComponent,
    EditPlacarComponent,
    
    ProrrogacaoListComponent,
    ViewProrrogacaoComponent,
    AddProrrogacaoComponent,
    EditProrrogacaoComponent,
    
    TemporadaListComponent,
    ViewTemporadaComponent,
    AddTemporadaComponent,
    EditTemporadaComponent,
    
    TorneioListComponent,
    ViewTorneioComponent,
    AddTorneioComponent,
    EditTorneioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

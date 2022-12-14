import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acercade/edit-acercade.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { EditHardsoftComponent } from './components/hardsoft/edit-hardsoft.component';
import { NewHardsoftComponent } from './components/hardsoft/new-hardsoft.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { EditSobremiComponent } from './components/sobremi/edit-sobremi.component';
import { NewSobremiComponent } from './components/sobremi/new-sobremi.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevasob', component: NewSobremiComponent},
  {path:'editsob/:id', component: EditSobremiComponent},
  {path:'nuevaace', component: NewAcercadeComponent},
  {path:'editace/:id', component: EditAcercadeComponent},
  {path:'nuevahar', component: NewHardsoftComponent},
  {path:'edithar/:id', component: EditHardsoftComponent},
  {path: 'nuevahabilidad', component: NuevaHabilidadComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
  {path: 'editarproyecto/:id', component: EditarProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

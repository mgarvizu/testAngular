import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablaComponent} from './components/tabla/tabla.component';

const routes: Routes = [
  {path: 'tabla', component: TablaComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

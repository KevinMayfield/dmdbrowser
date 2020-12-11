import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  // { path: '', redirectTo: 'fhir', pathMatch: 'full'},
  {
    path: '', component: MainComponent,
    children : [
      { path: '', component: BodyComponent},
      { path: ':conceptid', component: BodyComponent}
    ]
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

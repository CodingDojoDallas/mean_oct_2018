import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path: "sanjose",component: SanJoseComponent,},
  {path: "seattle",component: SeattleComponent,},
  {path: "burbank",component: BurbankComponent,},
  {path: "dallas",component: DallasComponent,},
  {path: "dc",component: WashingtonDcComponent,},
  {path: "chicago",component: ChicagoComponent},
  {path: "", pathMatch: "full", redirectTo: "/dallas"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

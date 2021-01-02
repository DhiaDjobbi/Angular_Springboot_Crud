import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturesComponent } from './factures/factures.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';

const routes: Routes = [
  {path: "factures", component : FacturesComponent},
  {path: "newfacture", component : AddFactureComponent},
  { path: "", redirectTo: "factures", pathMatch: "full" },
  {path: "updateFacture/:id", component: UpdateFactureComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

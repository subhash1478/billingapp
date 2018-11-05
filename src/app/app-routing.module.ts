import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'invoice',
  //   pathMatch:'full'
  // },
  {
  path:'',
  loadChildren:'./invoice/invoice.module#InvoiceModule'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

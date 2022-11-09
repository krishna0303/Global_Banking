import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './Components/addcustomer/addcustomer.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'create', component: AddcustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

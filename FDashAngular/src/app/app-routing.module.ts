import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevcreateComponent } from './devcreate/devcreate.component';
import { DevdetailsComponent } from './devdetails/devdetails.component';
import { DevreadingComponent } from './devreading/devreading.component';
import { DevupdateComponent } from './devupdate/devupdate.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: DevreadingComponent },
  { path: 'add', component: DevcreateComponent },
  { path: 'update/:id', component: DevupdateComponent },
  { path: 'details/:id', component: DevdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent }      from './employees/employees.component';
import { EmpinfoComponent }  from './empinfo/empinfo.component';
import { AddemployeeComponent }  from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'addEmployee', component: AddemployeeComponent },
  { path: 'info/:id', component:  ViewemployeeComponent},
  { path: 'editEmployee/:id', component: EmpinfoComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

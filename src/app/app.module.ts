import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { EmpFilterPipe } from './emp-filter.pipe';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }, 
    )
  ],
  declarations: [
    AppComponent,
    EmpFilterPipe,
    AddemployeeComponent,
    ViewemployeeComponent,
    EmpinfoComponent,
    EmployeesComponent,
    HomeComponent,
    NavComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

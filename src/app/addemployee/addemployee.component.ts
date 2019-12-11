import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {

      employees: Emp[];

          constructor(private heroService: EmpService) { }

            ngOnInit() {
              this.getEmps();
            }

      getEmps(): void {
        this.heroService.getEmps()
        .subscribe(employees => this.employees = employees);
      }

        add(name: string, location:string,email: string,mobile: string): void {
          name = name.trim();
          if (!name) { return; }
          this.heroService.addEmp({ name,location,email,mobile } as Emp)
            .subscribe(emp => {
              this.employees.push(emp);
            });
    }
  }

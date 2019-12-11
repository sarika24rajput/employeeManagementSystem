import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls:['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Emp[];
    count : number;
  constructor(private heroService: EmpService) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps(): void {
    this.heroService.getEmps()
    .subscribe(employees => this.employees = employees);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addEmp({ name } as Emp)
      .subscribe(emp => {
        this.employees.push(emp);
      });
  }

  delete(emp: Emp): void {
    this.employees = this.employees.filter(h => h !== emp);
    this.heroService.deleteEmp(emp).subscribe();
  }

}

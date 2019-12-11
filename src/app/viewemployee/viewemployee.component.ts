import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Emp }         from '../emp';
import { EmpService }  from '../emp.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  @Input() emp: Emp;

  constructor(
    private route: ActivatedRoute,
    private heroService: EmpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getEmp(id)
      .subscribe(emp => this.emp = emp);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateEmp(this.emp)
      .subscribe(() => this.goBack());
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevserviceService } from '../services/devservice.service';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-devcreate',
  templateUrl: './devcreate.component.html',
  styleUrls: ['./devcreate.component.css']
})
export class DevcreateComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(
    private employeeService: DevserviceService,
    private router: Router) { }

  ngOnInit() { }

  onSubmit() { this.submitted = true; this.save(); }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    this.employeeService
      .createEmployee(this.employee).subscribe(data => {
        this.employee = new Employee();
        console.log("this.employee is SAVED ===========>>>")
        console.log(this.employee)
        this.gotoList();
      },
        error => console.log(error));
  }


  gotoList() { this.router.navigate(['/employees']); }
}

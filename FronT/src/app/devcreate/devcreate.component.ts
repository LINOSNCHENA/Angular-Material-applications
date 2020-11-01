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

  constructor(private employeeService: DevserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}

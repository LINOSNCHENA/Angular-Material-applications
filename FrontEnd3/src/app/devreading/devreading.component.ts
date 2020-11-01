import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DevserviceService } from '../services/devservice.service';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-devreading',
  templateUrl: './devreading.component.html',
  styleUrls: ['./devreading.component.css']
})
export class DevreadingComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: DevserviceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

}

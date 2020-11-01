import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevserviceService } from '../services/devservice.service';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-devdetails',
  templateUrl: './devdetails.component.html',
  styleUrls: ['./devdetails.component.css']
})
export class DevdetailsComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DevserviceService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {

        console.log("===============A=================");
        console.log(data)
        console.log("===============B=================");
        this.employee = data;

        console.log("===============C=================");
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }

}

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
  activeBanker = null;

  constructor(
    private employeeService: DevserviceService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.activeBanker = data;
        console.log('1. PEMBA-data =======>>>> DETAIL')
        console.log(this.activeBanker)
      }, error => console.log(error));

    this.getBanker(this.route.snapshot.paramMap.get('id'));
  }

  getBanker(id: string): void {
    this.employeeService.getEmployee(this.id)
      .subscribe(
        data => {
          this.activeBanker = data;
          console.log('2-ActiveBanker ===>>> DETAIL')
          console.log(this.activeBanker);
        },
        error => { console.log(error); });
  }

  list() { this.router.navigate(['employees']); }

}

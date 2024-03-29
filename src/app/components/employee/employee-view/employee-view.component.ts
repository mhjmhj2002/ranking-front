import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/employee.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employeeId: any;
  employeeDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];      
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {       
    this.httpProvider.getEmployeeDetailById(this.employeeId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.employeeDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { ServiceService } from '../../Service/service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
     this.service.getEmployee()
    .subscribe(data=>{
      this.employees=data;

    })
  }

  editEmployee(employee:Employee)
  {
    localStorage.setItem("id",employee.id.toString());
    this.router.navigate(["edit"]);
  }

  deleteEmployee(employee:Employee)
  {
   this.service.deleteEmployee(employee)
     .subscribe(data=> {this.employees=this.employees.filter(e=>e!=employee)});
     alert("User deleted successfully!");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit() {
      this.edit();
  }


  edit(){
    //this.employee = new Employee();
    let  id:any = localStorage.getItem("id");
    this.service.getEmployeeId(+id).subscribe(data=>{
      this.employee = data;
    })

  }

  save(employee: Employee ){

    const isNameCorrect= this.validate(employee.name);
    const isSurnameCorrect= this.validate(employee.surname);
    if(isNameCorrect && isSurnameCorrect){
    this.service.updateEmployee(this.employee).subscribe( value => {
      alert("User edited successfully!!")
      this.router.navigate(["list"]);
    })
  } else{alert("The user could not be edited !")}
  }

  validate (pass:any) {
    if (
        /[A-Z]/.test(pass) && // uppercase letter is required
        /[a-z]/.test(pass) && // lowercase letter is required   
        !/[^A-Za-z]/.test(pass) // there is nothing unwanted 
    ) {
    
       return true;    
    }
  
   alert("Your name or surname must contain one uppercase, one lowercase and its length must be at least 3!")
    return false;
    
  }
}

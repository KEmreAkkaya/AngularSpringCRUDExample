import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { ServiceService } from 'src/app/Service/service.service';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee : Employee = new Employee();
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit(): void {
  }

  add(name: string, surname: string , password: string){
    //this.employee = new Employee();
    this.employee.password= password;
    this.employee.name= name;
    this.employee.surname=  surname;
     const isNameCorrect= this.validate(name);
     const isSurnameCorrect= this.validate(surname);
     const isPasswordCorrect= this.validatePassword(password);
    

     

     if(isNameCorrect && isSurnameCorrect && isPasswordCorrect)
     {
       

      const salt = bcrypt.genSaltSync(10);
      this.employee.password = bcrypt.hashSync(password, salt);
     

       this.save(this.employee);}
     else{alert("The user could not be registered !")}
  }

  save(employee: Employee ){
    this.service.createEmployee(this.employee).subscribe( value => {
      alert("User added successfully!")
      this.router.navigate(["list"]);
    })
  }

  

  cancel()
  {
    this.router.navigate(["list"]);
  }

  validatePassword (pass:any) {
    if (
        /[A-Z]/.test(pass) && // uppercase letter is required
        /[a-z]/.test(pass) && // lowercase letter is required
        /[0-9]/.test(pass) && // number is required
        /[!@#$%.]/.test(pass) && // predefined symbol is required
        !/[^A-Za-z0-9!@#$%.]/.test(pass) // there is nothing unwanted 
    ) {

    
      return true;
    }
    alert("Your password must contain one uppercase, one lowercase ,one predefined symbol and its length must be at least 8!")
   return false;
    
}
validate (pass:any) {
  if (
      /[A-Z]/.test(pass) && // uppercase letter is required
      /[a-z]/.test(pass) && // lowercase letter is required   
      !/[^A-Za-z]/.test(pass) // there is nothing unwanted 
  ) 
  { 
     return true;
  }
 alert("Your name or surname must contain one uppercase, one lowercase and its length must be at least 3!")
  return false;
  
}



  
}

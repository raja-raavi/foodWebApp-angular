import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredUsersDataService } from 'src/app/services/registered-users-data.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private router: Router, private builder: FormBuilder, private regUsersService: RegisteredUsersDataService){

  }

  signinForm = this.builder.group({
    userName : [null, [Validators.required]],
    email: [null, [Validators.required, this.testingEmail]],
    password: [null, [Validators.required,this.testingUpperCase, this.testingNumber, Validators.minLength(8)]]
  })

  //testing email format
  testingEmail(email:any){
    let pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(pattern.test(email.value)){
      return null;
    }else{
      return {"invalidEmail":true};
    }
  }

  //testing upper case in password
  testingUpperCase(password){
    let pattern = /[A-Z]/
    if(pattern.test(password.value)){
      return null;
    }
    return {"noUpperCase": true};
  }

  //testing numbers in password
  testingNumber(password){
    let pattern = /[1-10]/
    if(pattern.test(password.value)){
      return null;
    }
    return {"noNumber": true};
  }

  submit(signinForm){
    this.regUsersService.getRegisteredUsers().subscribe(data=>{
      const result = data.find((res:any)=>{
        return res.userName ===signinForm.value.userName.toLowerCase() && res.email === signinForm.value.email && res.password === signinForm.value.password;   
      })
      if(result){
        alert("You are SuccessFully LoggedIn!!!");
        localStorage.setItem("userName", signinForm.value.userName.toLowerCase());
        localStorage.setItem("email",signinForm.value.email);
        localStorage.setItem("password",signinForm.value.password);
        signinForm.reset();
        this.router.navigate(['']);
        return true;
      }else{
        alert("Opps...User Not Found With This Data!!!!");
        return false;
      }
    }, error=>{
      alert("Something Went Wrong...Try Again!!! or DataBase is Not Working");
    })
  }

}

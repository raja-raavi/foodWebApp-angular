import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisteredUsersDataService } from '../../services/registered-users-data.service';
import { Router } from '@angular/router';
import { signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  confirmPass: string = '';
  res: any;
  regEmails: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private regUsersService: RegisteredUsersDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.regUsersService.getRegisteredUsers().subscribe((data) => {
      for (let ele of data) {
        this.regEmails.push(ele.email);
      }
      console.log(this.regEmails);
    });
  }

  signupForm = this.formBuilder.group({
    userName: [null, Validators.required],
    email: [
      null,
      [Validators.required, this.testingEmail],
      this.testDuplicateEmail.bind(this),
    ],
    password: [
      null,
      [
        Validators.required,
        this.testingUpperCase,
        this.testingNumber,
        Validators.minLength(8),
      ],
    ],
    confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
  });

  //checking email format
  testingEmail(email: any) {
    let pattern =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (pattern.test(email.value)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  //checking duplicate email is exists
  testDuplicateEmail(email: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userEnteredEmail = email.value;
        const isDuplicate = this.regEmails.includes(userEnteredEmail);
        resolve(isDuplicate ? { duplicateEmail: true } : null);
      }, 2000);
    });
  }

  //checking upper case in password
  testingUpperCase(password) {
    let pattern = /[A-Z]/;
    if (pattern.test(password.value)) {
      return null;
    }
    return { noUpperCase: true };
  }

  //checking numbers in password
  testingNumber(password) {
    let pattern = /[1-10]/;
    if (pattern.test(password.value)) {
      return null;
    }
    return { noNumber: true };
  }

  //confirm password
  confirmPassword(): boolean {
    if (
      this.signupForm.controls.password.value ===
      this.signupForm.controls.confirmPassword.value
    ) {
      this.confirmPass = '';
      return true;
    } else {
      this.confirmPass = 'Confirm password does not matched';
      return false;
    }
  }

  //capturing the Details provided by user
  submitClicked(signupForm: any) {
    const userData = {
      userName: signupForm.value.userName.toLowerCase(),
      email: signupForm.value.email,
      password: signupForm.value.password,
      confirmPassword: signupForm.value.confirmPassword,
    };

    //posting the data to DB
    this.regUsersService.registeredUsers(userData).subscribe((data) => {
      this.res = data;
      signupForm.reset();
      alert('You have Registered Successfully 😊');
      this.router.navigate(['/auth/signIn']);
    });
  }
}

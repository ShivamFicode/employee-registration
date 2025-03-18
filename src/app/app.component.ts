import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { debounceTime } from 'rxjs';
import { PassMatchValidator } from './Validators/passMatch.validator';
import { EmployeeService } from './services/employee.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
// {
//   isLogin = true;
//   errMsg: { [key: string]: string } = {}; // or errMsg: Record<string,string> = {}
//   signupData!: FormGroup;
//   loginData!: FormGroup;

//   constructor(
//     private route: Router,
//     private passMatch: PassMatchValidator,
//     private employeeService: EmployeeService
//   ) {}

//   // We can also use FormBuilder here, instead of FormGroup
//   initializeForms() {
//     this.signupData = new FormGroup(
//       {
//         name: new FormControl('', Validators.required),
//         age: new FormControl('', Validators.required),
//         gender: new FormControl('', Validators.required),
//         contact: new FormControl('', [
//           Validators.required,
//           Validators.pattern(/^[6-9]\d{9}$/),
//         ]),
//         email: new FormControl('', [Validators.required, Validators.email]),
//         password: new FormControl('', Validators.required),
//         confirmPass: new FormControl('', Validators.required),
//       },
//       // We apply the custom validator at the form group level because it involves comparing two fields. However, this does not affect other fields. The validation applies only to the specific fields inside the function.
//       {
//         validators: this.passMatch.passwordMatchValidator,
//       }
//     );

//     this.loginData = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', Validators.required),
//     });
//   }

//   ngOnInit() {
//     this.initializeForms();
//     // this.checkLoginStatus();

//     this.signupData
//       .get('email')
//       ?.valueChanges.pipe(debounceTime(500))
//       .subscribe((email) => {
//         this.employeeService.isEmailExists(email).subscribe((res) => {
//           if (res) {
//             this.signupData.controls['email'].setErrors({ emailExists: true });
//           } else {
//             this.signupData.controls['email'].setErrors(null);
//           }
//           this.updateErrMsg('email');
//         });
//       });
//   }

//   // checkLoginStatus() {
//   //   const isLoggedIn = localStorage.getItem('isLogin');
//   //   if (isLoggedIn) {
//   //     this.route.navigateByUrl('homePage/search');
//   //   }
//   // }

//   login() {
//     const loginData = this.loginData.value;
//     if (this.loginData.valid) {
//       this.employeeService.login(loginData).subscribe((res) => {
//         console.log('login res :', res);
//       });
//     } else {
//       alert('Invalid email/password');
//     }
//   }

//   signup() {
//     console.log('isnide signup method');
//     if (this.signupData.valid) {
//       const { confirmPass, ...employeeData } = this.signupData.value;
//       this.employeeService.registerEmployee(employeeData).subscribe((data) => {
//         console.log('employee register data :', data);
//       });
//       this.signupData.reset();
//       this.isLogin = true;
//       alert('signup successfully');
//     }
//   }

//   getErrMsg(field: string) {
//     const control = this.isLogin
//       ? this.loginData.controls[field]
//       : this.signupData.controls[field];
//     if (control.errors) {
//       if (control.errors['required']) return `Required field`;
//       else if (control.errors[field] || control.errors['pattern'])
//         return 'Invalid field format';
//       else if (control.errors['passwordMismatch']) return 'Password mismatch';
//       else if (control.errors['emailExists']) return 'Email already exists';
//     }
//     return '';
//   }

//   updateErrMsg(field: string) {
//     this.errMsg[field] = this.getErrMsg(field);
//   }
// }

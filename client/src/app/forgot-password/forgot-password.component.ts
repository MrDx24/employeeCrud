import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { compareValidator } from '../shared/compare-validator.directive';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  psswd = null;
  cnpsswd = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.forgetPasswordForm  = this.fb.group ({
      emailfrgpsswd : ['', Validators.required],
      passwordfrgpsswd : ['', Validators.required],
      conPsswdfrgpsswd : ['', [Validators.required, compareValidator('passwordfrgpsswd')]]
    });

  }

  forgotPassword() {


    this.http.post('http://localhost:3000/user/fgpsswd', this.forgetPasswordForm.value).subscribe((response: any) => {

      console.log(response);
      alert('Password changed Successfully');

    }, (error) => {

      console.log(error);
      alert('Password changing Failed');

    });
  }

  onbackClick() {
    this.router.navigate(['/login']);
  }

  get emailfrgpsswd() {
    return this.forgetPasswordForm.get('emailfrgpsswd');
  }

  get passwordfrgpsswd() {
    return this.forgetPasswordForm.get('passwordfrgpsswd');
  }

  get conPsswdfrgpsswd() {
    return this.forgetPasswordForm.get('conPsswdfrgpsswd');
  }

}

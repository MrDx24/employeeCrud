import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  login() {
    // const data = {
    //   email: this.loginForm.get('email').value,
    //   passWord: this.loginForm.get('passWord').value
    // };

    this.http.post('http://localhost:3000/user/login', this.loginForm.value).subscribe((response: any) => {

      console.log(response);
      alert('Login Successful');
      //this.onCreateUpdate();


    }, (error) => {

      console.log(error);
      alert('Login Failed');

    });
  }

  onSignUpClick() {
    this.router.navigate(['/register']);
  }

  onfgPsswd() {
    this.router.navigate(['/fgpsswd']);
  }

  onCreateUpdate() {
    this.router.navigate(['/createUpdate']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get passWord() {
    return this.loginForm.get('passWord');
  }


}

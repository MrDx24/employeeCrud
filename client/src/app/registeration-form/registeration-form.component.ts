import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent implements OnInit {

  registerationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private routee: Router
    ) { }



  ngOnInit() {

    this.registerationForm = this.fb.group({
      userNameReg: ['', Validators.required],
      passWordReg: ['', Validators.required],
      confirmPsswdReg: ['', Validators.required],
      emailReg: ['', Validators.required],
      mobileReg: ['', Validators.required]
    });
  }

  register() {

      this.http.post('http://localhost:3000/user/register', this.registerationForm.value).subscribe((response: any) => {

      console.log(response);
      alert('Registeration Successful');

    }, (error) => {

      console.log(error);
      alert('Registeration Failed');

    });
  }

}

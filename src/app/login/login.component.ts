import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../environment/environments";
import {APIService} from "../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb : FormBuilder,
    public api : APIService
  ) {
  }
  formUser = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
  })

  submit(){
    if(this.formUser.valid){
      let url = environment.url + `/api/login`
      this.api.postMapping(url, this.formUser.value, (data : any)=>{
        this.api.apiError = null;
        this.api.alertSuccess("Login Success")

      })
    }
  }
}

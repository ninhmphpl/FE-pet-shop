import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {APIService} from "../service/api.service";
import {environment} from "../../environment/environments";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  message = ''
  constructor(
    private fb : FormBuilder,
    private api : APIService
  ) {
  }
  signupForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z\-]+$/)]],
    password : ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    rePassword : ['', [Validators.required]],
  })

  submit(){
    this.message = ''
    if(this.signupForm.valid){
      let data = this.signupForm.value
      if(data.rePassword == data.password){
        let url = environment.url + `/api/signup/${data.username}/${data.password}`
        this.api.postMapping(url, data, (data : any)=>{
          if(data.statusError == 600){
            this.api.alertError("Username exist, please choice username other!")
          }else {
            this.api.alertSuccess("Signup Success")
            this.signupForm.reset()
          }

        })
      }else this.message = "Re-Password not map password"
    }
  }
}

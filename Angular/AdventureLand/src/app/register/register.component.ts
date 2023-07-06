import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser } from '../Service/Models/user';
import { UserserviceService } from '../Service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public loginForm!: FormGroup; // Add the "!" to indicate it's not initially assigned
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private usr:UserserviceService) {}


  user:IUser = {
    userName: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username :["",[Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      
      this.router.navigate(["/login"]);
      return this.usr.createUser(this.user).subscribe(user=>this.user = user),alert("Registered successfully");
    }
  }
}



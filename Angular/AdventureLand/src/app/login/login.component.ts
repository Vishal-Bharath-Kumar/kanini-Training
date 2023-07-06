import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup; // Add the "!" to indicate it's not initially assigned
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
 
   // Admin credentials
   private readonly adminUsername = 'Vishal@123';
   private readonly adminPassword = 'Vishal@123';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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
      if (this.loginForm.valid) {
        const username = this.loginForm.value.email;
        const password = this.loginForm.value.password;
  
        if (username === this.adminUsername && password === this.adminPassword) {
          
          this.router.navigate(['/home']);
        } else {
          alert('Invalid User credentials');
        }
      }
      // console.log(this.loginForm.value);
      // localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
      // alert("Login Successfully!!!")
      // this.router.navigate(["/register"]);
    }
  }
}



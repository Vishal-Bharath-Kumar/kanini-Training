import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  implements OnInit {

  public loginForm!: FormGroup; // Add the "!" to indicate it's not initially assigned
  public submitted = false;

   // Admin credentials
   private readonly adminUsername = 'Admin@123';
   private readonly adminPassword = 'Admin@123';

  constructor(private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
      }
    
      get formControl() {
        return this.loginForm.controls;
      }
    
      onLogin(): void {
        this.submitted = true;
        if (this.loginForm.valid) {
          const username = this.loginForm.value.email;
          const password = this.loginForm.value.password;
    
          if (username === this.adminUsername && password === this.adminPassword) {
            
            this.router.navigate(['adminhome']);
          } else {
            alert('Invalid admin credentials');
          }
        }
    
  }
}
  



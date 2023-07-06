import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Service/Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url:string = "https://localhost:7163/api/UserRegistration"
  constructor(private http:HttpClient) { }

  createUser(user:IUser):Observable<IUser>
  {
    return this.http.post<IUser>(this.url,user);
  }
 
}

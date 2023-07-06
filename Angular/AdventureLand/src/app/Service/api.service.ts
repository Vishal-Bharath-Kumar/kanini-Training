import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public GetBook():Observable<any>
  {
    return this.http.get('https://localhost:7163/api/Booking')
  }

  public addbook(booklist:any):Observable<any>
  {
    return this.http.post('https://localhost:7163/api/Booking',booklist);
  }

}

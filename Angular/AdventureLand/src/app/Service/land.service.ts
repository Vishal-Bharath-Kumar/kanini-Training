import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILand } from './Models/Land';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  url:string="https://localhost:7163/api/Land"
  constructor(private http:HttpClient) { }
  addrideDetails(item:ILand):Observable<ILand>
  {
    return this.http.post<ILand>(`https://localhost:7163/api/Land`,item);
  }

  getLand():Observable<ILand[]>
  {
    return this.http.get<ILand[]>(this.url);
  }
  deleteRide(id:number):Observable<ILand[]>
  {
    return this.http.delete<ILand[]>(this.url+'/'+id);
  }
  updateidDetails(id:number,item:ILand):Observable<ILand>
  {
    return this.http.put<ILand>(`https://localhost:7163/api/Land`+"/"+id,item);
  }

  getTrainerByID(id:any):Observable<ILand>
  {
    return this.http.get<ILand>(this.url+id);
  }
}

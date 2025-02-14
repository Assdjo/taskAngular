import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private apiUrl ='http://127.0.0.1:8000/api/users'

  constructor(private http:HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  addUser(user:any) : Observable<any> {
    console.log(user);
    return this.http.post(this.apiUrl, user)
    
  }


}

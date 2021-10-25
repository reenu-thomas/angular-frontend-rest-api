import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8000/users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  getUserById(id: any): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: any, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: any): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  login(email:string,password:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    });
  }

  register(name:string, email:string, password:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, {
      name,
      email,
      password
    });
  }

  isAvailable(email: string) {
    return this.http.post<{isAvailable:boolean}>(`${this.apiUrl}/api/v1/auth/is-available`, {
      email
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8081/api/users'; // ✅ Fix colon typo

  constructor(private route: Router, private http: HttpClient) { }

  // ✅ Add explicit types for each property
  postData(registerObj: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    //confirmPassword: string;
    phoneNumber: string;
    gender: string;
    //dob: string;
  }): Observable<any> {
    return this.http.post<any>(this.baseUrl, registerObj);
  }
}

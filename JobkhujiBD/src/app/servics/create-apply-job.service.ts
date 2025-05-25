import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Application {
  companyId: string;
  fullName: string;
  email: string;
  resumePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreateApplyJobService {

 private apiUrl = 'http://localhost:8081/api/applications';

  constructor(private http: HttpClient) {}

  submitApplication(application: Application) {
    return this.http.post(this.apiUrl, application);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Application {
  companyId: string;
  fullName: string;
  email: string;
  resumePath: File | null;
}

@Injectable({
  providedIn: 'root',
})
export class CreateApplyJobService {
  private apiUrl = 'http://localhost:8081/api/applications';

  constructor(private http: HttpClient) {}

  submitApplication(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}

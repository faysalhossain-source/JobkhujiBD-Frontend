import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyJob } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class MyJobsService {

  private baseUrl = 'http://localhost:8081/api/applications/user/{email}';

  constructor(private http: HttpClient) {}

  getMyAppliedJobs(email: string): Observable<MyJob[]> {
    return this.http.get<MyJob[]>(`${this.baseUrl}/user/${email}`);
  }
}
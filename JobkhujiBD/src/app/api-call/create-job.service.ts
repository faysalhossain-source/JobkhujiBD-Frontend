import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobListing } from '../model/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  private createJob = 'http://localhost:8081/api/auth/job-listings';
  private getAlljob = 'http://localhost:8081/api/auth/job-listings';

  private apiUrl = 'http://localhost:8081/api/auth/job-listings';

  constructor(private http: HttpClient) { }

  createJobs(job: JobListing): Observable<JobListing> {
    return this.http.post<JobListing>(this.createJob, job);
  }

  getAllJobs(): Observable<JobListing[]> {
    return this.http.get<JobListing[]>(this.getAlljob);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateJob(id: number, job: JobListing): Observable<JobListing> {
    return this.http.put<JobListing>(`${this.apiUrl}/${id}`, job);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  private baseUrl = 'http://localhost:8081/api/job-listings';

  constructor(private http: HttpClient) {}

  // Create
  // createJob(job: JobListing): Observable<JobListing> {
  //   return this.http.post<JobListing>(this.baseUrl, job);
  // }

  // // Get all
  // getAllJobs(): Observable<JobListing[]> {
  //   return this.http.get<JobListing[]>(this.baseUrl);
  // }

  // // Get by ID
  // getJobById(id: number): Observable<JobListing> {
  //   return this.http.get<JobListing>(`${this.baseUrl}/${id}`);
  // }

  // // Update
  // updateJob(id: number, job: JobListing): Observable<JobListing> {
  //   return this.http.put<JobListing>(`${this.baseUrl}/${id}`, job);
  // }

  // // Delete
  // deleteJob(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}

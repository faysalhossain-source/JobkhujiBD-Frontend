import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobListing } from '../model/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  private createJob = 'http://:localhost:8081/api/auth/job-listings';
  private getAlljob = 'http://localhost:8081/api/auth/job-listings';

  constructor(private http: HttpClient) { }

  createJobs(job: JobListing): Observable<JobListing> {
    return this.http.post<JobListing>(this.createJob, job);
  }

  getAllJobs(): Observable<JobListing[]> {
    return this.http.get<JobListing[]>(this.getAlljob);
  }
}

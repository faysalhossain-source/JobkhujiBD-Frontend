import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  private baseUel = 'http://localhost:8081/api/job-listings';

  constructor(private http: HttpClient) { }

  createNewJob(job: any) {
    return this.http.post(`${this.baseUel}`, job, { withCredentials: true });
  }

  getAllJobs() {
    return this.http.get(`${this.baseUel}`, { withCredentials: true });
  }

  updateJob(jobId: number, job: any) {
    return this.http.put(`${this.baseUel}/${jobId}`, job, { withCredentials: true });
  }

  deleteJob(jobId: number) {
    return this.http.delete(`${this.baseUel}/${jobId}`, { withCredentials: true });
  }

  getAllCategory() {
    return this.http.get('http://localhost:8081/api/categories', { withCredentials: true });
  }
}

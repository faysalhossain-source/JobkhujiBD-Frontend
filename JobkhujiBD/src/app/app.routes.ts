import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CreateNewJobComponent } from './page/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './page/job-details/job-details.component';
import { JobListingComponent } from './page/job-listing/job-listing.component';
import { JobsComponent } from './page/jobs/jobs.component';
import { LoginComponent } from './page/login/login.component';
import { MyJobsComponent } from './page/my-jobs/my-jobs.component';
import { CompaniesComponent } from './page/company/companies.component';
import { RemoteJobsComponent } from './alljobs/remote/remote.component';
import { MainlayoutComponent } from './admin/mainlayout/mainlayout.component';
import { DeshboardComponent } from './admin/deshboard/deshboard.component';
import { HomeMainComponentComponent } from './page/home-main-component/home-main-component.component';
import { RegisterComponent } from './page/registration/registration.component';
import { CompanyDetailsComponent } from './page/company/company-details/company-details.component';
import { ApplyFormComponent } from './page/apply-form/apply-form.component';
import { Mncjobs } from './alljobs/mnc/mnc.component';
import { EngineeringJobs } from './alljobs/engineering/engineering.component';





export const routes: Routes = [
  {
    path: 'admin',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DeshboardComponent
      }
    ]
  },
  {
    path: '',
    component: HomeMainComponentComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'create-new-job', component: CreateNewJobComponent },
      { path: 'job-details', component: JobDetailsComponent },
      { path: 'job-listing', component: JobListingComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'my-jobs', component: MyJobsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'remote', component: RemoteJobsComponent },
      {path : 'mnc' , component : Mncjobs},
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' } ,// Default redirect
      { path: 'company-details/:id', component: CompanyDetailsComponent },
      { path: 'apply/:id', component: ApplyFormComponent },
      {path: 'engineering', component: EngineeringJobs}
    ]
  },
  { path: '**', redirectTo: '' } // Fallback for unknown paths
  
];

import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CreateNewJobComponent } from './page/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './page/job-details/job-details.component';
import { JobListingComponent } from './page/job-listing/job-listing.component';
import { JobsComponent } from './page/jobs/jobs.component';
//import { LoginComponent } from './page/login/login.component';
import { MyJobsComponent } from './page/my-jobs/my-jobs.component';
import { CompaniesComponent } from './page/company/companies.component';
import { RemoteJobsComponent } from './alljobs/remote/remote.component';
import { MainlayoutComponent } from './admin/mainlayout/mainlayout.component';
import { HomeMainComponentComponent } from './page/home-main-component/home-main-component.component';
import { RegisterComponent } from './page/registration/registration.component';
import { CompanyDetailsComponent } from './page/company/company-details/company-details.component';
import { ApplyFormComponent } from './page/apply-form/apply-form.component';
import { Mncjobs } from './alljobs/mnc/mnc.component';
import { EngineeringJobs } from './alljobs/engineering/engineering.component';
import { AdminJobsComponent } from './admin/admin-jobs/admin-jobs.component';
import { FeatureCompaniesDetailsComponent } from './page/company/feature-companiesdetails/feature-companies-details.component';
import { RemoteJobDetailsComponent } from './alljobs/remotejob-details/remotejob-details.component';
import { ResumeComponent } from './page/resume/resume.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RecenJobcircularComponent } from './alljobs/recentjob-circular-details/recentjob-circular-details.component';
import { PaidMembershipComponent } from './page/membership/membership.component';
import { LoginComponent } from './page/login/login.component';





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
        component: DashboardComponent
      },
      {
        path: 'admin-jobs',
        component: AdminJobsComponent
      },
       {
         path: 'create-new-job',
          component: CreateNewJobComponent 
        },
    ]
  },

  {
    path: '',
    component: HomeMainComponentComponent,
    children: [
      {
         path: '',
          component: HomeComponent
         },
     
      { path: 'job-details', component: JobDetailsComponent },
      { path: 'job-listing', component: JobListingComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'my-jobs', component: MyJobsComponent },
      { path: 'login', component:LoginComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'remote', component: RemoteJobsComponent },
      {path : 'mnc' , component : Mncjobs},
      { path: 'register', component: RegisterComponent },
      { 
        path: '', redirectTo: '/login',
         pathMatch: 'full'
         } ,// Default redirect
      {
         path: 'company-details/:id',
          component: CompanyDetailsComponent
         },
      {
         path: 'apply/:id',
          component: ApplyFormComponent
         },
      {
        path: 'engineering',
         component: EngineeringJobs
        },
      {
        path: 'resume',
         component:ResumeComponent

      },
        {
            path: 'feature-companies-details/:slug',
               component: FeatureCompaniesDetailsComponent
        },  
        
      //remote jobs  
  {
     path: 'remote-jobs', component: RemoteJobsComponent
     },
  {
     path: 'remotejob-details/:id', component: RemoteJobDetailsComponent 
    },
  { 
    path: 'apply-job', component: ApplyFormComponent
   },
  { 
    path: 'register', component: RegisterComponent
   },
  { 
    path: '', redirectTo: '/remote-jobs', pathMatch: 'full' 

  },
  //  route data,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 
  
  //  {
  //   path: '',
  //   component: HomeComponent,
  //   title: 'Career Doctor - Find Your Dream Job'
  // },
  // {
  //   path: 'home/:id',
  //   component: HomeComponent,
  //   title: 'Browse Jobs',
  //   // Example of route data (can be accessed with input() in component)
  //   data: { 
  //     showFilters: true,
  //     requireAuth: false 
  //   }
  // },
  // {
  //   path: 'recentjobcirculardetails',
  //   component: RecenJobcircularComponent,
  //   title: 'Job Details',
  //   // Using component input binding (new in Angular 16+)
  //   data: { preload: true }
  // },
 
  // {
  //   path: 'signin',
  //   component: LoginComponent,
  //   title: 'Login to Apply'
  // },
  // {
  //   path: 'admin',
  //   loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
  //   // Using functional guards (new preferred way)
  //   canActivate: [() => inject(AuthService).isAdmin()]
  // },

{
  path: 'recentjob-circular-details',
  component: RecenJobcircularComponent,
},
{
  path: 'membership',
  component: PaidMembershipComponent,
}
]
  },
  { path: '**', redirectTo: '' } // Fallback for unknown paths
  
];

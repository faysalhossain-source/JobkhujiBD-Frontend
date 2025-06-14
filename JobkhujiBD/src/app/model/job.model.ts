export interface JobListing {
  id?: number;
  companyId?: string;
  companyName: string;
  jobTitle: string;
  category: string;
  experience: string;
  pay_scale: string;
  location: string;
  description: string;
  createDate: string;
}
export interface RegisterRequest {
  email: string;
  password: string;
  role: string;
  fullname: string;
  companyName?: string;
  mobile?: string;
}
export interface Application {
  companyId: string;
  fullName: string;
  email: string;
  resumePath: string;
}
export interface MyJob {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
  appliedAt: string;   // you can parse this to Date if needed
  status: string;
}



// Uncomment the following code if you want to use the Job interface
// export interface Job {
//   id: number | string;
//   name: string;
//   description: string;
//   image: string;
// }

// //
// export interface RecentJobListing extends Job {
//   // new propertise
//   title: string;       // name
//   logo: string;        // image
//   company: string;
//   experienceLevel: 'Beginner' | 'Mid Level' | 'Top Level';
//   deadline: string;
//   salary?: string;
//   location?: string;
// }

// interface LocalJob {
//   id: number;
//   name: string;
//   description?: string;
//   image?: string;
// }

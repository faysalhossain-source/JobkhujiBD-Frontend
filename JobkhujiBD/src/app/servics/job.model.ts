export interface JobListing {
category: any;
  id?: number;
  companyName: string;
  jobTitle: string;
  jobId?: string;
  experience: string;
  pay_scale: string;
  location: string;
  description: string;
  createDate: Date;
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
  jobId?: String;
}
export interface MyJob {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
  appliedAt: string;   // you can parse this to Date if needed
  status: string;
}



// // বেসিক ইন্টারফেস ( আগের কম্পোনেন্টের জন্য)
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
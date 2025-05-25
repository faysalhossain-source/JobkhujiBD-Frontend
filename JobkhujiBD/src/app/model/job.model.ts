export interface JobListing {
  id?: number;
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



// // বেসিক ইন্টারফেস (আপনার আগের কম্পোনেন্টের জন্য)
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
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
  createDate: Date; // example: "2025-05-23"
}
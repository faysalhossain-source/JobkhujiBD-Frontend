// বেসিক ইন্টারফেস (আপনার আগের কম্পোনেন্টের জন্য)
export interface Job {
  id: number | string;
  name: string;
  description: string;
  image: string;
}

// জব লিস্টিংয়ের এক্সটেন্ডেড ইন্টারফেস
export interface RecentJobListing extends Job {
  // নতুন প্রোপার্টিগুলো
  title: string;       // name-এর বিকল্প নাম
  logo: string;        // image-এর বিকল্প নাম
  company: string;
  experienceLevel: 'Beginner' | 'Mid Level' | 'Top Level';
  deadline: string;
  salary?: string;     // অপশনাল ফিল্ড
  location?: string;   // অপশনাল ফিল্ড
}

interface LocalJob {
  id: number;
  name: string;
  description?: string;
  image?: string;
}
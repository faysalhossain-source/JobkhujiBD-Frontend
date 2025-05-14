import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgFor,RouterLink],
  selector: 'app-companies-details',
  templateUrl: './feature-companies-details.component.html',
  styleUrls: ['./feature-companies-details.component.css'],
})
export class FeatureCompaniesDetailsComponent {
  company: any;
  jobs: any[] = [];

  allCompanies = [
    {
      slug: 'aci',
      name: 'Advanced Chemical Industries Limited (ACI)',
      shortName: 'ACI',
      logo: 'featureCompanies/ACI.png',
      address: 'ACI Centre 245, Tejgaon Industrial Area, Dhaka-1208, Bangladesh.',
      jobOpenings: 1,
      companySize: '1-10',
      website: 'https://www.aci-bd.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
       'About Advanced Chemical Industries Limited (ACI) Advanced Chemical Industries (ACI) Limited,being one of the largest conglomerates in Bangladesh with a multinational heritage operates across the country through its four diversified strategic business units. ‘ACI Pharmaceuticals’ is dedicated to improve the health of the people of Bangladesh through introduction of innovative and reliable Pharmaceuticals products.',
      jobs: [
        {
          title: 'Delivery Man',
          description:
            'We are looking for some candidates for the position of Delivery Man',
        },
      ],
    },
    {
      slug: 'walton',
      name: 'Walton Group',
      shortName: 'Walton',
      logo: 'featureCompanies/walton.jpg',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 3,
      companySize: '5000+',
      website: 'https://www.waltonbd.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'About Walton Hi-Tech Industries PLC.Incorporated in 2006, WHIPLC is the first Electrical and Electronics Appliances company of Bangladesh with footsteps globally. Comprehensively dependent on Research & Innovation (R&I), WHIPLC is committed to bring easier lifestyle with technology with everyone, home and organization for a fully connected, intelligent world. With more than 35,000 employees, operating in over 40 countries, WHIPLC has served more than 177 million people around the world. Through strong manufacturing base, quality products, competitive price, extensive market coverage and last but not the least, the prompt after-sales services Walton & Marcel have become the most trusted and prestigious Brand in the E&E industry of Bangladesh. Within a very short period of time, both the brands have captured substantial market share and positioned themselves as the most dominant performer in the E&E sector of Bangladesh. The product portfolio of WHIPLC includes Refrigerator (Frost & Non-Frost), Freezer, Air Conditioner, Compressor and Television.',
      jobs: [
        {
          title: 'Electronics Engineer',
          description: 'Looking for experienced engineers in R&D.',
        },
        {
          title: 'Sales Executive',
          description: 'Sales positions available all over the country.',
        },
      ],
    },
    {
      slug: 'bashundhara_group',
      name: 'Bashundhara Group',
      shortName: 'Bashundhara Group',
      logo: 'featureCompanies/Bashundhara_Group.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 2,
      companySize: '1000+',
      website: 'https://www.bashundharagroup.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'About Bashundhara Group The Bashundhara Group has started operation as a real estate venture known as "Bashundhara" under the aegis of the groups first concern - the East-West Property Development (Pvt) Ltd in 1987. This project turned out to be a very successful one and had helped faster the growth of trust and confidence of the urban people in "Bashundhara". Dhakas burgeoning population, coupled with a conspicuously slow growth of housing led to the landmark success of Bashundhara.',
      jobs: [
        {
          title: 'Marketing Manager',
          description:
            'We are looking for a Marketing Manager with 5+ years of experience.',
        },
        {
          title: 'HR Executive',
          description:
            'Looking for HR professionals with strong communication skills.',
        },
      ],
    },
    {
      slug: 'brac',
      name: 'BRAC',
      shortName: 'BRAC',
      logo: 'featureCompanies/brac.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 4,
      companySize: '10000+',
      website: 'https://www.brac.net',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'About BRAC: BRAC is an international development organisation based in Bangladesh. In order to receive foreign donations, BRAC was subsequently registered under the NGO Affairs Bureau of the Government of Bangladesh. BRAC is the largest non-governmental development organisation in the world, in terms of number of employees as of September 2016. Established by Sir Fazle Hasan Abed in 1972 after the independence of Bangladesh, BRAC is present in all 64 districts of Bangladesh as well as 11 other countries in Asia, Africa, and the Americas. BRAC states that it employs over 90,000 people, roughly 70 percent of whom are women, and that it reaches more than 126 million people with its services.The organisation is partly self-funded through a number of social enterprises that include a dairy and food project, a chain of retail handicraft stores called Aarong, seed and Agro, and chicken. BRAC has operations in 12 countries of the world.',
      jobs: [
        {
          title: 'Program Manager',
          description:
            'We are looking for a Program Manager with experience in development projects.',
        },
        {
          title: 'Finance Officer',
          description:
            'Looking for finance professionals with strong analytical skills.',
        },
      ],
    },
    {
      slug: 'mgi',
      name: 'MGI',
      shortName: 'MGI',
      logo: 'featureCompanies/MGILogo.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 2,
      companySize: '500+',
      website: 'https://www.mgi.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'About Meghna Group of Industries Meghna Group of Industries is one of the largest Bangladeshi industrial conglomerates. The industries under this conglomerate include chemicals, cement, consumer products, real estate, insurance, securities, utilities etc.',
      jobs: [
        {
          title: 'Software Developer',
          description:
            'We are looking for software developers with experience in Java and Python.',
        },
        {
          title: 'Data Analyst',
          description:
            'Looking for data analysts with strong skills in SQL and Excel.',
        },
      ],
    },
    {
      slug: 'anwar',
      name: 'Anwar Group',
      shortName: 'Anwar Group',
      logo: 'featureCompanies/anwarlogo.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 3,
      companySize: '1000+',
      website: 'https://www.anwargroup.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Anwar Group is a leading conglomerate in Bangladesh with diverse business interests.',
      jobs: [
        {
          title: 'Sales Manager',
          description:
            'We are looking for a Sales Manager with experience in the FMCG sector.',
        },
        {
          title: 'Supply Chain Executive',
          description:
            'Looking for supply chain professionals with strong negotiation skills.',
        },
      ],
    },
    {
      slug: 'bjit',
      name: 'BJIT Limited',
      shortName: 'BJIT',
      logo: 'featureCompanies/bjitlogo.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 5,
      companySize: '200+',
      website: 'https://www.bjitgroup.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'BJIT, one of the best offshore software development company in Bangladesh provides high quality services with global standards at a reduced cost.',
      jobs: [
        {
          title: 'UI/UX Designer',
          description:
            'We are looking for UI/UX designers with experience in Figma and Adobe XD.',
        },
        {
          title: 'Project Manager',
          description:
            'Looking for project managers with strong leadership skills.',
        },
      ],
    },
    {
      slug: 'robi',
      name: 'Robi Axiata Limited',
      shortName: 'Robi',
      logo: 'featureCompanies/robi.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 3,
      companySize: '5000+',
      website: 'https://www.robi.com.bd',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Robi Axiata Limited is one of the leading telecommunications companies in Bangladesh.',
      jobs: [
        {
          title: 'Network Engineer',
          description:
            'We are looking for network engineers with experience in telecom networks.',
        },
        {
          title: 'Customer Service Executive',
          description:
            'Looking for customer service professionals with strong communication skills.',
        },
      ],
    },
    {
      slug: 'grameenphone',
      name: 'Grameenphone Limited',
      shortName: 'Grameenphone',
      logo: 'featureCompanies/Grmn.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 4,
      companySize: '10000+',
      website: 'https://www.grameenphone.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Grameenphone is the leading telecommunications service provider in Bangladesh.',
      jobs: [
        {
          title: 'Customer Service Executive',
          description:
            'Looking for customer service professionals with strong communication skills.',
        },
      ],
    },
    {
      slug: 'banglalink',
      name: 'Banglalink Digital Communications Limited',
      shortName: 'Banglalink',
      logo: 'featureCompanies/B.jpg',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 2,
      companySize: '5000+',
      website: 'https://www.banglalink.net',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Banglalink is one of the leading telecommunications companies in Bangladesh.',
      jobs: [
        {
          title: 'Sales Executive',
          description:
            'We are looking for sales executives with experience in the telecom sector.',
        },
        {
          title: 'Marketing Executive',
          description:
            'Looking for marketing professionals with strong analytical skills.',
        },
      ],
    },
    {
      slug: 'daraz',
      name: 'Daraz Bangladesh',
      shortName: 'Daraz',
      logo: 'featureCompanies/Daraz.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 3,
      companySize: '2000+',
      website: 'https://www.daraz.com.bd',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Daraz is the leading e-commerce platform in Bangladesh.',
      jobs: [
        {
          title: 'E-commerce Executive',
          description:
            'We are looking for e-commerce executives with experience in online sales.',
        },
        {
          title: 'Digital Marketing Specialist',
          description:
            'Looking for digital marketing professionals with strong SEO skills.',
        },
      ],
    },
    {
      slug: 'bkash',
      name: 'bKash Limited',
      shortName: 'bKash',
      logo: 'featureCompanies/bkash.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 4,
      companySize: '1000+',
      website: 'https://www.bkash.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        "bKash is the largest mobile financial service provider in Bangladesh.",
    },
    {
      slug: 'nagad',
      name: 'Nagad Limited',
      shortName: 'Nagad',
      logo: 'featureCompanies/nagad.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 2,
      companySize: '500+',
      website: 'https://www.nagad.com.bd',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Nagad is a leading mobile financial service provider in Bangladesh.',
    },
    {
      slug: 'foodpanda',
      name: 'Foodpanda Bangladesh',
      shortName: 'Foodpanda',
      logo: 'featureCompanies/foodpanda.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 3,
      companySize: '1000+',
      website: 'https://www.foodpanda.com.bd',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
      about:
        'Foodpanda is the leading online food ordering and delivery platform in Bangladesh.',
    },
    {
      slug: 'pathao',
      name: 'Pathao Limited',
      shortName: 'Pathao',
      logo: 'featureCompanies/pathao.png',
      address: 'Dhaka, Bangladesh',
      jobOpenings: 5,
      companySize: '2000+',
      website: 'https://www.pathao.com',
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    about:
      'Pathao is the largest mobile financial service provider in Bangladesh.',
      jobs:[
        {
          Title:'qurier service ',
          description:
            'We are looking for a qurier service with experience in online sales.',
        
        }
      ]
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.company = this.allCompanies.find((c) => c.slug === slug);
    this.jobs = this.company?.jobs || [];
  }
}

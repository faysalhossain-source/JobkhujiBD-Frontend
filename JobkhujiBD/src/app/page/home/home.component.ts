import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, RouterLink,NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
applyForJob(arg0: any) {
throw new Error('Method not implemented.');
}
viewDetails(arg0: any) {
throw new Error('Method not implemented.');
}
  searchKeyword = '';
  searchLocation = '';
  searchExperience = '';
  
  featuredCompanies = [
    {
      name: "ACI Limited",
      logo: "featureCompanies/acicompany.jpeg",
      slug: "aci",
    },
    {
      name: "Walton",
      logo: "featureCompanies/walton.jpg",
      slug: "walton",
    },
    {
      name: "Bashundhara Group",
      logo: "featureCompanies/Bashundhara_Group.png",
      slug: "Bashundhara_Group",
    },
    {
      name: "BRAC",
      logo: "featureCompanies/brac.png",
      slug: "brac",
    },
    {
      name: "MGI",
      logo: "featureCompanies/MGILogo.png",
      slug: "mgi",
    },
    {
      name: "Anwar Group",
      logo: "featureCompanies/anwarlogo.png",
      slug: "anwar",
    },
    {
      name: "BJIT Limited",
      logo: "featureCompanies/bjitlogo.png",
      slug: "bjit",
    },
    {
      name: "Robi Axiata Limited",
      logo: "featureCompanies/robi.png",
      slug: "robi",
    },
     {
      name: "Grameenphone",
      logo: "featureCompanies/Grmn.png",
      slug: "grameenphone",
    },
   
   
    {
      name: "Banglalink",
      logo: "featureCompanies/B.jpg",
      slug: "banglalink",
    },
    {
      name: "Daraz",
      logo: "featureCompanies/Daraz.png",
      slug: "daraz",
    },
    {
      name: "Bkash",
      logo: "featureCompanies/bkash.png",
      slug: "bkash",
    },
    {
      name: "Nagad",
      logo: "featureCompanies/nagat.jpeg",
      slug: "nagat",
    },
    {
      name: "Foodpanda",
      logo: "featureCompanies/fodpanda.jpeg",
      slug: "foodpanda",
    },
    {
      name: "Pathao",
      logo: "featureCompanies/Pathao.png",
      slug: "pathao",
    },
    {
      name: "Chaldal",
      logo: "featureCompanies/chaldal.jpeg",
      slug: "chaldal",
    }
  
  ];
jobs: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  onSearch() {
    this.router.navigate(['/jobs'], {
      queryParams: {
        keyword: this.searchKeyword,
        location: this.searchLocation,
        experience: this.searchExperience
      }
    });
  }

  navigateToCompany(slug: string) {
    this.router.navigate(['/companies', slug]);
  }
}
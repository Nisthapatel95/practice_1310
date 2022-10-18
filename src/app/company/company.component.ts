import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './model/company.model';
import { CompanyService } from './Service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  companyDetails: Company;

  constructor(private companyService: CompanyService, private route: Router) { this.companies = [] }

  ngOnInit(): void {
    this.getCompanyList();

    this.companyService.getCompanyId().subscribe((res)=>{
      if(res){
       this. getCompanyDetailById(res)
      }
    })
  }

  getCompanyList() {
    this.companyService.getCompanyList().subscribe((res: Company[]) => {
      this.companies = res;
      console.log(this.companies)
    })
  }

  // companyDetailToEdit(co)

  saveCompany(companyDetails: Company) {
    debugger
    this.companyService.addCompany(companyDetails).subscribe(
      (res: Company) => {
        console.log('data was successfully saved')
        this.getCompanyList();
      },
      (error) => {
        console.log('something')
      })
  }

  getCompanyDetailById(id: number) {
    // this.router.
    this.companyService.getCompanyById(id).subscribe((companyDetails: Company) => {
      console.log('data updated');
      this.companyService.sendcompanyDetails(companyDetails)
      // this.companyDetails = companyDetails;
    })
  }





}
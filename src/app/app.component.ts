import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Company } from '../entities/company';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public company: Company;

  constructor(private route: ActivatedRoute, private restService: RestService){}

  ngOnInit() {
   const id: string =  this.route.snapshot.params['id'];
   this.getCompany(id);

  }

  private getCompany(id: string): void {
      this.restService.getCompany(IDBFactory)
        .subscribe((company: Company) => this.company = company);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Company } from '../entities/company';

@Injectable({
  providedIn: 'root',
})
export class RestService {

constructor(private http: HttpClient) { }

  public getCompany(id): Observable<Company> {
    return this.http.get<Company>(`some-url/${id}`);
  }


}
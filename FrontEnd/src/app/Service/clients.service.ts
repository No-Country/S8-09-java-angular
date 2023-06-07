import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransfer } from '../models/itransfer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiUrl = 'http://100.24.32.13/api/v1';
accountEndpoint = '/account';
  clientEndpoint = '/user';
  userEndpoint = '/user'
  constructor(private http: HttpClient) {}

  getClientId(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.accountEndpoint}/${id} `);
  }
  getClientCVU(CVU:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.accountEndpoint}/info/account_number `);
  }
  getClientAlias(alias: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', });
    const options = {
      headers: headers,
      body: { alias: alias }
    };
    return this.http.get<any>(`${this.apiUrl}${this.accountEndpoint}/info/alias`, options);
  }

  getTransfers(id:number): Observable<ITransfer[]> {
    return this.http.get<ITransfer[]>(`${this.apiUrl}${this.accountEndpoint}/${id}/movements`);
  }
  getId(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.userEndpoint}/${id} `);
  }
}

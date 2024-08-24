import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enderecos } from '../model/enderecos';

@Injectable({
  providedIn: 'root',
})
export class AddressService {

  private apiUrl = 'http://localhost:8080/enderecos'; // http://localhost:8080

  constructor(private http: HttpClient) {}

  createAddress(address: any): Observable<any> {
    return this.http.post(this.apiUrl, address);
  }

  getAddresses(): Observable<Enderecos[]> {
    return this.http.get<Enderecos[]>(this.apiUrl);
  }

}


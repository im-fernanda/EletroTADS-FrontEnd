import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Enderecos } from '../model/enderecos';
import { Address, AddressComponent } from '../components/address/address.component';

@Injectable({
  providedIn: 'root',
})
export class AddressService {

  private apiUrl = 'http://localhost:8080/enderecos/';
  private apiUrl2 = 'http://localhost:8080/usuarios/1/enderecos/';

  constructor(private http: HttpClient) {}

  createAddress(address: FormData): Observable<any> {
    return this.http.post(this.apiUrl, address);
  }

  getAddress(page: number = 0, size: number = 10): Observable<Address[]> {
    return this.http
      .get<Address[]>(`${this.apiUrl}`)
      .pipe(
        catchError(() => {
          return of([]);
        }),
      );
  }


  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.apiUrl+id, {responseType: 'text' as 'json'});
  }

  // save(address: Address): Observable<string>{
  //   return this.http.post<string>(this.apiUrl2, address, {responseType: 'text' as 'json'});
  // }


  update(address: Address, id: number): Observable<string>{
    return this.http.put<string>(this.apiUrl+id, address, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Address>{
    return this.http.get<Address>(this.apiUrl+id);
  }

}


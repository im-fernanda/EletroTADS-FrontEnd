import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Address } from '../model/address'; 

@Injectable({
  providedIn: 'root', 
})
export class AddressService {
 
  private apiUrl = 'http://localhost:8080/enderecos/'; 
  private apiUrl2 = 'http://localhost:8080/usuarios/1/enderecos/'; 

  constructor(private http: HttpClient) {} 
 
  createAddress(address: FormData): Observable<any> {
    return this.http.post(this.apiUrl2, address);
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
  
updateAddress(id: number, address: Address): Observable<Address> {
  return this.http.put<Address>(`${this.apiUrl2}${id}`, address);
}

deleteAddress(id: number) {
  this.addressService.delete(id).subscribe(() => {
    this.listAll(); // Atualiza a lista após a exclusão
  });
}
  
}

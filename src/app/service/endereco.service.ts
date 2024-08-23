import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carro";


  constructor() { }

  listAll(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.API+"/listAll"); //o verbo, o objeto e o endereco/onde ele vai
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(carro: Endereco): Observable<string>{
    return this.http.post<string>(this.API+"/save", carro, {responseType: 'text' as 'json'});
  }

  update(carro: Endereco, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, carro, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Endereco>{
    return this.http.get<Endereco>(this.API+"/findById/"+id);
  }

}


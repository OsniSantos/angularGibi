import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doce } from 'src/app/models/doce.model';

@Injectable({
  providedIn: 'root'
})
export class DoceService {
  private uri: string = "https://localhost:44393/api/doces/";

  constructor(private httpClient: HttpClient) {
    console.log("CadernoService.constructor");
  }

  getAll(): Observable<Doce[]> {
    console.log("DoceService.getAll-start");
    return this.httpClient.get<Doce[]>(this.uri);
  }

  getById(id: number): Observable<Doce> {
    console.log("DoceService.getById-start");
    const uri: string = this.uri + id;
    return this.httpClient.get<Doce>(uri);
  }

  put(doce: Doce): Observable<Doce> {
    console.log("DoceService.put-start");
    const uri: string = this.uri + doce.Id;
    return this.httpClient.put<Doce>(uri, doce);
  }

  post(doce: Doce): Observable<Doce> {
    console.log("DoceService.post-start");
    return this.httpClient.post<Doce>(this.uri, doce);
  }

  delete(id: number): Observable<Doce> {
    console.log("DoceService.delete");
    return this.httpClient.delete<Doce>(this.uri + id);
  }


  getByDescricao(descricao: string): Observable<Doce[]> {
    console.log("DoceService.getByDescricao-start");
    const uri: string = `${this.uri}?descricao=${descricao}`;
    return this.httpClient.get<Doce[]>(uri);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService{

  apiURL:string = 'https://dragonball-api.com/api/characters/?limit=58'
  constructor(private httpClient: HttpClient) { }

  obtenerPresonajes():Observable<any>{
    return this.httpClient.get(this.apiURL).pipe(resultado => resultado)
  }
}

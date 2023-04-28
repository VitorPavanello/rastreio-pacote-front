import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  rastrearPacote(numero:string) {
    return this.http.get('https://localhost:7016/RastreioPacote?numero=' + numero);
  }
}

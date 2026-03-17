import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private API = `${environment.apiUrl}/recordatorios`;

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post(this.API, data);
  }

  pendientes() {
    return this.http.get(`${this.API}/pendientes`);
  }
}
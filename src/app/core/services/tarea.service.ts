import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private API = `${environment.apiUrl}/tareas`;

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post(this.API, data);
  }

  obtener() {
    return this.http.get(this.API);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
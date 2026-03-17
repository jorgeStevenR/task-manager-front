import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class SubtareaService {

  private API = `${environment.apiUrl}/subtareas`;

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post(this.API, data);
  }

  obtenerPorTarea(id: number) {
    return this.http.get(`${this.API}/tarea/${id}`);
  }

  completar(id: number) {
    return this.http.patch(`${this.API}/${id}/completar`, {});
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 🔥 IMPORTANTE
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule], // 🔥 AQUÍ ESTÁ LA SOLUCIÓN
  templateUrl: './tarea.html',
})
export class Tarea {

  titulo = '';
  descripcion = '';
  prioridad = '';
  fechaVencimiento = '';

  usuarioCreadorId = 1;
  categoriaId = 1;
  estadoId = 1;

  lista: any[] = [];

  private API = 'https://task-manager-api-cc7s.onrender.com/tareas';

  constructor(private http: HttpClient) {}

  crear() {

    const data = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      prioridad: this.prioridad,
      fechaVencimiento: this.fechaVencimiento,
      usuarioCreadorId: this.usuarioCreadorId,
      categoriaId: this.categoriaId,
      estadoId: this.estadoId
    };

    this.http.post(this.API, data).subscribe({
      next: () => {
        alert('Tarea creada 🚀');
        this.cargar();
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear tarea ❌');
      }
    });
  }

  cargar() {
    this.http.get<any[]>(this.API).subscribe({
      next: (data) => this.lista = data,
      error: (err) => console.error(err)
    });
  }

  eliminar(id: number) {
    this.http.delete(`${this.API}/${id}`).subscribe({
      next: () => {
        this.cargar();
      },
      error: (err) => console.error(err)
    });
  }
}
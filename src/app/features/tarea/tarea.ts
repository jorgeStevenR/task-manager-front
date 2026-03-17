import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea.html',
  styleUrls: ['./tarea.scss']
})
export class Tarea {

  titulo = '';
  descripcion = '';
  prioridad = 'MEDIA';
  fechaVencimiento = '';

  usuarioCreadorId = 1;
  categoriaId = 1;
  estadoId = 1;

  lista: any[] = [];

  private API = 'https://task-manager-api-cc7s.onrender.com/tareas';

  constructor(private http: HttpClient) {}

  // 🔥 CREAR TAREA (FIX FECHA PRO)
  crear() {

    if (!this.fechaVencimiento) {
      alert('Debes seleccionar una fecha ❌');
      return;
    }

    // 👇 CONVERSIÓN CORRECTA PARA SPRING
    const fechaISO = new Date(this.fechaVencimiento)
      .toISOString()
      .slice(0, 19);

    const data = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      prioridad: this.prioridad,
      fechaVencimiento: fechaISO,
      usuarioCreadorId: this.usuarioCreadorId,
      categoriaId: this.categoriaId,
      estadoId: this.estadoId
    };

    console.log('ENVÍO FINAL 👉', data);

    this.http.post(this.API, data).subscribe({
      next: () => {
        alert('Tarea creada 🚀');
        this.limpiar();
        this.cargar();
      },
      error: (err) => {
        console.error('ERROR BACK 👉', err);
        alert('Error al crear tarea ❌');
      }
    });
  }

  // 🔥 LISTAR
  cargar() {
    this.http.get<any[]>(this.API).subscribe({
      next: (data) => this.lista = data,
      error: (err) => console.error(err)
    });
  }

  // 🔥 ELIMINAR
  eliminar(id: number) {
    this.http.delete(`${this.API}/${id}`).subscribe({
      next: () => this.cargar(),
      error: (err) => console.error(err)
    });
  }

  // 🔥 LIMPIAR FORM
  limpiar() {
    this.titulo = '';
    this.descripcion = '';
    this.prioridad = 'MEDIA';
    this.fechaVencimiento = '';
  }
}
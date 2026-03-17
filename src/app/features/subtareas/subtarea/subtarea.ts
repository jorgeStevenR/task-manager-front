import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubtareaService } from '../../../core/services/subtarea.service';

@Component({
  selector: 'app-subtarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subtarea.html',
})
export class Subtarea {

  titulo = '';
  tareaId: number | null = null;
  responsableId: number | null = null;
  buscarId: number | null = null;

  lista: any[] = [];

  constructor(private service: SubtareaService) {}

  crear() {
    if (!this.titulo || !this.tareaId || !this.responsableId) return;

    this.service.crear({
      titulo: this.titulo,
      tareaId: this.tareaId,
      responsableId: this.responsableId
    }).subscribe();
  }

  buscar() {
    if (!this.buscarId) return;

    this.service.obtenerPorTarea(this.buscarId)
      .subscribe((res: any) => this.lista = res);
  }

  completar(id: number) {
    this.service.completar(id)
      .subscribe(() => this.buscar());
  }
}
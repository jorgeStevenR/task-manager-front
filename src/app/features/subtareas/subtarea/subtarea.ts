import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubtareaService } from '../../../core/services/subtarea.service';

@Component({
  selector: 'app-subtarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subtarea.html',
})
export class Subtarea {

  titulo = '';
  tareaId: any;
  responsableId: any;
  buscarId: any;

  lista: any[] = [];

  constructor(private service: SubtareaService) {}

  crear() {
    this.service.crear({
      titulo: this.titulo,
      tareaId: Number(this.tareaId),
      responsableId: Number(this.responsableId)
    }).subscribe();
  }

  buscar() {
    this.service.obtenerPorTarea(Number(this.buscarId))
      .subscribe((res: any) => this.lista = res);
  }

  completar(id: number) {
    this.service.completar(id)
      .subscribe(() => this.buscar());
  }
}
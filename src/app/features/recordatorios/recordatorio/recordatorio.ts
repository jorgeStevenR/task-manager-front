import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecordatorioService } from '../../../core/services/recordatorio.service';

@Component({
  selector: 'app-recordatorio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recordatorio.html',
})
export class Recordatorio {

  fecha = '';
  tipo = '';
  tareaId: any;
  lista: any[] = [];

  constructor(private service: RecordatorioService) {}

  crear() {
    this.service.crear({
      fechaRecordatorio: this.fecha,
      tipoNotificacion: this.tipo,
      tareaId: Number(this.tareaId)
    }).subscribe(() => this.cargar());
  }

  cargar() {
    this.service.pendientes().subscribe((res: any) => {
      this.lista = res;
    });
  }
}
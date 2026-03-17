import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecordatorioService } from '../../../core/services/recordatorio.service';

@Component({
  selector: 'app-recordatorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recordatorio.html',
})
export class Recordatorio implements OnInit {

  fecha = '';
  tipo = '';
  tareaId: number | null = null;
  lista: any[] = [];

  constructor(private service: RecordatorioService) {}

  ngOnInit() {
    this.cargar();
  }

  crear() {
    if (!this.fecha || !this.tipo || !this.tareaId) return;

    this.service.crear({
      fechaRecordatorio: this.fecha,
      tipoNotificacion: this.tipo,
      tareaId: this.tareaId
    }).subscribe(() => this.cargar());
  }

  cargar() {
    this.service.pendientes().subscribe({
      next: (res: any) => this.lista = res,
      error: () => console.error('Error cargando recordatorios')
    });
  }
}
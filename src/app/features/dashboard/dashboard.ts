import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../core/services/tarea.service';
import { RecordatorioService } from '../../core/services/recordatorio.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  tareas: any[] = [];
  recordatorios: any[] = [];

  constructor(
    private tareaService: TareaService,
    private recordatorioService: RecordatorioService
  ) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.tareaService.obtener().subscribe((res: any) => {
      this.tareas = res;
    });

    this.recordatorioService.pendientes().subscribe((res: any) => {
      this.recordatorios = res;
    });
  }
}
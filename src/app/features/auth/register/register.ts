import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html', // 👈 CORREGIDO
})
export class Register {

  nombre = '';
  email = '';
  password = '';
  mensaje = '';

  constructor(private auth: AuthService) {}

  register() {
    this.mensaje = '';

    this.auth.register({
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.mensaje = 'Usuario creado correctamente ✅';
      },
      error: () => {
        this.mensaje = 'Error al registrar ⚠️';
      }
    });
  }
}
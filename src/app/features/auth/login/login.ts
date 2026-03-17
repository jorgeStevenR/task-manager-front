import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {

  email = '';
  password = '';
  mensaje = '';
  cargando = false;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.cargando = true;
    this.mensaje = '';

    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.mensaje = 'Login exitoso 🔥';
        this.cargando = false;
        this.router.navigate(['/recordatorios']);
      },
      error: (err) => {
        this.cargando = false;

        if (err.status === 401) {
          this.mensaje = 'Credenciales incorrectas ❌';
        } else {
          this.mensaje = 'Error del servidor ⚠️';
        }
      }
    });
  }
}
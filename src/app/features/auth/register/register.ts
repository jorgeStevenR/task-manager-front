import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
})
export class Register {

  nombre = '';
  email = '';
  password = '';
  mensaje = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => this.mensaje = 'Usuario creado',
      error: () => this.mensaje = 'Error'
    });
  }
}
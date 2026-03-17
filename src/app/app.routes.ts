import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Recordatorio } from './features/recordatorios/recordatorio/recordatorio';
import { Subtarea } from './features/subtareas/subtarea/subtarea';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },

  // 🔐 protegidas
  { path: 'recordatorios', component: Recordatorio, canActivate: [authGuard] },
  { path: 'subtareas', component: Subtarea, canActivate: [authGuard] }
];
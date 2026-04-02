import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  salir() {
    this.authService.logout(); // Borra el token del localStorage
    this.router.navigate(['/login']); // Te manda de vuelta al inicio
  }
}

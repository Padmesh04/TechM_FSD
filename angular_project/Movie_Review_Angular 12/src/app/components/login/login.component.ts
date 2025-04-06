import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Simple authentication for demo purposes
    if (this.credentials.username && this.credentials.password) {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/movies']);
    }
  }
}
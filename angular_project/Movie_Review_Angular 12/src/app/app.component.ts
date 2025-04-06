import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand">Movie Reviews</div>
      <div class="nav-links">
        <a routerLink="/movies">Movies</a>
        <a routerLink="/login">Login</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background: #333;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-brand {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      margin-left: 1rem;
    }
    .nav-links a:hover {
      color: #ddd;
    }
  `]
})
export class App {
  title = 'Movie Reviews';
}
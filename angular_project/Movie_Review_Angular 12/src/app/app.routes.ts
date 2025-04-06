import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/movies', 
    pathMatch: 'full' 
  },
  {
    path: 'movies',
    loadComponent: () => import('./components/movie-list/movie-list.component')
      .then(m => m.MovieListComponent)
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./components/movie-detail/movie-detail.component')
      .then(m => m.MovieDetailComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component')
      .then(m => m.LoginComponent)
  }
];
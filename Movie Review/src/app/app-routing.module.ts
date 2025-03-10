import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }, // Movie Details Page
  {
    path: 'add-review/:id',
    component: AddReviewComponent,
    canActivate: [authGuard],
  }, // Add Review Page
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }, // Redirect to Home for invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

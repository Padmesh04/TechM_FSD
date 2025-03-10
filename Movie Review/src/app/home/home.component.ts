import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MovieService, Movie } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  featuredMovies: Movie[] = [];

  constructor(
    public authService: AuthService,
    private movieService: MovieService
  ) {
    this.movieService.getMovies().subscribe((movies) => {
      this.featuredMovies = movies.slice(0, 3);
    });
  }
}

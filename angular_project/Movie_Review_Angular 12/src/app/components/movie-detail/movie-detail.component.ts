import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie, Review } from '../../models/movie.model';
import { RatingPipe } from '../../pipes/rating.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RatingPipe],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  newReview: Review = {
    id: 0,
    movieId: 0,
    userName: '',
    rating: 5,
    comment: '',
    date: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = +params['id'];
      this.movieService.getMovie(movieId).subscribe(movie => {
        this.movie = movie;
        this.newReview.movieId = movieId;
      });
    });
  }

  submitReview(): void {
    if (this.movie) {
      this.newReview.id = Date.now();
      this.newReview.date = new Date();
      this.movieService.saveReview(this.newReview);
      this.movie.reviews.push({ ...this.newReview });
      this.newReview.comment = '';
      this.newReview.rating = 5;
    }
  }
}
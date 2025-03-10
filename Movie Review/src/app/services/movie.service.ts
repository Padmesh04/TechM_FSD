import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  image: string;
  reviews: { user: string; comment: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  addReview(
    movieId: number,
    review: { user: string; comment: string }
  ): Observable<Movie> {
    return this.http.patch<Movie>(`${this.apiUrl}/${movieId}`, {
      reviews: review,
    });
  }
}

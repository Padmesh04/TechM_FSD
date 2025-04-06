import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie, Review } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private mockMovies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      rating: 4.8,
      releaseDate: new Date('2010-07-16'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      reviews: []
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: 4.9,
      releaseDate: new Date('2008-07-18'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      reviews: []
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      rating: 4.7,
      releaseDate: new Date('2014-11-07'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      reviews: []
    },
    {
      id: 4,
      title: 'Avatar',
      description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      rating: 4.6,
      releaseDate: new Date('2009-12-18'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
      reviews: []
    },
    {
      id: 5,
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      rating: 4.8,
      releaseDate: new Date('1999-03-31'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      reviews: []
    },
    {
      id: 6,
      title: 'Gladiator',
      description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      rating: 4.7,
      releaseDate: new Date('2000-05-05'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      reviews: []
    },
    {
      id: 7,
      title: 'Titanic',
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      rating: 4.7,
      releaseDate: new Date('1997-12-19'),
      imageUrl: 'http://www.freemovieposters.net/posters/titanic_1997_6121_poster.jpg',
      reviews: []
    },
    {
      id: 8,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      rating: 4.8,
      releaseDate: new Date('1994-07-06'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg',
      reviews: []
    },
    {
      id: 9,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 4.9,
      releaseDate: new Date('1994-09-23'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      reviews: []
    },
    {
      id: 10,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      rating: 4.9,
      releaseDate: new Date('1972-03-24'),
      imageUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      reviews: []
    }
  ];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return of(this.mockMovies);
  }

  getMovie(id: number): Observable<Movie> {
    const movie = this.mockMovies.find(m => m.id === id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return of(movie);
  }

  saveReview(review: Review): void {
    const reviews = this.getStoredReviews();
    reviews.push(review);
    localStorage.setItem('movieReviews', JSON.stringify(reviews));
    
    // Update the movie's reviews in our mock data
    const movie = this.mockMovies.find(m => m.id === review.movieId);
    if (movie) {
      movie.reviews.push(review);
    }
  }

  private getStoredReviews(): Review[] {
    const reviews = localStorage.getItem('movieReviews');
    return reviews ? JSON.parse(reviews) : [];
  }
}

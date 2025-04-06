export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  releaseDate: Date;
  imageUrl: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  movieId: number;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}
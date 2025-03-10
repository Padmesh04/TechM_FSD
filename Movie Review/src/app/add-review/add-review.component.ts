import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  reviewForm: FormGroup;
  movieId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    this.reviewForm = this.fb.group({
      user: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!; // Get movie ID from route
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const review = {
        user: this.reviewForm.value.user,
        comment: this.reviewForm.value.comment,
      };

      // Call the addReview method from MovieService
      this.movieService.addReview(this.movieId, review).subscribe(() => {
        alert('Review added successfully!');
        this.router.navigate(['/movies', this.movieId]); // Redirect to movie details page
      });
    }
  }
}

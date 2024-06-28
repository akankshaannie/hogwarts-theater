import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HPMovieDetails } from '../../models/hp-movie-details';
import { MovieBudgetPipe } from '../../pipes/movie-budget.pipe';
import { MovieDurationPipe } from '../../pipes/movie-duration.pipe';
import { HPMoviesService } from '../../services/hp-movies.service';

@Component({
  selector: 'app-hp-movie-details',
  standalone: true,
  imports: [MovieBudgetPipe, MovieDurationPipe],
  templateUrl: './hp-movie-details.component.html',
  styleUrl: './hp-movie-details.component.css',
})
export class HpMovieDetailsComponent implements OnInit {
  movie: HPMovieDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hpMovieService: HPMoviesService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id') || '';

    this.hpMovieService.getMovieById(movieId).subscribe({
      next: (movie: HPMovieDetails) => {
        this.movie = movie;
      },
      error: (error) => {
        console.log("Error fetching movie details", error);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }
}

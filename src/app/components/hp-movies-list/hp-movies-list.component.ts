import { Component, OnInit } from '@angular/core';
import { HPMovie } from '../../models/hp-movie';
import { HPMoviesService } from '../../services/hp-movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieDurationPipe } from '../../pipes/movie-duration.pipe';
import { MovieBudgetPipe } from '../../pipes/movie-budget.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hp-movies-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, MovieDurationPipe, MovieBudgetPipe, CommonModule],
  templateUrl: './hp-movies-list.component.html',
  styleUrl: './hp-movies-list.component.css'
})
export class HpMoviesListComponent implements OnInit {
  moviesList: HPMovie[] = [];
  filteredMovies: HPMovie[] = [];
  nameFilter: string = '';
  yearFilter: string = '';

  constructor(private hpMovieService: HPMoviesService,
    private router: Router) {}

  ngOnInit(): void {
    this.hpMovieService.getMoviesList().subscribe({
     next:  (data: HPMovie[]) => {
        this.moviesList = data;
        this.filteredMovies = this.moviesList;
      },
      error :
      (error) => {
        console.error('Error fetching movies', error);
      }
  });
  }

  filterMovies(): void {
    this.filteredMovies = this.moviesList.filter(movie =>
      movie.title.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
      this.filterByYear(movie?.release_date)
    );
  }

  
  filterByYear(releaseDate?: string): boolean {
    if (!this.yearFilter || !releaseDate) {
      return true;
    }
    const yearFromReleaseDate = new Date(releaseDate).getFullYear().toString();
    return yearFromReleaseDate.includes(this.yearFilter);
  }

  clearFilters(): void {
    this.nameFilter = '';
    this.yearFilter = '';
    this.filteredMovies = this.moviesList;
  }

  goToDetails(movieId?: number) {
    this.router.navigate(['/movies', movieId]);
  }
}

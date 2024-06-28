import { Routes } from '@angular/router';
import { HpMovieDetailsComponent } from './components/hp-movie-details/hp-movie-details.component';
import { HpMoviesListComponent } from './components/hp-movies-list/hp-movies-list.component';


export const routes: Routes = [
    { path: 'movies', component: HpMoviesListComponent },
    { path: 'movies/:id', component: HpMovieDetailsComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', redirectTo: '/movies', pathMatch: 'full' } // Handling 404 not found
  ];

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HPMovie } from '../models/hp-movie';
import { HPMovieDetails } from '../models/hp-movie-details';

@Injectable({
  providedIn: 'root'
})
export class HPMoviesService {
  private apiUrl = '/movies'; 

  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<HPMovie[]> {
    return this.http.get<HPMovie[]>(this.apiUrl);
  }

  getMovieById(movieId: string): Observable<HPMovieDetails> {
    return this.http.get<HPMovieDetails>(`${this.apiUrl}/${movieId}`);
  }
}
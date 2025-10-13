import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCard } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // GET - Obtener datos.
  obtenerDatos(): Observable<ListCard> {
    return this.http.get<ListCard>(
      'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards'
    );
  }
}

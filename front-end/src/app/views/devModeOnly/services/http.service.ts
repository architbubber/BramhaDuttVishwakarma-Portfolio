// src/app/services/http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'http://localhost:3000'; // Set your base URL here

  constructor(private http: HttpClient) {}

  // Helper method to handle GET requests
  get(url: string, params?: { [key: string]: string }): Observable<any> {
    const httpParams = this.buildParams(params);
    return this.http.get(this.buildUrl(url), { params: httpParams }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Helper method to handle POST requests
  post(url: string, data: any): Observable<any> {
    return this.http.post(this.buildUrl(url), data).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Helper method to handle PUT requests
  put(url: string, data: any): Observable<any> {
    return this.http.put(this.buildUrl(url), data).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Helper method to handle DELETE requests
  delete(url: string, params?: { [key: string]: string }): Observable<any> {
    const httpParams = this.buildParams(params);
    return this.http.delete(this.buildUrl(url), { params: httpParams }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  // Build the full URL by combining base URL and the relative URL passed in
  private buildUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }

  // Convert params object into HttpParams (for query parameters)
  private buildParams(params?: { [key: string]: string }): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return httpParams;
  }

  // Handle HTTP request errors
  private handleError(error: any): Observable<never> {
    console.error('HTTP Error:', error);
    throw error; // Re-throw the error or handle it according to your needs
  }
}

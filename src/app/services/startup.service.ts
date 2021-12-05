import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private url: string = `${environment.url}/startup`;

  constructor(private http: HttpClient) {}

  getStartups(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }
}

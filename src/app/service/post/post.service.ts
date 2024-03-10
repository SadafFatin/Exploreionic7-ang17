import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8080';
  private http = inject(HttpClient);
  constructor() { }

  getPosts():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/feed/`);
  }




}

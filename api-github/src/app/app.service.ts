import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getInfoUserByUser(user: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${user}`);
  }
  getRepositoryOrStarred(user: string, type: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${user}/${type}`);
  }

}

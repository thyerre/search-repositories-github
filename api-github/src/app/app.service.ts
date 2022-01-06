import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { API_GITHUB } from 'src/environments/environment';
import { Items, User } from './app-interface';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getInfoUserByUser(user: string): Observable<User> {
        return this.http.get<User>(`${API_GITHUB}/${user}`);
    }

    getRepositoryOrStarred(user: string, type: string): Observable<Items[]> {
        return this.http.get<Items[]>(`${API_GITHUB}/${user}/${type}`);
    }
}

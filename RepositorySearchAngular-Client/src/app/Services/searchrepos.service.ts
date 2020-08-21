import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http' 


@Injectable()
export class SearchReposService{

    constructor(private http: HttpClient){}

    getRepositories(repoName: string): Observable<any>{
        let param = new HttpParams().set('Name', repoName)
        return this.http.get('http://localhost:44311/repository/getRepo' ,{params: param});
    }
}
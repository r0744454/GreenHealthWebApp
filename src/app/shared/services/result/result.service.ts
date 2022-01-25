import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionStrings } from 'src/app/Globals';
import { Result } from '../../models/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpClient: HttpClient) { }

  getResult(id: number): Observable<Result> {
    return this.httpClient.get<Result>(ConnectionStrings.apiUrl + "Results/" + id);
  }

  putResult(result: Result): void {
    this.httpClient.put(ConnectionStrings.apiUrl + "Results/" + result.id, result);
  }
}

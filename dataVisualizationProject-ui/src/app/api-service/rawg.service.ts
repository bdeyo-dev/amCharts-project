import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  public gameDetails: Observable<any[]>;

  // Base URL
  public baseUrl: string = 'https://api.rawg.io/api/'

  constructor(private _httpClient: HttpClient) { }

  public getGameDetails(gameId: number): Observable<any[]> {
    let endpoint = `${this.baseUrl}games/${gameId}`;
    return this._httpClient.get(endpoint).pipe(
      map((data) => this.processGameData(data)),
      catchError((error) => throwError(error))
    )
  }

  private processGameData(data: any): any[] {
    if (data && data.data) {
      return data.data;
    }
    return null;
  }
  
}

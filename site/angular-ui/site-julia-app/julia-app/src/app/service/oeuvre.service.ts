import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Oeuvre } from '../model/oeuvre';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin' : 'http://localhost:4567'})
};
@Injectable({
  providedIn: 'root'
})
export class OeuvreService {

  private ouevreUrl = 'http://localhost:4567/php/api/oeuvre.php';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  saveAll(oeuvresToSave){}
/** GET heroes from the server */
getThemeOeuvres ( thmeKey : number): Observable<Oeuvre[]> {
   const param = { 'key' : 'theme_key','value' : thmeKey.toString()};
  const url = `${this.ouevreUrl}?action=get`;
 
 return    this.http.get<Oeuvre[]>(url,{headers: httpOptions.headers,params: param}) .pipe(
  tap(heroes => this.log('fetched oeuvres')),
  catchError(this.handleError('getOeuvres', []))
);
}
  

  /** GET heroes from the server */
  getOeuvres (): Observable<Oeuvre[]> {
   
    const url = `${this.ouevreUrl}?action=getAll`;
   
   return    this.http.get<Oeuvre[]>(url,httpOptions) .pipe(
    tap(heroes => this.log('fetched oeuvres')),
    catchError(this.handleError('getOeuvres', []))
  );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
 //   this.messageService.add(`HeroService: ${message}`);
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map  } from 'rxjs/operators';
import { Rest } from './model/Rest';


@Injectable({
  providedIn: 'root'
})
export class RestaurentServiceService {
  baseUri: string = 'http://localhost:4000/api'; //not in use getting data from json file
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
   
}

public getAllRest(): Observable<any> {
    return this.http.get("./assets/restdata.json");
  }

  getRestByName(cityName : any): Observable<any> {
    return this.http.get("./assets/restdata.json").pipe(
      (res)=>  {
        return res;
      }
      );
    // let url = `${this.baseUri}/read/${cityName}`;
    // return this.http.get(url, { headers: this.headers }).pipe(
    //   map((res) => {
    //     return res || {};
    //   }),
    //   catchError(this.errorMgmt)
    // );
  }
  
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}




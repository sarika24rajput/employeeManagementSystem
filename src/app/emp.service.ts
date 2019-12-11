import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Emp } from './emp';


@Injectable({ providedIn: 'root' })

export class EmpService {

  private empUrl = 'api/employees'; 

      httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  constructor(
    private http: HttpClient) { }

  getEmps (): Observable<Emp[]> {

    return this.http.get<Emp[]>(this.empUrl)
      .pipe(
        catchError(this.handleError<Emp[]>('getEmps', []))
      );
  }

  getEmp(id: number): Observable<Emp> {

    const url = `${this.empUrl}/${id}`;
    return this.http.get<Emp>(url).pipe(
      catchError(this.handleError<Emp>(`getEmp id=${id}`))
    );
  }

  addEmp (emp: Emp): Observable<Emp> {

    return this.http.post<Emp>(this.empUrl, emp, this.httpOptions).pipe(
      catchError(this.handleError<Emp>('addEmp'))
    );
  }


  updateEmp (emp: Emp): Observable<any> {

    return this.http.put(this.empUrl, emp, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEmp'))
    );
  }

  deleteEmp (emp: Emp | number): Observable<Emp> {

    const id = typeof emp === 'number' ? emp : emp.id;
    const url = `${this.empUrl}/${id}`;

    return this.http.delete<Emp>(url, this.httpOptions).pipe(
      catchError(this.handleError<Emp>('deleteEmp'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error); 

      return of(result as T);
    };
  }

}

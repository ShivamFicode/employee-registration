import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  filter,
  map,
  mergeMap,
  of,
  reduce,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  register: string = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {}

  registerEmployee(data: any) {
    return this.http
      .post(this.register, JSON.stringify(data))
      .pipe(catchError(this.formatErrors));
  }

  isEmailExists(email: String) {
    return this.http.get(this.register).pipe(
      map((users: any) => users.some((user: any) => user.email === email)),
      catchError(this.formatErrors)
    );
  }

  formatErrors(err: any) {
    return throwError(() => new Error(err.message));
  }

  login(data: any) {
    return this.http.get(this.register).pipe(
      map((users: any) =>
        users.some(
          (user: any) =>
            user.email === data.email && user.password === data.password
        )
      ),
      mergeMap((val) => {
        if (val) {
          return this.http.get('http://localhost:3000/posts');
        }
        return throwError(() => new Error('Invalid email or password'));
      }),
      catchError(this.formatErrors)
    );
  }
}

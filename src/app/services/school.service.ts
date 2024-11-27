import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  // api endpoint for school database
  private _schoolURL = 'http://localhost:3000/';

  // use dependency inject to work with an instance of HttpClient class
  constructor(private httpInstance: HttpClient) {}

  // we want an Observable object that will return an array of Students
  getStudents(): Observable<Student[]> {
    // We can use < > to specify the type of data we expect to get back
    return this.httpInstance.get<Student[]>(this._schoolURL + 'students');
  }
}

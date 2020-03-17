import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorBackendService {

  constructor(public http: HttpClient) { }

  public getAllCourses() {
    let onlineUsers = this.http.get('http://localhost:3000/api/courses/')

    onlineUsers.subscribe( res => {
        localStorage.setItem("courses", JSON.stringify(res));
      }
    );

    let cachedUsers = of(JSON.parse(localStorage.getItem('courses')));

    cachedUsers.subscribe((courses) => {
        console.log(courses);
    });
    
    return cachedUsers;
  }
}
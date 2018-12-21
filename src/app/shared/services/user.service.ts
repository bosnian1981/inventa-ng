import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { User } from 'shared/models/user';

@Injectable()
export class UserService {
  public url = 'api/users';
  constructor(public http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  addUser(user: User) {
    return this.http.post(this.url, user);
  }

  updateUser(user: User) {
    return this.http.put(this.url, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  deleteUsers(ids: number[] = []): Observable<any> {
    const tasks$ = [];
    const length = ids.length;
    for (let i = 0; i < length; i++) {
      tasks$.push(this.deleteUser(ids[i]));
    }
    return forkJoin(tasks$);
  }
}

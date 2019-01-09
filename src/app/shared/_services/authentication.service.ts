﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/shared/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>called login api ..');
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, 
        //{ username, password }
        {
            "user": {
                "email": username,
                "password": password
            }
        }
    )
            .pipe(map(user => {
                //console.log('>>>>>>>>>>>>user', JSON.stringify(user));
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    register( firstname: string, lastname: string,
    email: string,password: string, role: string){
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>called login api ..');

        return this.http.post<any>(`${config.apiUrl}/users/register`, 
        {
            "user": {
                "email": email,
                "firstName": firstname,
                "lastName": lastname,
                "password": password,
                "role": role
            }
        }).pipe(map( user => {
            if(user){
                return user;
            }
        }));
      
    }
}
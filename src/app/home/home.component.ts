﻿import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        console.log('currentuser_id>>>', this.currentUser._id);
        this.userService.getById(this.currentUser._id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }
}
import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { IProduct } from './product';
import { UserService } from '@/shared/_services';
import { User, Role } from '@/shared/_models';
@Component({ templateUrl: 'users-list.component.html' })

export class UsersListComponent implements OnInit {
    pageTitle: string = 'Users List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    users: User[];

    constructor(private userService: UserService,
                private route: ActivatedRoute) { 

                }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.showImage = (this.route.snapshot.queryParams['showImage'] === 'true');

        console.log('>>>>>>>>>>>>>>>>>called user list component');

        // console.log(this.route.snapshot.queryParamMap.get('filterBy'));            

         this.userService.getAll()
                 .subscribe( (users) =>  {
                     this.users = users["user"];
                     //console.log(">>>>>>",users["user"][0]);
                 },
                            error => this.errorMessage = <any>error);

                            console.log('>>>>>>>>>>>>>>>>>list', JSON.stringify(this.users));

    }
}

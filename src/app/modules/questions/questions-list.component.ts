import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../shared/_services/question.service';
import { Question } from '../../shared/_models/question';
@Component({ templateUrl: 'questions-list.component.html' })

export class QuestionsListComponent implements OnInit {
    pageTitle: string = 'Users List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    questions: Question[];

    constructor(private questionService: QuestionService,
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

         this.questionService.getAll()
                 .subscribe( (users) =>  {
                     this.questions = users["user"];
                     //console.log(">>>>>>",users["user"][0]);
                 },
                            error => this.errorMessage = <any>error);

                            console.log('>>>>>>>>>>>>>>>>>list', JSON.stringify(this.questions));

    }
}

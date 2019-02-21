import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from '../_models/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Question[]>(`${config.apiUrl}/users/list`);
    }

    getById(id: any) {
        return this.http.get<Question>(`${config.apiUrl}/users/${id}`);
    }
}
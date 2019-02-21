import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuestionsListComponent } from './questions-list.component';
//import { UsersDetailComponent } from './users-detail.component';
//import { UsersEditComponent } from './users-edit.component';

import { CommonModule} from '@angular/common';
import { QuestionService } from '../../shared/_services/question.service';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  imports: [
   SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionsListComponent
      }
     /* ,
      {
        path: ':id',
        component: UsersDetailComponent
        //,
        //resolve: { product: ProductResolver }
      },
      {
        path: ':id/edit',
        component: UsersEditComponent
        //,
        //resolve: { product: ProductResolver },
        //canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ] 
      } */
    ])
  ],
  declarations: [
    QuestionsListComponent
    //,
    // ProductDetailComponent,
    // ProductEditComponent,
    // ProductEditInfoComponent,
    // ProductEditTagsComponent,
    // ProductFilterPipe
  ],
  providers: [
    QuestionService
    //,
    // ProductResolver,
    // ProductEditGuard
  ]
})
export class QuestionsModule { }

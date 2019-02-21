import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';
//import { UsersDetailComponent } from './users-detail.component';
//import { UsersEditComponent } from './users-edit.component';

import { CommonModule} from '@angular/common';
import { UserService } from '@/shared/_services';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  imports: [
   SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListComponent
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
    UsersListComponent
    //,
    // ProductDetailComponent,
    // ProductEditComponent,
    // ProductEditInfoComponent,
    // ProductEditTagsComponent,
    // ProductFilterPipe
  ],
  providers: [
    UserService
    //,
    // ProductResolver,
    // ProductEditGuard
  ]
})
export class UsersModule { }

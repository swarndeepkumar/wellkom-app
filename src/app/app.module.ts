import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './shared/_helpers';
import { MessagesComponent } from './shared/messages/messages.component';
import { HomeComponent } from './modules/home';
import { AdminComponent } from './modules/admin';
import { LoginComponent } from './modules/user/login';
import { RegisterComponent } from './modules/user/register';

/* Feature Modules */
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
//import { MessageModule } from './messages/message.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        UsersModule,
        QuestionsModule
    ],
    declarations: [
        AppComponent,
        MessagesComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        //,

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
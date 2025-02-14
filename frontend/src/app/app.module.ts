import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/auth/login-form/login-form.component';
import { RegisterFormComponent } from './component/auth/register-form/register-form.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { MainContentComponent } from './component/layout/main-content/main-content.component';
import { NavComponent } from './component/layout/nav/nav.component';
import { FormAddTaskComponent } from './component/tasks/form-add-task/form-add-task.component';
import { SearchTaskComponent } from './component/tasks/search-task/search-task.component';
import { TaskComponent } from './component/tasks/task/task.component';
import { TaskGroupComponent } from './component/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './component/tasks/task-group-list/task-group-list.component';
import { TestsComponent } from './component/test/tests/tests.component';
import { AfficheListeLanguagesComponent } from './component/test/affiche-liste-languages/affiche-liste-languages.component';
import { AfficheDetailLanguageComponent } from './component/test/affiche-detail-language/affiche-detail-language.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAddGroupLanguagesComponent } from './component/tasks/form-add-group-languages/form-add-group-languages.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserListComponent } from './component/auth/user-list/user-list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent,
    FormAddTaskComponent,
    SearchTaskComponent,
    TaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    TestsComponent,
    AfficheListeLanguagesComponent,
    AfficheDetailLanguageComponent,
    FormAddGroupLanguagesComponent,
    NotFoundComponent,
    UserListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

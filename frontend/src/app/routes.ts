import { Routes } from "@angular/router";
import { MainContentComponent } from "./component/layout/main-content/main-content.component";
import { FormAddGroupLanguagesComponent } from "./component/tasks/form-add-group-languages/form-add-group-languages.component";
import { LoginFormComponent } from "./component/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./component/auth/register-form/register-form.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { UserListComponent } from "./component/auth/user-list/user-list.component";
import { TaskGroupListComponent } from "./component/tasks/task-group-list/task-group-list.component";



const routes :Routes = [
    {
        path:"",
        component: MainContentComponent,
        children:[
            {
                path:"",
                component: TaskGroupListComponent
            },
            {
                path:"add-goup-task",
                component: FormAddGroupLanguagesComponent
            },
            {
                path:"login",
                component: LoginFormComponent
            },
            {
                path:"register",
                component: RegisterFormComponent
            },
            {
                path:"users",
                component: UserListComponent
            },
        ]
    },
   
 
    {
        path:"**",
        component: NotFoundComponent,
    }
]

export default routes;
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { IndexComponent } from './login/index/index.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { authrGuard } from './guard/authr.guard';

const routes: Routes = [{path:'',component:IndexComponent},
                        {path:'login',component:LoginComponent},
                        {path:'Register',component:RegisterComponent},
                        {path:'home',component:HomeComponent,canActivate:[authrGuard],children:[
                          {path:'',component:ListComponent},
                          {path:'form',component:FormComponent},
                          {path:'list',component:ListComponent},
                          {path:'Update/:id',component:AddFormComponent}
                        ]}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

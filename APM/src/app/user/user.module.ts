import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

// NgRx
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }

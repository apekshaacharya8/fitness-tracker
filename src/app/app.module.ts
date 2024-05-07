import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
       { path: 'login', component: LoginComponent },
      { path: 'signup', component: AuthenticationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'workouts', component: WorkoutsComponent },
      { path: 'exercises', component: ExerciseComponent },
      { path: 'goals', component: GoalsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent,
    ProfileComponent,
    WorkoutsComponent,
    ExerciseComponent,
    GoalsComponent,
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

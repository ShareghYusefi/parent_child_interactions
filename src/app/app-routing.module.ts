import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  {
    path: 'students/:id',
    component: StudentFormComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // pathMatch: 'full' ensures that the redirect happens only when the full path is empty
  },
  // wildcard route
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard, AuthGuardBackwards } from './guards/auth.guard';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { NoPathComponent } from './components/no-path/no-path.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddBookComponent, canActivate: [AuthGuardBackwards] },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuardBackwards] },
  { path: 'edit/:id', component: EditBookComponent, canActivate: [AuthGuardBackwards] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NoPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

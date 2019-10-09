import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [ { path: 'user', component: UserComponent, canActivate: [UserAuthGuard]},
  { path: 'facility-manager', component: AdminComponent, canActivate: [AdminAuthGuard]} ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

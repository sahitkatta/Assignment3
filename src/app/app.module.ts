import { FacilityManagerService } from './services/facility-manager.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService, UserService, FacilityManagerService, AdminAuthGuard, UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

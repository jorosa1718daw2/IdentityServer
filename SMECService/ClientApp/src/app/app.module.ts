import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FocusComponent } from './focus/focus.component';
import { SensorRealTimeDataComponent } from './sensor-rt-data/sensor-rt-data.component';
import { CurrentSensorDataService } from './services/current-sensor-data.service';
import { AuthService } from './services/auth.service';
import { FocusService } from './services/focus.service';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    FocusComponent,
    SensorRealTimeDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FetchDataComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'focus', component: FocusComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: FetchDataComponent }
    ])
  ],
  providers: [CurrentSensorDataService, FocusService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

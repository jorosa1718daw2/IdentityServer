/** Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
/** Services */
import { FocusService } from './services/focus.service';
import { AuthService } from './services/auth.service';
import { CurrentSensorDataService } from './services/current-sensor-data.service';
import { AnalyzerService } from './services/analyzer.service'
/** Components */
import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FocusComponent } from './focus/focus.component';
import { LoginComponent } from './login/login.component';
import { CalibrationFunctionsComponent } from './calibration-functions/calibration-functions.component';
import { FocusAddComponent } from './focus-add/focus-add.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { SensorRealTimeDataComponent } from './sensor-rt-data/sensor-rt-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    FocusComponent,
    SensorRealTimeDataComponent,
    LoginComponent,
    CalibrationFunctionsComponent,
    FocusAddComponent,
    AnalyzerComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FetchDataComponent },
      { path: 'cf', component: CalibrationFunctionsComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'analyzerEdit/:analyzerId', component: AnalyzerComponent },
      { path: 'analyzer/add', component: AnalyzerComponent },
      { path: 'focus/add', component: FocusAddComponent },
      { path: 'focusEdit/:focusId', component: FocusAddComponent },
      { path: 'focus', component: FocusComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: FetchDataComponent }
    ])
  ],
  providers: [CurrentSensorDataService, FocusService, AuthService, AnalyzerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


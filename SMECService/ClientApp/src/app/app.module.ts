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
import { LoginComponent } from './login/login.component';
import { CalibrationFunctionsComponent } from './calibration-functions/calibration-functions.component';
import { SensorRealTimeDataComponent } from './sensor-rt-data/sensor-rt-data.component';

/** focus components */
import { FocusComponent } from './FocusComponents/focus/focus.component';
import { FocusAddComponent } from './FocusComponents/focus-add/focus-add.component';
import { FocusEditComponent } from './FocusComponents/focus-edit/focus-edit.component';

/** analyzer components */
import { AnalyzerAddComponent } from './AnalyzerComponents/analyzer-add/analyzer-add.component';
import { AnalyzerEditComponent } from './AnalyzerComponents/analyzer-edit/analyzer-edit.component';
import { AnalyzerListComponent } from './AnalyzerComponents/analyzer-list/analyzer-list.component';



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
    AnalyzerAddComponent,
    AnalyzerEditComponent,
    FocusEditComponent,
    AnalyzerListComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FocusComponent },
      { path: 'cf', component: CalibrationFunctionsComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'analyzerEdit/:analyzerId', component: AnalyzerEditComponent },
      { path: 'analyzer/add', component: AnalyzerAddComponent},
      { path: 'focus/add', component: FocusAddComponent },
      { path: 'focusEdit/:focusId', component: FocusEditComponent },
      { path: 'focusEdit/:focusId', component: AnalyzerListComponent },

      { path: 'focus', component: FocusComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: FocusComponent }
    ])
  ],
  providers: [CurrentSensorDataService, FocusService, AuthService, AnalyzerService, AnalyzerEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }



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
import { MeasuringComponentService } from "./services/measuring-component.service";
import { UnitComponentService } from "./services/unit.service";
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
import { snackBarComponent } from "./AnalyzerComponents/analyzer-add/analyzer-add.component";
/**Sensor Components */
import { SensorComponent } from './SensorComponent/sensor/sensor.component';
import { SensorAddComponent } from './SensorComponent/sensor-add/sensor-add.component';
import { SensorEditComponent } from './SensorComponent/sensor-edit/sensor-edit.component';



import '../polyfills';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpModule} from '@angular/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}

import { MeasuringComponent } from './measuringComponents/measuring/measuring.component';
import { UnitComponent } from "./UnitComponents/unit/unit.component";

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
    AnalyzerListComponent,
    SensorComponent,
    SensorAddComponent,
    SensorEditComponent,
    MeasuringComponent,
    UnitComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,  
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot([
      { path: '', component: FocusComponent },
      { path: 'cf', component: CalibrationFunctionsComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'analyzerEdit/:analyzerId', component: AnalyzerEditComponent },
      { path: 'analyzer/add', component: AnalyzerAddComponent},
      { path: 'focus/add', component: FocusAddComponent },
      { path: 'focusEdit/:focusId', component: FocusEditComponent },
      { path: 'focusEdit/:focusId', component: AnalyzerListComponent },
      { path: 'sensorEdit/:sensorId', component:  SensorEditComponent},
      { path: 'measuring', component: MeasuringComponent },
      { path: 'focus', component: FocusComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: FocusComponent }
    ])
  ],
  entryComponents: [MeasuringComponent, SensorAddComponent],
  providers: [CurrentSensorDataService, FocusService, AuthService, AnalyzerService, AnalyzerEditComponent, MeasuringComponentService, UnitComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {}





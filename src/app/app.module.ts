import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectAllocationCustomisationComponent } from './project-allocation-customisation/project-allocation-customisation.component';
import { SkillspopupComponent } from './skillspopup/skillspopup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectAllocationCustomisationComponent,
    SkillspopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule,
  ],
  providers: [], entryComponents:[ProjectAllocationCustomisationComponent,SkillspopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

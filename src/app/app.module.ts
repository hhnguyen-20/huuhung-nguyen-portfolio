import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {IntroComponent} from './components/intro/intro.component';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {WorkExperienceComponent} from './components/work-experience/work-experience.component';
import {TechnicalSkillsComponent} from './components/technical-skills/technical-skills.component';
import {EducationComponent} from './components/education/education.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    TechnicalSkillsComponent,
    EducationComponent,
    ContactMeComponent,
    MainComponent,
    IntroComponent,
    FooterComponent,
    WorkflowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

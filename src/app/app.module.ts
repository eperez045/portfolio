import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// formularios
import { ReactiveFormsModule } from '@angular/forms';

// rutas
import { appRouting } from './app.routes';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    ProyectsComponent,
    SkillsComponent,
    InterestsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
    { path: 'inicio', component: AboutComponent },
    { path: 'educacion', component: EducationComponent},
    { path: 'intereses', component: InterestsComponent},
    { path: 'proyectos', component: ProyectsComponent},
    { path: 'habilidades', component: SkillsComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);

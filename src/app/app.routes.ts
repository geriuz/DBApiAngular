import { Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: 'planetas',
        component: PlanetasComponent
    },
    {
        path: '**',
        redirectTo: '/personajes'
    }
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { PlanetasComponent } from "./components/planetas/planetas.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
              HeaderComponent, 
              PersonajesComponent, 
              PlanetasComponent]
})
export class AppComponent {
  title = 'DBApi';
}

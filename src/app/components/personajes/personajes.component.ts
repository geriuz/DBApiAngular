import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { PersonajesInterface } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent implements OnInit {

  listaPersonajes: PersonajesInterface[] = [];

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.personajesService.obtenerPresonajes().subscribe({
      next: (resultado) => {
        this.listaPersonajes = resultado.items
        console.log(this.listaPersonajes)
      },
      error: (e) => {
        console.log(e)
      }
    }
    )
  }
}

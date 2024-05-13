import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../../services/planetas.service';
import { PlanetasInterface } from '../../interfaces/planetas.interface';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.scss'
})
export class PlanetasComponent implements OnInit{

  listaPlanetas: PlanetasInterface[] = [];

  constructor(private planetasService: PlanetasService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.planetasService.obtenerPresonajes().subscribe({
      next: (resultado) => {
        this.listaPlanetas = resultado.items
        console.log(this.listaPlanetas)
      },
      error: (e) => {
        console.log(e)
      }
    }
    )
  }
}

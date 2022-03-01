import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute, 
    private paisService: PaisService
  ) { }

  /* Nos vamos a suscribir a cualquier cambio del URL */
  ngOnInit(): void {
    this.activateRoute.params
        .subscribe(({ id }) => {
          console.log(`El ID del país es: ${id}`);

          /* Aqui hacemos otro observable para traer la información del país */
          this.paisService.getPaisPorCode(id)
              .subscribe(pais => {
                console.log(pais);
              })
        })
  }

}

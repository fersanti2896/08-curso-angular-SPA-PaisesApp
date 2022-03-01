import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  termino: string = '';
  valError: boolean = false;
  paises: Country[] = [];

  /* Inyectamos nuestro servicio */
  constructor(private paisService: PaisService) { }

  buscar() {
    this.valError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
        .subscribe((paises) => {
          console.log(paises);
          this.paises = paises;
        }, (err) => {
          this.valError = true;
          this.paises = [];
        });
  }
}

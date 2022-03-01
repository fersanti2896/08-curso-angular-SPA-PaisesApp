import { Component } from '@angular/core';
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

  /* Inyectamos nuestro servicio */
  constructor(private paisService: PaisService) { }

  buscar() {
    this.valError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
        .subscribe((resp) => {
          console.log(resp);
        }, (err) => {
          this.valError = true;
        });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    .button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; 

  constructor() { }

  ngOnInit(): void {
  }

}

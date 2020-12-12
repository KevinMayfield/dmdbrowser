import {Component, Input, OnInit} from '@angular/core';
import {R4} from "@ahryman40k/ts-fhir-types";

@Component({
  selector: 'app-product-render',
  templateUrl: './product-render.component.html',
  styleUrls: ['./product-render.component.scss']
})
export class ProductRenderComponent implements OnInit {

  @Input()
  product : any

  @Input()
  pharmaceuticalProduct : R4.IMedicinalProductPharmaceutical;

  constructor() { }

  ngOnInit(): void {
  }

}

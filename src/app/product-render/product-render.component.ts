import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-render',
  templateUrl: './product-render.component.html',
  styleUrls: ['./product-render.component.scss']
})
export class ProductRenderComponent implements OnInit {

  @Input()
  product : any

  constructor() { }

  ngOnInit(): void {
  }

}

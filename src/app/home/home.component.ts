import { Component } from '@angular/core';
import { ServiceService } from '../sevice/service.service';
import { Iproduct } from '../interface/product';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent
{
  product!: Iproduct[]
  constructor ( private productsSevice: ServiceService )
  {
    this.productsSevice.getAll().subscribe( data =>
    {
      console.log( this.product = data );

    } )
  }
  xoa ( id: number )
  {
    this.productsSevice.xoa( id ).subscribe( () =>
    {
      this.product = this.product.filter( product => product.id !== id )
    } )
  }
}

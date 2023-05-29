import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../sevice/service.service';
import { Iproduct } from '../interface/product';

@Component( {
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [ './edit.component.scss' ]
} )
export class EditComponent implements OnInit
{
  product: Iproduct = {
    name: "",
    price: 0
  }
  constructor ( private router: Router, private routers: ActivatedRoute, private products: ServiceService, )
  {

  }
  ngOnInit (): void
  {
    const productId = this.routers.snapshot.params[ "id" ]
    this.products.get( productId ).subscribe( ( data ) =>
    {
      console.log( this.product = data );

    } )
  }
  edit ()
  {
    this.products.edit( this.product ).subscribe( ( data ) =>
    {
      console.log( data );
      this.router.navigateByUrl( "/" )

    } )
  }

}

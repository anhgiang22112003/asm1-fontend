import { Component } from '@angular/core';
import { ServiceService } from '../sevice/service.service';
import { FormBuilder } from "@angular/forms"
import { Iproduct } from '../interface/product';
import { Router } from '@angular/router';
@Component( {
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [ './add.component.scss' ]
} )
export class AddComponent
{
  constructor ( private router: Router, private fb: FormBuilder, private productSevice: ServiceService ) { }
  addForm = this.fb.group( {
    name: [ "" ],
    price: [ 0 ]
  } )
  add ()
  {
    const products: Iproduct = {
      name: this.addForm.value.name || "",
      price: this.addForm.value.price || 0
    }
    this.productSevice.add( products ).subscribe( ( data ) =>
    {
      console.log( data );
      this.router.navigateByUrl( "/" )
    } )
  }
}

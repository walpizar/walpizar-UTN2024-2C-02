import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  constructor(private productosSrv:ProductsService){}


  ngOnInit(){

    this.productosSrv.getProducts().subscribe((datos)=>{

      console.log(datos);
    })
  }

  verDetalle(){
    alert('aqui en el detalle del producto...');
  }
}

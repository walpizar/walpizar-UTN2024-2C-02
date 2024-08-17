import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Productos } from '../../../../models/Producto';
import { ProductsService } from '../../../../services/products.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-productos-crud',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, ReactiveFormsModule,NgIf
  ],
  templateUrl: './productos-crud.component.html',
  styleUrl: './productos-crud.component.scss'
})
export class ProductosCrudComponent {

  title="";
  accion=0;
  isRead=false;
  readonly dialogRef = inject(MatDialogRef<ProductosCrudComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  producto!:Productos;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private productsSrv: ProductsService) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      estado:[true],
      categoria: ['', [Validators.required]],

    });
  }

  ngOnInit(){

    this.producto= this.data?.producto;
    this.accion=this.data?.accion;
    console.log(this.accion);
    this.isRead= this.accion==3;
    this.title= this.accion==1 ? "Crear Prodcuto": this.accion==2 ? "Modificar Producto":"Detalle de producto";

    if(this.accion==2 || this.accion==3){

      this.myForm.patchValue({
        id:this.producto.id,
        nombre:this.producto.nombre,
        precio:this.producto.precio,
        stock:this.producto.stock,
        estado: this.producto.estado,
        categoria: this.producto.categoria.id
      }


      )


    }

  }


  onSubmit(){

    if(this.accion==1){
      if(this.myForm.valid){
        this.productsSrv.create(this.myForm.value).subscribe((resp)=>{
          alert("Se guardo correctamente");
        },(err)=>{
          console.log(err);
          alert("Error al guardar");
        })


      }
    }
    else{
      console.log(this.myForm.value)
      if(this.myForm.valid){
        this.productsSrv.update(this.myForm.value).subscribe((resp)=>{
          alert("Se modificó correctamente");
        },(err)=>{
          console.log(err);
          alert("Error al al modificar");
        })

      }
    }







  }

}

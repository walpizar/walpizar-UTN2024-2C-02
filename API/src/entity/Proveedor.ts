import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";
@Entity()
export class Proveedor{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar la cedula del proveddor.'})  
    cedula:number;

    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre.'})
    nombre: string;
    
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el apellido.'})
    apellido: string;

    @Column({length:500,nullable:false})
    @MaxLength(500,{message:'Debe contener un máximo de 500 caracteres.'})
    @IsNotEmpty({message:'Debe indicar la direccion.'})
    direccion: string;

    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el telefono.'})
    telefono: string;

    
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar la provincia.'})
    provincia: string;

    @Column({default:1})
    estado: boolean;

    @OneToMany(()=>Productos, (productos)=>productos.proveedor)
    productos:Productos[]
    
}
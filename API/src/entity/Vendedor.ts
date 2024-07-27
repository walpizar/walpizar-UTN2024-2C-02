import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, PrimaryColumn } from "typeorm";

export class Vendedor{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar la cedula del vendedor.'})  
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
    @IsNotEmpty({message:'Debe indicar el cedular.'})
    celular: string;

    @Column({default:1})
    estado: boolean;
    
}
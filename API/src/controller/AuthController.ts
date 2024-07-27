import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/Usuarios";
import  *  as bcrypt from 'bcryptjs';
import  *  as jwt from 'jsonwebtoken';
import config from "../config/config";




class AuthController{

    static login= async(req: Request, res:Response)=>{

        try {

          const  {username, password}= req.body;

          if( !(username || password)){
            return res.status(400).json({message:'falta Usdduario o contraseña'})
          }

          const repoUsuario = AppDataSource.getRepository(Usuarios);
          let usuario:  Usuarios;
        try {
          usuario = await repoUsuario.findOneOrFail({where:{username}})
        } catch (error) {
            return res.status(400).json({message:'Usuario o contraseña incorrectas.'});

        }

          //

          if(!bcrypt.compare(password, usuario.password)){
            return res.status(400).json({message:'Usuario o contraseña incorrectas.'});

          }

          //generar el token
          const token= jwt.sign({id:usuario.id},config.jwtSecret,{expiresIn:'3m'})

          return res.status(200).json({message:'OK', token, role:usuario.role, usuario: usuario.username})









        } catch (error) {

        }






    }

}
export default AuthController;

import { Router } from "express";
import UsuariosController from "../controller/UsuariosController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";


const routes= Router();


routes.post("",[checkJwt, checkRole(['factur'])], UsuariosController.new)



export default routes;


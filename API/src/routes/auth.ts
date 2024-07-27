import { Router } from "express";
import ProductosController from "../controller/ProductosController";
import AuthController from "../controller/AuthController";


const routes= Router();


routes.post("/login", AuthController.login)


export default routes;

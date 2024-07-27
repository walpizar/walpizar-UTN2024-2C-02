import {Router} from "express"
import productos from "./productos";
import categoria from "./categorias";
import usuarios from "./usuarios";
import auth from "./auth";

const routes= Router();

routes.use("/productos", productos );
routes.use("/categorias", categoria );
routes.use("/usuarios", usuarios );
routes.use("/auth", auth );

export default routes;


import "reflect-metadata"
import { DataSource } from "typeorm"

import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"
import { Proveedor } from "./entity/Proveedor"
import { Usuarios } from "./entity/Usuarios"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [ Productos, Categoria, Proveedor, Usuarios],
    migrations: [],
    subscribers: [],
})

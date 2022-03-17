import { Router } from "express";
import {
  getUserController,
  getAllUserController,
} from "../controlador/datos.js";

const routerDatos = new Router();

routerDatos.get("/:id", getUserController);
routerDatos.get("/allUsers", getAllUserController);

export default routerDatos;

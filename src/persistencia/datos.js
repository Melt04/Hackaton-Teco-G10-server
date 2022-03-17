import { modelUsuario } from "./modelos/usuarios.js";
import { modelContenido } from "./modelos/contenidos.js";

async function getUserById(id) {
  const user = await modelUsuario.find({ id });
  return user;
}
async function getAllUsers() {
  const user = await modelUsuario.find();
  return user;
}

async function getContentById(id) {
  const user = await modelContenido.find({ id });
  return user;
}
async function getAllcontent() {
  const user = await modelContenido.find();
  return user;
}

export { getUserById, getAllUsers, getAllcontent, getContentById };

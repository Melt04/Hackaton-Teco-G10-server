import modelUsuario from "./modelos/usuarios";

async function getUserById(id) {
  const user = await modelUsuario.find({ id });
  return user;
}

export { getUsuarios };

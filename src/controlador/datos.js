import {
  getUser,
  getUsers,
  getContent,
  getContents,
} from "../negocio/datos.js";

async function getUserController(req, res) {
  const { id } = req.body;
  console.log(id);
  const datos = await getUser(id);
  res.json(datos);
}
async function getAllUserController(req, res) {
  try {
    const datos = await getUsers();
    return res.json(datos);
  } catch (e) {
    console.log(e);
    return res.json({ error: "error" });
  }
}
async function getContentController(req, res) {
  const { id } = req.body;
  console.log(id);
  const datos = await getContent(id);
  res.json(datos);
}
async function getAllContentController(req, res) {
  try {
    const datos = await getContents();
    return res.json(datos);
  } catch (e) {
    console.log(e);
    return res.json({ error: "error" });
  }
}

export {
  getUserController,
  getAllUserController,
  getContentController,
  getAllContentController,
};

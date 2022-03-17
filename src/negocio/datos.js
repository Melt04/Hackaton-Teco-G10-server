import {
  getUserById,
  getAllUsers,
  getContentById,
  getAllcontent,
} from "../persistencia/datos.js";

async function getUser(id) {
  return await getUserById(id);
}

async function getUsers() {
  return await getAllUsers();
}
async function getContent(id) {
  return await getContentById(id);
}

async function getContents() {
  return await getAllcontent();
}

export { getUser, getUsers, getContents, getContent };

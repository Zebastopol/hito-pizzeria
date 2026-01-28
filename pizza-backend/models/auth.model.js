import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getUserByEmail = async (email) => {
  const dbPath = join(__dirname, "..", "db", "users.json");
  const data = await readFile(dbPath, "utf-8");
  const users = JSON.parse(data);
  return users.find((user) => user.email === email);
};

const addUser = async (newUser) => {
  const dbPath = join(__dirname, "..", "db", "users.json");
  const data = await readFile(dbPath, "utf-8");
  const users = JSON.parse(data);
  users.push(newUser);
  await writeFile(dbPath, JSON.stringify(users, null, 2));
};

export const authModel = {
  getUserByEmail,
  addUser,
};

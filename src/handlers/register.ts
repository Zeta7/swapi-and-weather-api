import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { success, failure } from "../utils/response";
import { getUserByEmail, saveUser } from "../repositories/user.repository";

export const handler = async (event: any) => {
  try {
    const { email, password } = JSON.parse(event.body);

    if (!email || !password) {
      return failure(400, "Email y contraseña requeridos");
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return failure(400, "El usuario ya existe");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await saveUser({
      id: email,
      password: hashedPassword,
      createdAt: Date.now(),
      uuid: uuidv4(),
    });

    return success(201, { message: "Usuario registrado correctamente" });
  } catch (error: any) {
    console.error(error);
    return failure(500, "Error interno", error.message);
  }
};

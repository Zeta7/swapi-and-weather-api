import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { success, failure } from "../utils/response";
import { getUserByEmail } from "../repositories/user.repository";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export const handler = async (event: any) => {
  try {
    const { email, password } = JSON.parse(event.body);

    if (!email || !password) {
      return failure(400, "Email y contraseña requeridos");
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return failure(401, "Credenciales inválidas");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return failure(401, "Credenciales inválidas");
    }

    delete user.password;

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

    return success(200, { token, ...user });
  } catch (error: any) {
    console.error(error);
    return failure(500, "Error interno", error.message);
  }
};

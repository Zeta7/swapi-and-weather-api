import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidv4 } from "uuid";
import { success, failure } from "../utils/response";
import { saveProfileData } from "../repositories/profile.repository";

export const handler: APIGatewayProxyHandler = async (event: any) => {
  try {
    if (!event.body) return failure(400, "Se requiere un body JSON");

    const body = JSON.parse(event.body);
    const item = { id: uuidv4(), createdAt: Date.now(), ...body };

    await saveProfileData(item);
    return success(201, item);
  } catch (err) {
    console.error("Error en handler postSaveData:", err);
    return failure(500, "Error al guardar datos personalizados");
  }
};

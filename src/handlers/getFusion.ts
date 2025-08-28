import { APIGatewayProxyResult } from "aws-lambda";
import { getFusion } from "../services/fusion.service";
import { success, failure } from "../utils/response";

export const handler = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    const page = Number(event.queryStringParameters?.page ?? 1);

    const result = await getFusion(page);
    return success(200, result);
  } catch (err: any) {
    console.error("Error en handler getFusion:", err);
    return failure(500, "Error al obtener datos fusionados");
  }
};

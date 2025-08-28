import { APIGatewayProxyHandler } from "aws-lambda";
import { success, failure } from "../utils/response";
import { queryHistory } from "../repositories/history.repository";

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const limit = Number(event.queryStringParameters?.limit ?? 10);
    const lastKey = event.queryStringParameters?.lastKey
      ? JSON.parse(decodeURIComponent(event.queryStringParameters.lastKey))
      : undefined;

    const res = await queryHistory(limit, lastKey);
    return success(200, {
      items: res.Items,
      lastEvaluatedKey: res.LastEvaluatedKey
        ? encodeURIComponent(JSON.stringify(res.LastEvaluatedKey))
        : undefined,
    });
  } catch (err) {
    console.error("Error en handler getHistory:", err);
    return failure(500, "Error al obtener historial de fusiones");
  }
};

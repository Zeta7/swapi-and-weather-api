import { APIGatewayProxyResult } from "aws-lambda";
import { handler as getFusionHandler } from "../../src/handlers/getFusion";

describe("Fusion Handler", () => {
  it("debería retornar datos combinados de SWAPI y Weather", async () => {
    const event = {} as any;
    const response = await getFusionHandler(event) as APIGatewayProxyResult;

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(true);
  }, 20000);
});

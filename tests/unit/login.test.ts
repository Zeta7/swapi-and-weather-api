import { handler as loginHandler } from "../../src/handlers/login";

describe("Login Handler", () => {
  it("debería retornar un token válido con credenciales correctas", async () => {
    const event: any = {
      body: JSON.stringify({ email: "edson@gmail.com", password: "123edSON.." }),
    };

    const response = await loginHandler(event);
    
    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(true);
    expect(body.data).toHaveProperty("token");
  });

  it("debería fallar con credenciales inválidas", async () => {
    const event: any = {
      body: JSON.stringify({ email: "sith", password: "wrong" }),
    };

    const response = await loginHandler(event);

    expect(response.statusCode).toBe(401);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(false);
  });
});

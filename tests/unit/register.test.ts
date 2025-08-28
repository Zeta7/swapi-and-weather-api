import { handler as registerHandler } from "../../src/handlers/register";

describe("Register Handler", () => {
  it("debería registrar un usuario con body válido", async () => {
    const event: any = {
      body: JSON.stringify({ email: "test12@gmail.com", password: "123test.." }),
    };

    const response = await registerHandler(event);

    expect(response.statusCode).toBe(201);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(true);
  });

  it("debería fallar si falta email", async () => {
    const event: any = {
      body: JSON.stringify({ password: "no-user" }),
    };

    const response = await registerHandler(event);

    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(false);
  });
});

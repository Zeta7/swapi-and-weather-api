import axios from "axios";

const baseUrl = "http://localhost:3000/dev";

describe("StarWars Weather API Integration", () => {
  let token: string;

  it("debería registrar y loguear un usuario", async () => {
    await axios.post(`${baseUrl}/auth/register`, {
      email: "test.integration@gmail.com",
      password: "123test..",
    });

    const loginRes = await axios.post(`${baseUrl}/auth/login`, {
      email: "test.integration@gmail.com",
      password: "123test..",
    });

    expect(loginRes.status).toBe(200);
    token = loginRes.data.data.token;
    expect(token).toBeDefined();
  });

  it("debería obtener datos fusionados", async () => {
    const res = await axios.get(`${baseUrl}/fusion`);
    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
  });

  it("debería guardar datos (endpoint protegido)", async () => {
    const res = await axios.post(
      `${baseUrl}/save-data`,
      { profile: { name: "marical caseres", role: "Client", dni: "12345678" } },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    expect(res.status).toBe(201);
    expect(res.data.success).toBe(true);
  });

  it("debería obtener historial", async () => {
    const res = await axios.get(`${baseUrl}/history`);
    
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.data.items)).toBeDefined();
  });
});

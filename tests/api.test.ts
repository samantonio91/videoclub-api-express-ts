import request from "supertest";
import {beforeEach, describe, expect, it} from "vitest";
import {createApp} from "../src/app";

let app: ReturnType<typeof createApp>;
const customer = {documentId: "ABC-123", name: "Ana Garcia", phone: "5551234", email: "ana@example.com"};
const game = {code: 10, title: "Adventure", price: 199.5, platform: "PC", genre: "RPG"};
beforeEach(() => { app = createApp(); });

describe("Health", () => {
  it("responds", async () => {
    const r = await request(app).get("/health");
    expect(r.status).toBe(200);
    expect(r.body.status).toBe("ok");
  });
});
describe("Customer UML operations", () => {
  it("creates (AgregarCliente)", async () => {
    const r = await request(app).post("/api/customers").send(customer);
    expect(r.status).toBe(201);
    expect(r.body).toMatchObject({id: 1, ...customer});
  });
  it("updates (ModificarCliente)", async () => {
    await request(app).post("/api/customers").send(customer);
    const r = await request(app).put("/api/customers/1").send({...customer, name: "Ana Lopez"});
    expect(r.status).toBe(200);
    expect(r.body.name).toBe("Ana Lopez");
  });
  it("deletes (EliminarCliente)", async () => {
    await request(app).post("/api/customers").send(customer);
    expect((await request(app).delete("/api/customers/1")).status).toBe(204);
    expect((await request(app).get("/api/customers/1")).status).toBe(404);
  });
  it("filters (MostrarClientes)", async () => {
    await request(app).post("/api/customers").send(customer);
    await request(app).post("/api/customers").send({...customer, documentId: "XYZ", name: "Bruno"});
    const r = await request(app).get("/api/customers?name=ana&documentId=abc");
    expect(r.status).toBe(200);
    expect(r.body).toHaveLength(1);
  });
  it("gets by ID (BuscarCliente)", async () => {
    await request(app).post("/api/customers").send(customer);
    const r = await request(app).get("/api/customers/1");
    expect(r.status).toBe(200);
    expect(r.body.name).toBe("Ana Garcia");
  });
  it("validates input and IDs", async () => {
    expect((await request(app).post("/api/customers").send({name: ""})).status).toBe(400);
    expect((await request(app).get("/api/customers/nope")).status).toBe(400);
    expect((await request(app).delete("/api/customers/999")).status).toBe(404);
  });
});
describe("Game UML operations", () => {
  it("creates (AgregarJuego)", async () => {
    const r = await request(app).post("/api/games").send(game);
    expect(r.status).toBe(201);
    expect(r.body).toMatchObject({id: 1, ...game});
  });
  it("updates (ModificarJuego)", async () => {
    await request(app).post("/api/games").send(game);
    const r = await request(app).put("/api/games/1").send({...game, platform: "PS5"});
    expect(r.status).toBe(200);
    expect(r.body.platform).toBe("PS5");
  });
  it("rejects bad price and missing game", async () => {
    expect((await request(app).post("/api/games").send({...game, price: -1})).status).toBe(400);
    expect((await request(app).put("/api/games/999").send(game)).status).toBe(404);
  });
});
describe("API boundaries", () => {
  it("handles malformed JSON", async () => {
    const r = await request(app).post("/api/customers").set("Content-Type", "application/json").send('{"name":');
    expect(r.status).toBe(400);
  });
  it("keeps app instances independent", async () => {
    await request(app).post("/api/customers").send(customer);
    expect((await request(createApp()).get("/api/customers")).body).toEqual([]);
  });
});

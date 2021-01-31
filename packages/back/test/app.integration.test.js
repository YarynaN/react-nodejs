import request from "supertest";
import app from "../index";
import { describe, it } from "@jest/globals";

describe("app", () => {
  it('GETs / and should obtain { foo: "bar" }', async () => {
    expect.assertions(1);
    const res = await request(app).get("/api/customers").expect(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "foo": "bar",
      }
    `);
  });
});

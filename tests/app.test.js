const request = require("supertest");
const app = require("../app");

describe("Student Task Manager API", () => {

  test("GET / should return API message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Student Task Manager API is running");
  });

  test("GET /health should return health status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  test("GET /tasks should return tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /tasks should create task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "New Jenkins Task"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("New Jenkins Task");
  });

});
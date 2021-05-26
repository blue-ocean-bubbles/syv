/* eslint-disable */
const request = require("supertest");
import app from '../../../server/middlewares'

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api/hello")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
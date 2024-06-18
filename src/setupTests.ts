import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  console.log("server listening");
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

//solve matchMedia error
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: function () {}, // You can use empty functions as needed
    removeListener: function () {},
  }),
});

import "@testing-library/jest-dom";

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

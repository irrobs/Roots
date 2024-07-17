const size = {
  laptop: "1280px",
  smallLaptop: "1024px",
  tablet: "900px",
  smallTablet: "750px",
};

export const device = {
  laptop: `(max-width:${size.laptop})`,
  smallLaptop: `(max-width:${size.smallLaptop})`,
  tablet: `(max-width:${size.tablet})`,
  smallTablet: `(max-width:${size.smallTablet})`,
};

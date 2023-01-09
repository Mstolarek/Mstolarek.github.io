import { createTheme } from "@mui/material/styles";

export const backgroundColors = {
  primary: "rgb(37, 48, 54)",
  secondary: "rgb(223, 225, 227)",
};

export const palette = {
  primary: { main: `rgb(205, 242, 101)` },
  text: {
    primary: "rgb(223, 223, 223)",
    secondary: "rgb(169, 172, 174)",
    contrast: "rgba(0, 0, 0, 0.87)",
  },
};
export const theme = createTheme({
  palette: palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
          width: "100%",
          overflowX: "hidden",
          backgroundColor: backgroundColors.primary,
          "*::-webkit-scrollbar": {
            display: "none",
          },
        },
        body: {
          height: "100%",

          backgroundColor: "transparent",
        },
        "#root": {
          height: "100%",
        },
        ".tree": {
          listStyle: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
  },
});

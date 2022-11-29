import { createTheme } from "@mui/material/styles";
import image from "../assets/i4bHalfLogo.svg";

export const backgroundColors = {
  primary: "rgb(37, 48, 54)",
  secondary: "rgb(223, 225, 227)",
};

export const theme = createTheme({
  palette: {
    primary: { main: `rgb(205, 242, 101)` },
    text: {
      primary: "rgb(223, 223, 223)",
      secondary: "rgb(169, 172, 174)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          width: "100%",
          backgroundColor: backgroundColors.primary,
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          "*::-webkit-scrollbar": {
            display: "none",
          },
        },
        body: {
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
  },
});

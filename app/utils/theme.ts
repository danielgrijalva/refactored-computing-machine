"use client";
import { createTheme } from "@mui/material/styles";
import { Inter, Poppins } from "next/font/google";
import { ThemeOptions } from "@mui/material/styles";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ed85c7",
    },
    secondary: {
      main: "#858585",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    h1: {
      fontWeight: 900,
      lineHeight: 1,
      fontSize: "3rem",
    },
    fontWeightBold: 900,
    fontWeightMedium: 600,
    h2: {
      fontFamily: poppins.style.fontFamily,
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 300,
      fontSize: "1.1rem",
    },
    subtitle2: {
      fontSize: "1.1rem",
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 700,
    },
    caption: {
      fontWeight: 300,
    },
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000", 
          backgroundImage: "none"
        },        
      },
    },    
  },
};

const theme = createTheme(themeOptions);

export default theme;

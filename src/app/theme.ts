import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#51a8d1",
      dark: "#397692",
      light: "#b9dced",
      contrastText: "#00294A",
    },
    secondary: {
      main: "#8d3461",
    },
    text: {
      primary: "#00294A",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontSize: 16,
    h4: {
      fontFamily: "monospace",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "monospace",
      fontWeight: 700,
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";
import { lightGreen, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: {
      main: "#f44336",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1072,
      xl: 1536,
    },
  },
});

export default theme;

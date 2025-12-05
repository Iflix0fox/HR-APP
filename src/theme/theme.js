import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      limeGreen: "#00FF00",
    },
    secondary: {
      main: "#dc004e",
    },
    green: {
      // <-- custom color
      main: "#00FF00",
      contrastText: "#000",
    },
    yellow: {
      main: "#FFEB3B",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;

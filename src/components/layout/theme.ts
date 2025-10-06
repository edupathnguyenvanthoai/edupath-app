import { Slide, type ThemeOptions } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const themeConfig: ThemeOptions = {
  shape: {
    borderRadius: 12,
  },
  palette: {
    mode: "dark",
    primary: { main: blue[600] },
    common: {
      white: grey[50],
      black: grey[900],
    },
  },
  typography: {
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: 32,
      fontWeight: 900,
    },
    h2: {
      fontSize: 28,
      fontWeight: 800,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textAlign: "center",
      textTransform: "unset",
    },
  },
  components: {
    MuiDialog: {
      defaultProps: {
        maxWidth: "xs",
        fullWidth: true,
        slots: {
          transition: Slide,
        },
        slotProps: {
          transition: {
            direction: "up",
          },
          backdrop: {
            sx: {
              backdropFilter: "blur(4px)",
            },
          },
        },
      },
    },
    MuiDialogContent: {
      defaultProps: {
        dividers: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: 12,
          paddingRight: 12,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          }
        }
      }
    }
  },
};

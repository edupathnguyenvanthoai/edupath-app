import {
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { HeaderMain } from "./header-main";
import { themeConfig } from "./theme";
import { SearchSubject } from "../search/search-subject";

export function LayoutMain({ children }: React.PropsWithChildren) {
  const { top, bottom } = { top: 2, bottom: 2 };
  return (
    <ThemeProvider theme={createTheme(themeConfig)}>
      <CssBaseline />
      <Container maxWidth="xs" sx={{ height: "100dvh", overflow: "auto" }}>
        <Stack spacing={2} pt={top} pb={bottom}>
          <HeaderMain />
          <SearchSubject />
          {children}
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

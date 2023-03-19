import { ThemeProvider } from "@mui/system";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "@/components/Theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}

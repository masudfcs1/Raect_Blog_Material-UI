import { Container, ThemeProvider, createTheme } from "@material-ui/core";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";

function App() {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      neutral: {
        main: "#5c6ac4",
      },
    },
  });
  return (
    <ThemeProvider>
      <Container>
        <Header />
        <FeaturedPost />
      </Container>
    </ThemeProvider>
  );
}

export default App;

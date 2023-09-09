import { Container, Grid, ThemeProvider, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";

import GridFeature from "./components/GridFeature";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const useStyle = makeStyles((theme) => ({
  minGid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <br />
        <GridFeature />
        <br />

        {/* className={classes.minGid} */}
        <Grid Container spacing={5} className={classes.minGid}>
          <Main title="From the Maldivs" />
          <Sidebar
            title={Sidebar.title}
            description={Sidebar.description}
            archives={Sidebar.archives}
            social={Sidebar.social}
          />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

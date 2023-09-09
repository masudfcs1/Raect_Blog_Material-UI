import { Grid } from "@material-ui/core";
import React from "react";

const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      {title}
    </Grid>
  );
};

export default Main;

import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import Item2 from "./Item2";
import Item1 from "./Item1";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),

    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GridFeature = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {" "}
            <Item2 />{" "}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Item1 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridFeature;

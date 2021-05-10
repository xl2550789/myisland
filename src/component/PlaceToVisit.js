import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: { flexDirection: "column" },
  },
}));

export default function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <Grid container className={classes.container}>
        <ImageCard place={places[0]} checked={checked} />
        <ImageCard place={places[1]} checked={checked} />
      </Grid>
      <Grid container className={classes.container}>
        <ImageCard place={places[2]} checked={checked} />
        <ImageCard place={places[3]} checked={checked} />
      </Grid>
      <Grid container className={classes.container}>
        <ImageCard place={places[4]} checked={checked} />
        <ImageCard place={places[5]} checked={checked} />
      </Grid>
    </div>
  );
}

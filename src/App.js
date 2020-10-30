import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Header from "./component/Header";
import PlaceToVisit from "./component/PlaceToVisit";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/cover.jpg"})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    backgroundSize: "100% 100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;

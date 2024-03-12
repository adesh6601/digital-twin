import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import SideBar from "./SideBar";
import Graphs from "./Graphs";
import ActuatorInfo from "./ActuatorInfo";

const useStyles = makeStyles({
  titleBarCSS: {
    backgroundColor: "#9eb9e9",
    height: "8vh",
  },
  SideBarCSS: {
    backgroundColor: "#ece9d9",
    height: "96vh",
  },
  viewerAreaCSS: {
    backgroundColor: "#ece9d9",
    height: "96vh",
  },
  graphsAreaCSS: {
    backgroundColor: "#ece9d9",
    height: "96vh",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} className={classes.titleBarCSS}>
        <Typography
          style={{
            fontSize: "45px",
            fontWeight: "",
            textAlign: "left",
            marginLeft: "20px",
            color: "#f4fcff",
          }}
        >
          Actuator Digital Twin
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid
          item
          xs={1}
          className={classes.SideBarCSS}
          style={{
            border: "0.5px solid gray",
          }}
        >
          <SideBar />
        </Grid>
        <Grid item xs={5.5} className={classes.viewerAreaCSS}>
          <ActuatorInfo />
        </Grid>
        <Grid item xs={5.5} className={classes.graphsAreaCSS}>
          <Graphs />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

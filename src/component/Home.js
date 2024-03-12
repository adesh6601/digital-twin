import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles'
import React from "react";
import SideBar from "./SideBar";
import Graphs from "./Graphs";
import ActuatorInfo from "./ActuatorInfo";

const useStyles = makeStyles({
  backgroundColor : {
    backgroundColor : "skyblue", height : '7vh', fontSize : '1rem'
  }
});

function Home() {
  const classes = useStyles()
  return (
    <div>
      <Grid item xs={12} className={classes.backgroundColor}>
          <Typography> Actuator Digital Twin </Typography>
      </Grid>
      <Grid container item xs = {12}>
        <Grid item xs = {1} style = {{backgroundColor : "blue", height : "93vh"}}>
          <SideBar/>
        </Grid>
        <Grid item xs = {5.5} style = {{backgroundColor : "black"}}>
          Viewer area
        </Grid>
        <Grid item xs = {5.5} style = {{backgroundColor : "green"}}>
          <Graphs/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

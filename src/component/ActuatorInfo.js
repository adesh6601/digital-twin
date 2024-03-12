import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles'
import React from "react";


function ActuatorInfo() {
  return (
    <div>
      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "black", height: "2.5vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={7} style={{ backgroundColor: "green", height: "8vh" }}>
        </Grid>

        <Grid item xs={5} style={{ backgroundColor: "red", height: "8vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={7} style={{ backgroundColor: "red", height: "16vh" }}>
        </Grid>

        <Grid item xs={5} style={{ backgroundColor: "blue", height: "16vh" }}>

          {/* <Grid item xs={5} style={{ backgroundColor: "red", height: "9vh" }}>
          </Grid>

          <Grid item xs={5} style={{ backgroundColor: "red", height: "9vh" }}>
          </Grid> */}

        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "black ", height: "8vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "red ", height: "16vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "black ", height: "32vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "red ", height: "8vh" }}>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ backgroundColor: "black ", height: "2.5vh" }}>
        </Grid>
      </Grid>

    </div>
  )
}

export default ActuatorInfo

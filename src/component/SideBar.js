import { Grid } from "@mui/material";
import React from "react";
import FolderIcon from '@mui/icons-material/Folder';

function SideBar() {
  return (
    <div>
      <Grid item xs={12}>
        <FolderIcon/>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
    </div>
  );
}

export default SideBar;

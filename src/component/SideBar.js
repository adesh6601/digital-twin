import { Grid } from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import TuneIcon from "@mui/icons-material/Tune";
import VisibilityIcon from "@mui/icons-material/Visibility";

function SideBar() {
  return (
    <div>
      <Grid item xs={12}>
        <FolderIcon />
      </Grid>
      <Grid item xs={12}>
        <TuneIcon />
      </Grid>
      <Grid item xs={12}>
        <VisibilityIcon />
      </Grid>
    </div>
  );
}

export default SideBar;

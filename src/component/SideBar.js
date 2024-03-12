import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import TuneIcon from "@mui/icons-material/Tune";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles({
  folderIconCSS: {
    fontSize: "2rem",
  },
});

function SideBar() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          border: "0.5px solid gray",
        }}
      >
        <FolderIcon
          style={{ fontSize: "100px", color: "#fadc80", padding: "10px" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          border: "0.5px solid gray",
        }}
      >
        <TuneIcon
          style={{ fontSize: "100px", color: "#5f5f5e", padding: "10px" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          border: "0.5px solid gray",
        }}
      >
        <VisibilityIcon
          style={{ fontSize: "100px", color: "#5f5f5e", padding: "10px" }}
        />
      </Grid>
    </div>
  );
}

export default SideBar;

import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const useStyles = makeStyles({
  graphContainer1: {
    backgroundColor: "white",
    marginTop: "20px",
    marginLeft: "100px",
    marginRight: "20px",
    width: "800px",
    textAlign: "center",
  },
  graphContainer2: {
    backgroundColor: "white",
    marginTop: "20px",
    marginLeft: "100px",
    marginRight: "20px",
    width: "800px",
  },
  selectionDiv1: {
    display: "flex",
    marginLeft: "100px",
    marginTop: "1rem",
  },
  selectionDiv2: {
    display: "flex",
    marginLeft: "100px",
    marginTop: "3rem",
  },
  resultTypeText: {
    fontSize: "1.5rem",
  },
});

function Graphs() {
  const classes = useStyles();
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const datasets = [
    [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
    [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
    [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
  ];
  const colors = ["red", "green", "blue"];

  const [selectedColor1, setSelectedColor1] = React.useState("red");
  const [selectedColor2, setSelectedColor2] = React.useState("red");

  const handleChangeColor1 = (event) => {
    setSelectedColor1(event.target.value);
  };

  const handleChangeColor2 = (event) => {
    setSelectedColor2(event.target.value);
  };

  return (
    <div style={{marginLeft : "-4rem"}}>
      <Grid>
        <div className={classes.selectionDiv1}>
          <span className={classes.resultTypeText}>Result Type :</span>
          <select
            value={selectedColor1}
            onChange={handleChangeColor1}
            style={{ textAlign: "left", marginLeft: "2vh", width: "20vh" }}
            id="graphDropdown1"
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </Grid>

      <Grid>
        <div className={classes.graphContainer1}>
          <LineChart
            xAxis={[{ data: xValues }]}
            series={[
              {
                data: datasets[colors.indexOf(selectedColor1)],
                color: selectedColor1,
              },
            ]}
            width={800}
            height={350}
          />
        </div>
      </Grid>

      <Grid>
        <div className={classes.selectionDiv2}>
          <span className={classes.resultTypeText}>Result Type :</span>
          <select
            value={selectedColor2}
            onChange={handleChangeColor2}
            style={{ textAlign: "left", marginLeft: "2vh", width: "20vh" }}
            id="graphDropdown2"
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </Grid>

      <Grid>
        <div className={classes.graphContainer2}>
          <LineChart
            xAxis={[{ data: xValues }]}
            series={[
              {
                data: datasets[colors.indexOf(selectedColor2)],
                color: selectedColor2,
              },
            ]}
            width={800}
            height={350}
          />
        </div>
      </Grid>
    </div>
  );
}

export default Graphs;

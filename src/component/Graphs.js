import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import { Chart } from "chart.js";

const useStyles = makeStyles({
  graph1: {},
  graph1: {},
});

function Graphs() {
  const classes = useStyles();
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  function createChart(chartId, datasets) {
    // const ctx = document.getElementById(chartId).getContext("2d");
    // return new Chart(ctx, {
    //   type: "line",
    //   data: {
    //     labels: xValues,
    //     datasets: datasets,
    //   },
    //   options: {
    //     legend: {
    //       display: false,
    //     },
    //     responsive: true,
    //   },
    // });
  }

  const datasets = [
    {
      label: "Dataset 1",
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "red",
      fill: false,
      hidden: false,
    },
    {
      label: "Dataset 2",
      data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
      borderColor: "green",
      fill: false,
      hidden: false,
    },
    {
      label: "Dataset 3",
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: "blue",
      fill: false,
      hidden: false,
    },
  ];

  const chart1 = createChart("myChart1", datasets);
  const chart2 = createChart("myChart2", datasets);

  function updateChart(chart, selectedValue) {
    if (selectedValue.toLowerCase() === "all") {
      chart.data.datasets.forEach((dataset) => {
        dataset.hidden = false;
      });
    } else {
      chart.data.datasets.forEach((dataset) => {
        if (dataset.borderColor.toLowerCase() === selectedValue.toLowerCase()) {
          dataset.hidden = false;
        } else {
          dataset.hidden = true;
        }
      });
    }
    chart.update();
  }

  return (
    <div>
      <Grid item xs={12} style={{ height: "23vh", marginTop: "2vh" }}>
        <div class="dropdown mt-5" style={{ display: "flex" }}>
          <span style={{ marginLeft: "100px", fontSize: "2vh" }}>
            {" "}
            Result Type :{" "}
          </span>
          <select
            style={{ textAlign: "left", marginLeft: "2vh", width: "20vh" }}
            id="graph1Dropdown"
            onchange="updateChart(chart1, this.value)"
          >
            <option value="all">All</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </Grid>

      <Grid style={{ height: "23vh" }}>
        <div
          class="graph-container"
          style={{ textAlign: "left", marginLeft: "50px" }}
        >
          <canvas id="myChart1"></canvas>
        </div>
      </Grid>

      <Grid item xs={12} style={{ height: "23vh", marginTop: "2vh" }}>
        <div class="dropdown mt-5" style={{ display: "flex" }}>
          <span style={{ marginLeft: "100px", fontSize: "2vh" }}>
            {" "}
            Result Type :{" "}
          </span>
          <select
            style={{ textAlign: "left", marginLeft: "2vh", width: "20vh" }}
            id="graph1Dropdown"
            onchange="updateChart(chart2, this.value)"
          >
            <option value="all">All</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </Grid>

      <Grid style={{ height: "23vh" }}>
        <div
          class="graph-container"
          style={{ textAlign: "left", marginLeft: "50px" }}
        >
          <canvas id="myChart1"></canvas>
        </div>
      </Grid>
    </div>
  );
}

export default Graphs;

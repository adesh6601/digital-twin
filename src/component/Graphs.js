import React from "react";

function Graphs() {
  return (
    <div>
      <div class="dropdown mt-5">
        <select id="graph1Dropdown" onchange="updateChart(chart1, this.value)">
          <option value="all">All</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
  );
}

export default Graphs;

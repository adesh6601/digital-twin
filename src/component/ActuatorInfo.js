import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";

const gridTitleStyle = {
  textAlign: "left",
  marginLeft: "20px",
  marginTop: "10px",
};

const gridContentStyle = {
  textAlign: "left",
  marginLeft: "50px",
  marginTop: "10px",
};

function ActuatorInfo() {
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
  };

  return (
    <div style={{ backgroundColor: "#a5bde8", marginTop: "2rem" }}>
      <Grid container item xs={12}>
        <Grid item xs={7} style={{ height: "8vh" }}>
          <div style={gridTitleStyle}> Actuator Information </div>

          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            Actuator Model :
            <select>
              <option value="">Select...</option>
            </select>
          </div>
        </Grid>

        <Grid item xs={5} style={{ height: "8vh" }}>
          <div style={gridTitleStyle}> Yoke Style </div>

          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "8vh" }}>
                <input type="radio" name="yoke-style" /> Symmetric
              </Grid>
              <Grid item xs={6} style={{ height: "8vh" }}>
                <input type="radio" name="yoke-style" /> Canted
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={7} style={{ height: "16vh" }}>
          <div style={gridTitleStyle}> Fail safe type </div>

          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={3} style={{ height: "4vh" }}>
                <input type="radio" name="fail-safe-type" /> None
              </Grid>
              <Grid item xs={9} style={{ height: "4vh" }}>
                <input type="radio" name="fail-safe-type" /> Spring Return
              </Grid>
            </Grid>
          </div>

          <div style={{ textAlign: "left", marginLeft: "50px" }}>
            Spring Stiffness :
            <select>
              <option value="">Select...</option>
            </select>{" "}
            N/M
          </div>
        </Grid>

        <Grid item xs={5} style={{ height: "16vh" }}>
          <Grid container item xs={12}>
            <Grid item xs={12} style={{ height: "8vh" }}>
              <div style={gridTitleStyle}> Actuator Application </div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  marginTop: "10px",
                }}
              >
                <Grid container item xs={12}>
                  <Grid item xs={6} style={{ height: "8vh" }}>
                    <input type="radio" name="actuator-appplication" /> On/Off
                  </Grid>
                  <Grid item xs={6} style={{ height: "8vh" }}>
                    <input type="radio" name="actuator-appplication" />{" "}
                    Modulating
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} style={{ height: "8vh" }}>
              <div style={gridTitleStyle}> Fail Direction</div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "50px",
                  marginTop: "10px",
                }}
              >
                <Grid container item xs={12}>
                  <Grid item xs={6} style={{ height: "8vh" }}>
                    <input type="radio" name="fail-direction" /> DA
                  </Grid>
                  <Grid item xs={6} style={{ height: "8vh" }}>
                    <input type="radio" name="fail-direction" /> DD
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ height: "8vh" }}>
          <div style={gridTitleStyle}> Pressure Setup </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "8vh" }}>
                Supply Pressure :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                bar
              </Grid>
              <Grid item xs={6} style={{ height: "8vh" }}>
                Valve Pressure :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                bar
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ height: "16vh" }}>
          <div style={gridTitleStyle}> Actuator Sizing </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
            <Grid item xs={6} style={{ height: "4vh" }}>
      Bore Diameter :
      <select onChange={handleSelectChange}>
        <option value="select">Select...</option>
        <option value="115">115</option>
        <option value="140">140</option>
        <option value="196">196</option>
        <option value="244">244</option>
        <option value="275">275</option>
        <option value="310">310</option>
        <option value="372">372</option>
      </select>{" "}
      mm
    </Grid>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Bore Length :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                mm
              </Grid>
            </Grid>
          </div>

          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "8vh" }}>
                Stroke Length :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                mm
              </Grid>
              <Grid item xs={6} style={{ height: "8vh" }}>
                Crank Length :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                mm
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ height: "32vh" }}>
          <div style={gridTitleStyle}> Properties </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Torque </button>
              </Grid>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Material </button>
              </Grid>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Control Unit </button>
              </Grid>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Safety Factor </button>
              </Grid>
            </Grid>
          </div>
          <div style={{ textAlign: "left", marginLeft: "50px" }}>
            {" "}
            Valve Sizing Torque :{" "}
          </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Break to Open :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Break to Open :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
            </Grid>
          </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Run :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Break to Open :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
            </Grid>
          </div>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={6} style={{ height: "4vh" }}>
                End/Open :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
              <Grid item xs={6} style={{ height: "4vh" }}>
                Break to Open :
                <select>
                  <option value="">Select...</option>
                </select>{" "}
                N-m
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} style={{ height: "8vh" }}>
          <div
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "10px" }}
          >
            <Grid container item xs={12}>
              <Grid item xs={3} style={{ height: "8vh" }}></Grid>
              <Grid item xs={3} style={{ height: "8vh" }}></Grid>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Compile </button>
              </Grid>
              <Grid item xs={3} style={{ height: "8vh" }}>
                <button> Simulate </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ActuatorInfo;

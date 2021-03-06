import React, { useState } from "react";

import "./App.css";

import { Intervals, Timeline, RequestFrame } from "./elements";

import logo from "./assets/spoton.png";

function App() {
  const [selEx, setSelEx] = useState(0);
  const [toggle1, setToggle1] = useState(false);
  const selArea = selArea => {
    setSelEx(selArea);
  };
  return (
    <main className="main_grid">
      <div
        onMouseOver={() => selArea(1)}
        id="hero"
        className={`hero col ${selEx === 1 && "active"}`}
      >
        <section className="inner_row title">
          <h2>Simple class toggle</h2>
        </section>
        <section className="inner_row animation flex-centered">
          <img
            className={`logo img-fluid disappear ${toggle1 && "appear"} `}
            src={logo}
            alt="spotOn!"
          />
        </section>
        <section className="inner_row">
          <div className="row h-100 justify-content-end">
            <div className="col-2 d-flex align-items-center">
              <button
                onClick={() => {
                  setToggle1(!toggle1);
                }}
                className="btn btn-primary lower_btn btn-block"
                id="toggle_1"
              >
                Play{" "}
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className={`code_section abs_cont `}>
        <span className="red_button" />
        <span className="yellow_button" />
        <span className="green_button" />
        <pre className="pre">
          {`
  <img
    className={\`logo \${show && "appear"} \`}
    src={logo}
    alt="spotOn!"
  />
          `}
        </pre>
      </div>
      <Intervals selArea={selArea} areaId={2} selEx={selEx} />
      <RequestFrame selArea={selArea} areaId={3} selEx={selEx} />
      <Timeline selArea={selArea} areaId={4} selEx={selEx} />
    </main>
  );
}

export default App;

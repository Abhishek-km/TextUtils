import React, { useState } from "react";

export default function About(props) {
  const [mode, setMode] = useState({
    color: props.appMode === "dark" ? "white" : "black",
    backgroundColor: props.appMode === "dark" ? "black" : "white",
  });

  const [modeText, setModeText] = useState(
    "Enable Dark Mode for About Section"
  );

  const ChangeColorMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "#042743",
      });
      setModeText("Enable Light Mode for About Section");
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setModeText("Enable Dark Mode for About Section");
    }
  };

  return (
    <div className="container" style={mode}>
      <h2>About TextUtils</h2>
      <div className="accordion" id="accordionExample" style={mode}>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mode}
            >
              <strong>What TextUtils is?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              TextUtils is a utility to analyze your text quickly and efficiently. Be it word count, character count or
              anything else you can think of.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mode}
            >
              <strong>Why it was developed?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              TextUtils was developed to make the life of people easier. It was developed to help people analyze their
              text easily and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mode}
            >
              <strong>Developer Info</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              TextUtils was developed by <strong>Abhishek Kumar</strong> on 19th Feb 2025. It was developed using
              React.js.
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={ChangeColorMode}
        >
          {modeText}
        </button>
      </div>
    </div>
  );
}

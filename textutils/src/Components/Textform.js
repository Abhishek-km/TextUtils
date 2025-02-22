import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  document.title = "TextUtils - Home";
  return (
    <>
      <div
        style={{ color: props.appMode === "dark" ? "white" : "#042743" }}
        className="container"
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="11"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.appMode === "dark" ? "#042743" : "white",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpperCase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.appMode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}{" "}
          words, {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
};

Textform.defaultProps = {
  heading: "Enter your text to analyze",
};

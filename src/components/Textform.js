import React, { useState } from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
  heading: PropTypes.string,
};

const defaultProps = {
  heading: "page heading here...",
};

/**
 *
 */
const Textform = (props) => {
  const handleUpClick = () => {
    // console.log("UpperCase button was clicked");
    let newText = text.toUpperCase();
    setText("The final string is, " + newText);
  };

  const handleOnChange = (event) => {
    // console.log("handling on change");
    setText(event.target.value);
  };

  const handleDelText = (event) => {
    setText("");
  };

  const handleExtraSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = (event) => {
    // text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "black",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-dark mx-1" onClick={handleDelText}>
        Delete
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>
      <div className="container my-3">
        <h2>Your summary.</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>average reading time is {text.length * 0.0033 * 60} seconds</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

Textform.propTypes = propTypes;
Textform.defaultProps = defaultProps;
// #endregion

export default Textform;

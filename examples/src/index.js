import React from "react";
import { render } from "react-dom";
import { validate } from "../../src";
const App = () => (
  <div style={{ textAlign: "center" }}>
    <h2>validate(inputString, outputString)</h2>
    <center>
      <table style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black" }}>
          <td>Input</td>
        </th>
        <th style={{ border: "1px solid black" }}>
          <td>Output</td>
        </th>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>
            validate(123)
          </td>
          <td style={{ border: "1px solid black" }}>
            {validate(123)}
          </td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>
            validate(undefined)
          </td>
          <td style={{ border: "1px solid black" }}>
            {validate(undefined)}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>
            validate(null)
          </td>
          <td style={{ border: "1px solid black" }}>
            {validate(null)}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>
            validate(Infinity)
          </td>
          <td style={{ border: "1px solid black" }}>
            {validate(Infinity)}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>
            validate(NaN)
          </td>
          <td style={{ border: "1px solid black" }}>
            {validate(NaN)}
          </td>
        </tr>
      </table>
    </center>
  </div>
);
render(<App />, document.getElementById("root"));

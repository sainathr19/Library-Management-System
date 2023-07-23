import React from "react";
import NavBar from "./navabar";
import "./css/manual.css";
import Logrow from "./Logrow";

export default function Logs() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container-logs">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Rollno</th>
              <th scope="col">Book id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12-03-2023</td>
              <td scope="row">21AT1A3519</td>
              <td>1001</td>
              <td>Return</td>
            </tr>
            <tr>
              <td>12-03-2023</td>
              <td scope="row">21AT1A3537</td>
              <td>1005</td>
              <td>Issue</td>
            </tr>
            <tr>
              <td>12-03-2023</td>
              <td scope="row">21AT1A3507</td>
              <td>1002</td>
              <td>Issue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

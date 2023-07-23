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
              <th scope="col">Rollno</th>
              <th scope="col">Book id</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Return Date</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">21AT1A3519</td>
              <td>1001</td>
              <td>12-03-2023</td>
              <td>26-03-2023</td>
              <td>Not Returned</td>
              <td>Coming soon</td>
            </tr>
            <tr>
              <td scope="row">21AT1A3537</td>
              <td>1005</td>
              <td>12-03-2023</td>
              <td>26-03-2023</td>
              <td>Returned</td>
              <td>Coming soon</td>
            </tr>
            <tr>
              <td scope="row">21AT1A3507</td>
              <td>1002</td>
              <td>12-03-2023</td>
              <td>26-03-2023</td>
              <td>Not Returned</td>
              <td>Coming soon</td>
            </tr>
            <Logrow />
          </tbody>
        </table>
      </div>
    </>
  );
}

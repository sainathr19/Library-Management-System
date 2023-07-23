import "./css/manual.css";
import NavBar from "./navabar";
import { useState } from "react";
export default function Return() {
  const [rollno, setrollno] = useState("");
  const [bookid, setbookid] = useState("");
  let returnsubmit = (e) => {
    e.preventDefault();
    const returnobj = { rollno, bookid };
    console.log(returnobj);
  };
  let bookidinp = (e) => {
    if (e.target.value === "") {
      document.getElementById("errorbookid").innerHTML = "Enter Valid Book id";
    } else {
      document.getElementById("errorbookid").innerHTML = "";
      setbookid(e.target.value);
    }
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <form onSubmit={returnsubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="rollno"
              placeholder="21AT1A3519"
              onChange={(e) => setrollno(e.target.value)}
            />
            <span id="errorrollno"></span>
            <label htmlFor="rollno">Roll Number</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="bookid"
              placeholder="1001"
              onChange={bookidinp}
            />
            <span id="errorbookid"></span>
            <label htmlFor="bookid">Book Id</label>
          </div>
          <div className="issue-btn my-4">
            <button className="btn btn-outline-success" type="submit">
              Mark Returned
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

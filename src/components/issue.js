import "./css/manual.css";
import NavBar from "./navabar";
import { useState } from "react";
export default function Issue() {
  const [rollno, setrollno] = useState("");
  const [bookid, setbookid] = useState("");
  let issuesubmit = (e) => {
    e.preventDefault();
    const issueobj = { rollno, bookid };
    console.log(issueobj);
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <form onSubmit={issuesubmit}>
          <div className="form-floating mb-3">
            <input
              name="rollno"
              type="text"
              className="form-control"
              id="rollno"
              onChange={(e) => setrollno(e.target.value)}
            />
            <label htmlFor="rollno">Roll Number</label>
          </div>
          <div className="form-floating">
            <input
              name="bookid"
              type="text"
              className="form-control"
              id="bookid"
              onChange={(e) => setbookid(e.target.value)}
            />
            <label htmlFor="bookid">Book Id</label>
          </div>
          <div className="issue-btn my-4">
            <button className="btn btn-outline-success" type="submit">
              Issue Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

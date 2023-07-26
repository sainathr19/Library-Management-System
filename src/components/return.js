import "./css/manual.css";
import NavBar from "./navabar";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Return() {
  const [rollno, setrollno] = useState("");
  const [bookid, setbookid] = useState("");
  const [response, setresponse] = useState({
    data: {
      response: "None",
    },
  });

  let returnsubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:5000/return?rollno=" + rollno + "&bookid=" + bookid
      )
      .then((res) => {
        setresponse(res);
      })
      .catch((e) => {
        setresponse(e);
      });
  };
  useEffect(() => {
    if (response["data"]["response"] === "Success") {
      toast.success("Book returned", { autoClose: 2000 });
    } else if (response["data"]["response"] === "NotFound") {
      toast.error("No such Book is Issued", { autoClose: 2000 });
    }
    console.log(response);
  }, [response]);

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
              onChange={(e) => {
                setbookid(e.target.value);
              }}
            />
            <span id="errorbookid"></span>
            <label htmlFor="bookid">Book Id</label>
          </div>
          <div className="issue-btn my-4">
            <button
              onClick={returnsubmit}
              className="btn btn-outline-success"
              type="button"
            >
              Mark Returned
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

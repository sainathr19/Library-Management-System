import "./css/manual.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Renew() {
  const [rollno, setrollno] = useState("");
  const [bookid, setbookid] = useState("");
  const [response, setresponse] = useState({
    data: {
      response: "None",
    },
  });

  let renewsubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:5000/renew?rollno=" + rollno + "&bookid=" + bookid
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
      toast.success("Book renewed", { autoClose: 2000 });
    } else if (response["data"]["response"] === "NotFound") {
      toast.error("No such Book is Issued", { autoClose: 2000 });
    }
    console.log(response);
  }, [response]);
  return (
    <>
      <div className="container">
        <form onSubmit={renewsubmit}>
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
              Renew Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

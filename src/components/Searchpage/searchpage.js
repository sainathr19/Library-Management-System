import "./searchpage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Searchpage() {
  const [search, setsearch] = useState("");
  const [response, setresponse] = useState([]);
  const searchbutton = (e) => {
    axios
      .get("http://127.0.0.1:5000/search?rollno=" + search)
      .then((res) => setresponse(res.data))
      .catch((e) => setresponse(e));
  };
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <>
      <div className="searchhead">
        <h4>Search</h4>
        <div className="search">
          <input
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            className="form-control"
          />
          <button
            onClick={searchbutton}
            type="button"
            className="btn btn-outline-success"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container history">
        <h4>Student History</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Book id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {response.map((i) => {
              return (
                <tr>
                  <td>{i.date}</td>
                  <td>{i.time}</td>
                  <td>{i.bookid}</td>
                  <td>{i.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

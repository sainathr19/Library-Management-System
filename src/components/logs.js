import { useEffect, useState } from "react";
import NavBar from "./navabar";
import "./css/manual.css";
import axios from "axios";

export default function Logs() {
  const [data, setdata] = useState([]);
  const getdata = async (e) => {
    await axios
      .get("http://127.0.0.1:5000/logs")
      .then((res) => {
        setdata(res.data);
        console.log("done");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(data);
  return (
    <>
      <NavBar></NavBar>
      <h3 class="loghead my-2">Library Logs</h3>
      <div class="logb">
        <div className="logpage">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Rollno</th>
                <th scope="col">Book id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr>
                    <td>{i.date}</td>
                    <td>{i.time}</td>
                    <td>{i.rollno}</td>
                    <td>{i.bookid}</td>
                    <td>{i.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

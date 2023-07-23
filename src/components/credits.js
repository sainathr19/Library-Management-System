//import React from "react";
import NavBar from "./navabar";

export default function Credits() {
  return (
    <>
      <NavBar />
      <div
        class="credits my-4"
        style={{
          display: "flex",
          "text-align": "center",
        }}
      >
        <div
          class=" container card mx-3"
          style={{ height: "30rem", width: "30rem", "text-align": "center" }}
        >
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/06/IMG_20190604_145431-1.jpg"
            class="card-img-top"
            style={{ height: "20rem", "text-align": "center" }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">P.SUMAN PRAKASH</h5>
            <p class="card-text">HOD , CSE-IOT</p>
          </div>
        </div>
        <div
          class=" container card mx-3"
          style={{ width: "30rem", "text-align": "center" }}
        >
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/06/janardhan.jpg"
            class="card-img-top"
            style={{ height: "20rem", "text-align": "center" }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">M.Janardhan</h5>
            <p class="card-text">Associate Professor</p>
            <p>Database and Management Systems</p>
          </div>
        </div>
        <div
          class=" container card mx-3"
          style={{ width: "30rem", "text-align": "center" }}
        >
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/05/Vishnu-Kumar-Photo.jpg"
            class="card-img-top"
            style={{ height: "20rem", "text-align": "center" }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">P.Vishnu Kumar</h5>
            <p class="card-text">Assistant Professor</p>
          </div>
        </div>
      </div>
    </>
  );
}

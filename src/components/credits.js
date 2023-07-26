//import React from "react";
import NavBar from "./navabar";

export default function Credits() {
  return (
    <>
      <NavBar />
      <div class="credits">
        <div class="cardbox">
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/06/IMG_20190604_145431-1.jpg"
            class="pimg"
            alt="..."
          />
        </div>
        <div class="cardbox">
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/06/janardhan.jpg"
            class="pimg"
            alt="..."
          />
        </div>
        <div class="cardbox">
          <img
            src="https://www.gpcet.ac.in/wp-content/uploads/2019/05/Vishnu-Kumar-Photo.jpg"
            class="pimg"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}

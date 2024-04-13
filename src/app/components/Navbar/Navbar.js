"use client";
import { useState, useEffect } from "react";
import "./Navbar.css";
import "material-symbols";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className="left-bar">
          <div>{currentTime}</div>
          <div>
            <span className="material-symbols-outlined">near_me</span>{" "}
          </div>
        </div>
        <div className="right-bar">
          <div>
            <span className="material-symbols-outlined">
              signal_cellular_alt
            </span>{" "}
          </div>
          <div>
            <span className="material-symbols-outlined">wifi</span>{" "}
          </div>
          <div>
            <span className="material-symbols-outlined">battery_horiz_075</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

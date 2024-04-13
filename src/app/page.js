import Image from "next/image";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import "./Home.css";
import "material-symbols";
import Sendnotification from "./components/Sendnotification/Sendnotification";

export default function Home() {
  const renderCircle = (outer, inner, zIndex) => {
    return (
      <div
        className="circle1-outer"
        style={{
          width: outer,
          height: outer,
          zIndex: zIndex,
          animation: `circleAnimation${zIndex} 2s infinite`,
        }}
      >
        <div
          className="circle1-inner"
          style={{
            width: inner,
            height: inner,
            zIndex: zIndex,
            animation: `circleAnimation${zIndex}${zIndex} 2s infinite`,
          }}
        ></div>
      </div>
    );
  };
  return (
    <>
      <div className="home-screen">
        <Navbar />
        <div className="home-headings">
          <h1>DiGiLABS Notify</h1>
          <h6>All notification at one place.</h6>
        </div>
        {renderCircle("160px", "158px", "4")}
        {renderCircle("222px", "220px", "3")}
        {renderCircle("278px", "276px", "2")}
        {renderCircle("344px", "342px", "1")}
        <div className="bell-icon">
          <span className="notification-icon material-symbols-outlined">
            notifications
          </span>
        </div>
        <Sendnotification />
      </div>
    </>
  );
}

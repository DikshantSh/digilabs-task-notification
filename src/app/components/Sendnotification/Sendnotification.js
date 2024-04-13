"use client";
import { useState, useEffect } from "react";
import "./Sendnotification.css";

function Sendnotification() {
  const [notificationSupported, setNotificationSupported] = useState(false);

  useEffect(() => {
    if ("Notification" in window) {
      setNotificationSupported(true);
    } else {
      console.log("This browser does not support desktop notification");
    }
  }, []);

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return false;
    }
  };

  const showNotification = (title, options) => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    }
  };

  const handleSendNotification = async () => {
    if (!notificationSupported) {
      console.log("Desktop notifications not supported");
      return;
    }

    const permissionGranted = await requestNotificationPermission();
    if (!permissionGranted) {
      console.log("Notification permission not granted");
      return;
    }

    showNotification("New Notification", {
      body: "This is a sample notification",
      // icon: "/path/to/icon.png",
    });

    console.log("Notification sent");
  };

  return (
    <>
      <div className="send-notification-container">
        <div className="send-notification-wrap"></div>
        <div
          className="send-notification cursor-pointer"
          onClick={handleSendNotification}
        >
          <h1>Send Notification</h1>
        </div>
      </div>
    </>
  );
}

export default Sendnotification;

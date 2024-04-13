
"use client";
import "./Sendnotification.css";


function Sendnotification() {
  async function requestNotificationPermission() {
    try {
      await Notification.requestPermission();
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  }

  function showNotification(title, options) {
    new Notification(title, options);
  }

  const handleSendNotification = () => {
    requestNotificationPermission();
    showNotification("New Notification", {
      body: "This is a sample notification",
      // icon: "/path/to/icon.png",
    });
    console.log("notif");
  };
  return (
    <div>
      <div className="send-notification-wrap"></div>
      <div className="send-notification cursor-pointer" onClick={handleSendNotification}>
        <h1>Send Notification</h1>
      </div>
    </div>
  );
}

export default Sendnotification

import React from "react";
import { Analytics } from "@vercel/analytics/react";

// import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DefaultLayout from "./layouts/DefaultLayout";
import { ConfigProvider } from "antd";

// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(
    function (registration) {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );

  // Listen for messages from the service worker
  navigator.serviceWorker.addEventListener("message", function (event) {
    // Check if the message is what we expect
    if (
      event.data &&
      event.data.title === "Cập nhật" &&
      event.data.action === "reload"
    ) {
      // Show a notification or a message to the user
      if (window.confirm(event.data.message)) {
        window.location.reload();
      }
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#eb4b16",
        },
      }}
    >
      <DefaultLayout />
    </ConfigProvider>
    <Analytics />
  </React.StrictMode>
);

reportWebVitals();

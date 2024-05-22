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
  navigator.serviceWorker.register("/sw.js").then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // New content is available and will be used when all tabs for this page are closed.
            window.confirm(
              "New content is available. Please close all tabs for this page to update."
            );
          }
        }
      };
    };
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

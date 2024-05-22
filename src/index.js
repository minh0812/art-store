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

navigator.serviceWorker
  .register("/sw.js")
  .then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // New content is available and will be used when all tabs for this page are closed.
            const promptUserToUpdate = () => {
              if (
                window.confirm(
                  "New version available! Do you want to reload the page?"
                )
              ) {
                window.location.reload();
              }
            };
            promptUserToUpdate();
          } else {
            // Content is cached for offline use.
            console.log("Content is cached for offline use.");
          }
        }
      };
    };
  })
  .catch((error) => {
    console.error("Error during service worker registration:", error);
  });

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

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

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log("New content is available; please refresh.");
              alert("New content is available; please refresh.");
              // You can also display a notification prompting the user to refresh the page
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              console.log("Content is cached for offline use.");
              alert("Content is cached for offline use.");
            }
          }
        });
      });
    },
    function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );
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

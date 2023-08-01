import React from "react";
import { Analytics } from "@vercel/analytics/react";

// import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DefaultLayout from "./layouts/DefaultLayout";
import { ConfigProvider } from "antd";
// import ErrorLayout from "./layouts/ErrorLayout";

// setup analytics

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorLayout}>
      <DefaultLayout />
    </ErrorBoundary> */}
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

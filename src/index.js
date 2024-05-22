import React from "react";
import { Analytics } from "@vercel/analytics/react";

// import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DefaultLayout from "./layouts/DefaultLayout";
import { ConfigProvider } from "antd";

import {
  checkVersion,
  pollingCompareVersion,
  unCheckVersion,
} from "version-rocket";
// It is recommended to use the version field in package.json, or you can customize versions
const { version } = require("../package.json");

pollingCompareVersion(
  version,
  `${window.location.origin}/version.json`,
  30000,
  (data) => {
    console.log(data);
  }
);

checkVersion({
  localPackageVersion: version,
  originVersionFileUrl: `${window.location.origin}/version.json`,
  // Refer to API for more configuration options
});

// To terminate version detection, call the unCheckVersion method during the destruction life cycle. For details, see the API
unCheckVersion({ closeDialog: false });

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

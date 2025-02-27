import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Bootstrap (from node_modules)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // For Bootstrap components

// Import Bootstrap Icons from local fonts
import "./assets/css/bootstrap-icons.css";

// Import Custom Styles
import "./assets/css/main-page.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/aos.css"; // AOS styles

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

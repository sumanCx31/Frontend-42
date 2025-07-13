import '@ant-design/v5-patch-for-react-19';
import React from "react";
import { createRoot } from "react-dom/client";
// import HomePage from "./pages/home";
import RouterConfig from "./config/router.config";
import "./assets/css/style.css"

const rootElem = document.getElementById("root")!; 
const reactElem = createRoot(rootElem);


reactElem.render(
  <React.StrictMode>
    <RouterConfig/>
  </React.StrictMode>
);

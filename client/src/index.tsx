import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode!); // createRoot(container!) if you use TypeScript
root.render(<App />);

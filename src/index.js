import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./components/Weather";
// import App from "./container/App";

ReactDOM.render(
	<React.StrictMode>
		<Weather />
	</React.StrictMode>,
	document.getElementById("root")
);

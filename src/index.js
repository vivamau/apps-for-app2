import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import siteRoutes from "./routes/site";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";
import "./assets/css/base.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {siteRoutes.map((prop, key) => {
          if (prop.private)
            return <PrivateRoute exact key={prop.path} {...prop} />;
          return <Route key={prop.path} {...prop} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

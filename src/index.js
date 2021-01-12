import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import Video from './Components/Video';
import Tags from './Components/Tags';
import Tag from './Components/Tag';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/tag/:tagName">
          <Tag />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/vid/:id">
          <Video />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
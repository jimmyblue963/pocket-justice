import React, { useState } from "react";
import "./App.css";
import Petitions from "./components/pages/petitions";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import "antd/dist/antd.css";
import SideNav from "./components/sideNav/sideNav";
import { fetchData } from "./scripts/util";
import history from "./history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";


function App() {
  var path = window.location.pathname;

  const handleNav = (e: any) => {
    fetchData();
    console.log("click ", e);
    history.push("/" + e.key);
    window.location.reload();
  };

  const [scrollerVisible, setVisible] = useState(false);

  return (
    <Router>
      <div className="App" style={{ display: "flex", outline: "none" }}
        onMouseOver={() => { setVisible(true) }}
        onMouseOut={() => setVisible(false)}
      >
        <SideNav handleNav={handleNav} state={path} />
        <div className="switcher" style={{overflow: `${scrollerVisible ? 'auto' : 'hidden'}`}}>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/petitions" component={Petitions}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

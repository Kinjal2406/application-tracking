import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ApplicationList from "./components/application-list.component";
import CreateApplication from "./components/create-application.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ApplicationList}/>
        <Route path="/application" exact component={CreateApplication}/>
        <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;

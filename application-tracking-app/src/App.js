
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ApplicationList from "./components/application-list.component";
import CreateApplication from "./components/create-application.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ApplicationList}/>
      <Route path="/create" exact component={CreateApplication}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;

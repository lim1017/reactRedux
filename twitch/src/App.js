import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";

import StreamList from "./components/Streams/SteamList";
import DeleteStream from "./components/Streams/DeleteStream";
import CreateStream from "./components/Streams/CreateStream";
import EditStream from "./components/Streams/EditStream";
import ShowStream from "./components/Streams/ShowStream";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" exact component={CreateStream} />
            <Route path="/streams/edit/:id" exact component={EditStream} />
            <Route path="/streams/delete/:id" exact component={DeleteStream} />
            <Route path="/streams/show/:id" exact component={ShowStream} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

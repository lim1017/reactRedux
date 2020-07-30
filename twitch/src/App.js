
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import StreamList from "./components/Streams/SteamList";
import DeleteStream from "./components/Streams/DeleteStream";
import CreateStream from "./components/Streams/CreateStream";
import EditStream from "./components/Streams/EditStream";
import ShowStream from "./components/Streams/ShowStream";
import Header from "./components/Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" exact component={CreateStream} />
          <Route path="/streams/edit" exact component={EditStream} />
          <Route path="/streams/delete" exact component={DeleteStream} />
          <Route path="/streams/show" exact component={ShowStream} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

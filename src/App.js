import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Entry } from "./pages/entry/Entry.pages";
// import { Entry } from "./pages/entry/Entry.pages";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        All the components except header and footer goes here
      </DefaultLayout>
    </div>
  );
}

export default App;

import React, { FC } from "react";
import Nav from "./components/Navbar/Nav";
import { Button } from "@material-ui/core";
const App: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default App;

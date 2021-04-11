import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";

const Nav: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <div>Welcome To My Portfolio</div>
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact me</Button>
          </ButtonGroup>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

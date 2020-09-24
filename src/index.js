// Imports
import users from "./data";
import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

// Components

import StyledGrid from "./components/grid";

const App = () => {
    return (
        <div className="grid">
            <Normalize />
            <StyledGrid users={users} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

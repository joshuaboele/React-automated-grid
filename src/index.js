// Imports
import users from "./data";
import React from "react";
import ReactDOM from "react-dom";

// Components

import StyledGrid from "./components/grid";

const App = () => {
    return (
        <div className="grid">
            <StyledGrid users={users} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

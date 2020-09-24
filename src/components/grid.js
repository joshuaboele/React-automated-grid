import React from "react";
import styled from "styled-components";

// Components

import StyledProfile from "./profile";

const Grid = ({ users, className }) => (
    <div className={className}>
        {users.map((user) => (
            <StyledProfile {...user} />
        ))}
    </div>
);

const StyledGrid = styled(Grid)`
    display: flex;
`;

export default StyledGrid;

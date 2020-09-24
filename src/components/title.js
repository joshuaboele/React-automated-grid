import styled from "styled-components";
import React from "react";

const Title = ({ titleName, className }) => <h1 className={className}>{titleName}</h1>;

const StyledTitle = styled(Title)`
    color: palevioletred;
    font-weight: bold;
`;

export default StyledTitle;

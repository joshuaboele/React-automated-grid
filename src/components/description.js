import styled from "styled-components";
import React from "react";

const Description = ({ descriptionText, className }) => <p className={className}>{descriptionText}</p>;

const StyledDescription = styled(Description)`
    padding: 5px;
`;

export default StyledDescription;

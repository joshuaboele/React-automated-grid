import styled from "styled-components";
import React from "react";

const Avatar = ({ image, className }) => <img className={className} alt="User" src={image}></img>;

const StyledAvatar = styled(Avatar)`
    width: 100%;
`;

export default StyledAvatar;

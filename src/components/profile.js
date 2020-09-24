import React from "react";
import styled from "styled-components";
import StyledTitle from "./title";
import StyledDescription from "./description";
import StyledAvatar from "./avatar";

const Profile = ({ imageUrl, name, description, className }) => {
    return (
        <div className={className}>
            <StyledAvatar image={imageUrl} />
            <StyledTitle titleName={name} />
            <StyledDescription descriptionText={description} />
        </div>
    );
};

const StyledProfile = styled(Profile)`
    width: calc(20% - 10px);
    margin: 0 5px;
`;

export default StyledProfile;

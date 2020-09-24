import React from "react";
import ReactDOM from "react-dom";

const Title = ({ titleName }) => <h1>{titleName}</h1>;

const Description = ({ descriptionText }) => <p>{descriptionText}</p>;

const Avatar = ({ image }) => <img src={image}></img>;

const Profile = ({ imageUrl, name, description }) => {
    return (
        <div>
            <Avatar image={imageUrl} />
            <Title titleName={name} />
            <Description descriptionText={description} />
        </div>
    );
};

const Grid = ({ users }) => (
    <div>
        {users.map((user) => (
            <Profile {...user} />
        ))}
    </div>
);

const App = () => {
    const users = [
        {
            imageUrl: "https://via.placeholder.com/200",
            name: "Joshua",
            description: "asdasd",
        },
        {
            imageUrl: "https://via.placeholder.com/200",
            name: "Jan",
            description: "ppqq",
        },
        {
            imageUrl: "https://via.placeholder.com/200",
            name: "Pietje",
            description: "xyz",
        },
    ];

    return (
        <div className="grid">
            <Grid users={users} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

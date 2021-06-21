import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const nameStyle = {
    color: "#61DBFB",
    fontSize: "2.4em",
    fontFamily: "MontSerrat",
  };
  const professionStyle = { color: "#2a2a2a", fontFamily: "MontSerrat" };
  const bioStyle = { color: "#2a2a2a", width: "70%", margin: "auto" };

  return (
    <div>
      <img src={props.children} alt="profile" />
      <h1 style={nameStyle}>Name: {props.fullName}</h1>
      <h2 style={professionStyle}>Profession: {props.profession}</h2>
      <p style={bioStyle}>bio: {props.bio}</p>

      <button onClick={() => props.handleName(props.fullName)}>
        click me!
      </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Debora Kurata",
  profession: "Angular Consultant and speaker",
  bio: "Exelent instructor",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default Profile;

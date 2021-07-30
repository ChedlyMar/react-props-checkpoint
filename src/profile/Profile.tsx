import CSS from "csstype";

interface Props {
  fullName: string;
  profession: string;
  bio: string;
  children: string;
  handleName: (fullName: string) => void;
}

function Profile(props: Props) {
  const nameStyle: CSS.Properties = {
    color: "#61DBFB",
    fontSize: "2.4em",
    fontFamily: "MontSerrat",
  };
  const professionStyle: CSS.Properties = {
    color: "#2a2a2a",
    fontFamily: "MontSerrat",
  };
  const bioStyle: CSS.Properties = {
    color: "#2a2a2a",
    width: "70%",
    margin: "auto",
  };
  const btnStyle: CSS.Properties = {
    padding: "2em 4em",
    marginTop: "2em",
    backgroundColor: "#61DBFB",
    fontFamily: "MontSerrat",
    fontSize: "1em",
    fontWeight: "bolder",
  };

  return (
    <div>
      <img src={props.children} alt="profile" />
      <h1 style={nameStyle}>Name: {props.fullName}</h1>
      <h2 style={professionStyle}>Profession: {props.profession}</h2>
      <p style={bioStyle}>bio: {props.bio}</p>

      <button style={btnStyle} onClick={() => props.handleName(props.fullName)}>
        click me!
      </button>
    </div>
  );
}

export default Profile;

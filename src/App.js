import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <Profile
        fullName="Chedly M"
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        profession="Full stack js instructor and developer"
        handleName={handleName}
      >
        {" ./logo192.png"}
      </Profile>
    </div>
  );
}

export default App;

import "./App.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="app">
      {/* Title */}
      <div className="app__title">Welcome User! Try Your Luck 🚀</div>

      {/* Game */}
      <Game />
    </div>
  );
}

export default App;

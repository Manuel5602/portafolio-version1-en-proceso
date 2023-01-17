import "./App.css";
import NavBar from "./components/Nav";
import NavBarTop from "./components/NavBarTop";
function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <NavBarTop />
        </div>
        <div className="grid-item-main">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;

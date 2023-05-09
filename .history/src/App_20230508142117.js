// import logo from "./assets/logo.svg";
import selfie from "./assets/selfie.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleWithLine />
        <div className="Image-container">
          <img src={selfie} className="App-logo" alt="logo" />
        </div>
        <div>
          <h3 id="under-construction">Under construction</h3>
        </div>
      </header>
    </div>
  );
}

function TitleWithLine() {
  return (
    <div className="TitleWithLine">
      <h1 id="title">JOSHUA ACHORN</h1>
      <div class="vl"></div>
      <h2 id="description">music - coding - design</h2>
    </div>
  );
}

export default App;

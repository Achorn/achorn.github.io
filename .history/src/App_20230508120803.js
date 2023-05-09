// import logo from "./assets/logo.svg";
import selfie from "./assets/selfie.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleWithLine />
        <img src={selfie} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function TitleWithLine() {
  return (
    <div className="TitleWithLine">
      <h1 id="title">ACHORN, JOSHUA</h1>
      <div class="vl"></div>
      <h2 id="description">music - coding - design</h2>
    </div>
  );
}

export default App;

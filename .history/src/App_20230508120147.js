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
      <p>Joshua Achorn</p>
      <div class="vl"></div>
      <p> Music - coding - design</p>
    </div>
  );
}

export default App;

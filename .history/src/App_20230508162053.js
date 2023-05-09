// import logo from "./assets/logo.svg";
import selfie from "./assets/selfie.jpg";
// import acorn from "./assets/acorn.svg";
import { ReactComponent as AcornSvg } from "./assets/acorn.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleWithLine />
        <div className="Image-container">
          <img src={selfie} className="App-logo" alt="logo" />
        </div>
        <UnderConstruction />
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

function UnderConstruction() {
  return (
    <div className="Under-construction">
      <h3 id="under-construction">UNDER</h3>
      {/* <img src={acorn} classname="acorn-logo" alt="acorn" /> */}
      <acornSvg />
      <h3 id="under-construction">CONSTRUCTION</h3>
    </div>
  );
}

export default App;

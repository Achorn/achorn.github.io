// import logo from "./assets/logo.svg";
import selfie from "./assets/selfie.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Joshua Achorn</p>
        <img src={selfie} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function TitleWithLine() {
  return (
    <div className="TitleWithLine">
      <tr>
        <td>Joshua Achorn</td>
        <td>
          <div class="vl"></div>
          <td> Music - coding - design</td>
        </td>
      </tr>
    </div>
  );
}

export default App;

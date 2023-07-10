// src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>Say Hello to ReactJS</h1>
      <p>
        You will learn how to use <br /> the most popular frontend library,
        <br />
        and become a super Ninja developer
      </p>

      <Button />

      <Card
        src="../assets/icon1.png"
        title="Declarative"
        desc="React makes it painelss to create interactive UIs"
      />
      <Card
        src="../assets/icon1.png"
        title="Components"
        desc="Build encapsulated components that manage their state"
      />
      <Card
        src="../assets/icon1.png"
        title="Single-Way"
        desc="A set of immutable values are passed to the components"
      />
      <Card
        src="../assets/icon1.png"
        title="JSX"
        desc="Statically-typed, designed to run on moderno browsers"
      />
    </div>
  );
}

export default App;

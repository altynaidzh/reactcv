import "./App.css";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import FirstBlock from "./firstBlock/FirstBlock";

function App() {
  return (
    <div className="App">
      <FirstBlock />
      <Education />
      <Experience />
    </div>
  );
}

export default App;

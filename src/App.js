import "./App.css";
import Hero from "./components/hero/hero";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Education from "./components/Educations/Education";
function App() {
  return (
    <div className="App">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="overlay"></div>
          <Hero></Hero>
          <Education></Education>
      </ClickSpark>
    </div>
  );
}

export default App;

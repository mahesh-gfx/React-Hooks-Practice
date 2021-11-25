import "./App.css";
import UseEffectExamples from "./components/UseEffectExamples";
import UseStateExample from "./components/UseStateExample";
function App() {
  return (
    <div className="App">
      <h1>useState Examples</h1>
      <UseStateExample />
      <h1>useEffect Examples</h1>
      <small>Check Console Log...</small>
      <UseEffectExamples />
    </div>
  );
}

export default App;

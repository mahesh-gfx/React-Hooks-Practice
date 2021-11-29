import "./App.css";
import UseEffectExamples from "./components/UseEffectExamples";
import UseMemoExamples from "./components/UseMemoExample/UseMemoExamples";
import UseStateExample from "./components/UseStateExample";
function App() {
  return (
    <div className="App">
      <h1>useState Examples</h1>
      <UseStateExample />
      <h1>useEffect Examples</h1>
      <small>Check Console Log...</small>
      <UseEffectExamples />
      <h1>useMemo Examples</h1>
      <UseMemoExamples />
    </div>
  );
}

export default App;

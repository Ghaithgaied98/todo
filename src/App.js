import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListTack from "./components/ListTack";

function App() {
  return (
    <div className="App-header">
      <h1>Let's get some work done!</h1>
      <AddTask />
      <FilterTask />
      <ListTack />
    </div>
  );
}

export default App;

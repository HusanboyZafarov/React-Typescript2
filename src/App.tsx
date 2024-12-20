import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/Navbar";
import Counter from "./state-management/counter/Counter";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <div className="p-3">
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </div>
  );
}

export default App;

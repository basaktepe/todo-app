import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <ToDoCreate></ToDoCreate>
      <TodoList></TodoList>
    </div>
  );
}

export default App;

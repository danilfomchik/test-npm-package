import "./App.css";
import AddTodoForm from "./comtonents/AddTodoForm/AddTodoForm";
import TodoList from "./comtonents/TodoList/TodoList";

function App() {
  return (
    <>
      <h1>TodoList</h1>

      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;

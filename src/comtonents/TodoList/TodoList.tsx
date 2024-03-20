import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import TodoItem from "../TodoItem/TodoItem";
import { TTodo } from "../types";
import { fetchTodo } from "../../store/todoSlice";

const TodoList = () => {
  const list = useAppSelector((state) => state.todo.list);
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])
  return (
    <div>
      <ul>
        {list?.map((todo:TTodo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

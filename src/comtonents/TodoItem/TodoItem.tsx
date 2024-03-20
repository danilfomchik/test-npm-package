import React from "react";
import { TTodo } from "../types";
import style from "./TodoItem.module.css";
import { useAppDispatch } from "../../store";
import { deleteTodo, setEditTodo } from "../../store/todoSlice";
interface TodoItemProps {
  todo: TTodo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = () => {
    dispatch(setEditTodo(todo))
  };
  return (
    <li className={style.item}>
      {todo.title}
      <div className={style.buttons}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </li>
  );
};

export default TodoItem;

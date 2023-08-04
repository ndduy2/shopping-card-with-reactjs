import React from "react";
import PropTypes from "prop-types";
import "./style.css";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList } = props;
  const { onTodoClick } = props;
  const todoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          className={todo.status === "completed" ? "completed" : ""}
          key={todo.id}
          onClick={() => todoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

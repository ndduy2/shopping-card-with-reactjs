import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Ăn",
      status: "new",
    },
    {
      id: 2,
      title: "Ngủ",
      status: "completed",
    },
    {
      id: 3,
      title: "Làm",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...todoList[idx],
      status: todoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const rerenderTodoList = todoList.filter(
    (item) => filterStatus === "all" || item.status === filterStatus
  );

  // console.log(rerenderTodoList);

  return (
    <div>
      <h3>To do list</h3>
      <TodoList todoList={rerenderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
